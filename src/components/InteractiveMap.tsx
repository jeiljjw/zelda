import { useState, useRef, useMemo, useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { allMapMarkers, MapMarker, categoryFilters } from '../data/map-markers'

// ==========================================
// 맵 이미지 설정 — 사용자가 맵 이미지 교체
// ==========================================
// 기본값: public/maps/hyrule-map.jpg
// 권장: 고해상도 BotW 하이랄 맵 이미지 (JPG/PNG)
// 무료 대체: https://github.com/zeldamaps/botw-map 에서 타일 가져오기
const MAP_IMAGE = '/maps/hyrule-map.jpg'
const MAP_WIDTH = 4880  // 픽셀 너비
const MAP_HEIGHT = 3400 // 픽셀 높이

// ==========================================
// 커스텀 마커 아이콘
// ==========================================
function createMarkerIcon(icon: string) {
  const html = `<div style="
    font-size: 22px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
    cursor: pointer;
    transition: transform 0.15s;
  " onmouseover="this.style.transform='scale(1.3)'" onmouseout="this.style.transform='scale(1)'"
  >${icon}</div>`

  return L.divIcon({
    html,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  })
}

// ==========================================
// 맵 스타일 (CSS)
// ==========================================
const mapStyles = `
  .hyrule-map-container {
    position: relative;
    width: 100%;
    height: 600px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--border, #374151);
  }
  .hyrule-map-container .leaflet-container {
    width: 100%;
    height: 100%;
    background: #1a1a2e;
  }
  .hyrule-map-container .leaflet-control-zoom a {
    background: #2d2d3f !important;
    color: #e2e8f0 !important;
    border-color: #374151 !important;
  }
  .hyrule-map-container .leaflet-control-zoom a:hover {
    background: #3d3d5f !important;
  }
  .hyrule-map-container .leaflet-popup-content-wrapper {
    background: #2d2d3f;
    color: #e2e8f0;
    border-radius: 8px;
    border: 1px solid #374151;
  }
  .hyrule-map-container .leaflet-popup-tip {
    background: #2d2d3f;
  }
  .hyrule-map-container .leaflet-popup-content {
    margin: 10px 14px;
    font-size: 13px;
    line-height: 1.5;
  }
  .hyrule-map-container .leaflet-popup-content strong {
    font-size: 14px;
    color: #38bdf8;
  }
  /* 카테고리 필터 칩 */
  .map-filter-bar {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 12px;
  }
  .map-filter-chip {
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 12px;
    cursor: pointer;
    border: 1px solid #374151;
    background: #1e1e2e;
    color: #94a3b8;
    transition: all 0.15s;
    user-select: none;
  }
  .map-filter-chip.active {
    background: #2563eb;
    color: #fff;
    border-color: #3b82f6;
  }
  .map-filter-chip:hover {
    border-color: #3b82f6;
    color: #e2e8f0;
  }
  /* 맵 안내 배너 */
  .map-banner {
    background: #1e1e2e;
    border: 1px solid #374151;
    border-radius: 8px;
    padding: 10px 16px;
    margin-bottom: 12px;
    font-size: 12px;
    color: #94a3b8;
  }
  .map-banner a {
    color: #38bdf8;
    text-decoration: underline;
  }
  /* 사이드바 */
  .map-sidebar {
    position: absolute;
    top: 0;
    right: 0;
    width: 260px;
    height: 100%;
    background: rgba(30, 30, 46, 0.95);
    backdrop-filter: blur(4px);
    z-index: 1000;
    border-left: 1px solid #374151;
    overflow-y: auto;
    padding: 12px;
    transform: translateX(100%);
    transition: transform 0.2s;
  }
  .map-sidebar.open {
    transform: translateX(0);
  }
  .map-sidebar-toggle {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1001;
    background: #2d2d3f;
    color: #e2e8f0;
    border: 1px solid #374151;
    border-radius: 6px;
    padding: 6px 10px;
    cursor: pointer;
    font-size: 12px;
  }
`

// ==========================================
// 메인 컴포넌트
// ==========================================
interface InteractiveMapProps {
  initialCategories?: string[]
}

export default function InteractiveMap({
  initialCategories,
}: InteractiveMapProps) {
  const [activeCategories, setActiveCategories] = useState<Set<string>>(
    () => new Set(initialCategories ?? ['tower', 'shrine', 'stable'])
  )
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [, setMapReady] = useState(false)

  // 필터 토글
  const toggleCategory = (key: string) => {
    setActiveCategories((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  // 필터된 마커
  const visibleMarkers = useMemo(() => {
    return allMapMarkers.filter((m) => activeCategories.has(m.category))
  }, [activeCategories])

  // 마커 레이어 관리 (리마운트 방지)
  useEffect(() => {
    // Leaflet map은 아래 refs에서 직접 관리
    setMapReady(false)
    setMapReady(true)
  }, [])

  return (
    <div>
      <style>{mapStyles}</style>

      {/* 카테고리 필터 */}
      <div className="map-filter-bar">
        {categoryFilters.map((f) => (
          <button
            key={f.key}
            className={`map-filter-chip ${activeCategories.has(f.key) ? 'active' : ''}`}
            onClick={() => toggleCategory(f.key)}
          >
            {f.icon} {f.label}
          </button>
        ))}
        <button
          className="map-filter-chip"
          onClick={() => setActiveCategories(new Set())}
          title="전체 해제"
        >
          ✕ 전체 해제
        </button>
      </div>

      {/* 맵 안내 배너 */}
      <div className="map-banner">
        🗺️ <strong>하이랄 인터랙티브 맵:</strong> 카테고리를 클릭해 필터를 토글하세요. 
        마커를 클릭하면 위치 정보를 볼 수 있습니다.
        <br />
        🌐 전체 인터랙티브 맵:{' '}
        <a href="https://zeldamaps.com/?game=BotW" target="_blank" rel="noreferrer">
          Zelda Maps
        </a>
        {' | '}
        <a href="https://botw.jonathantiritilli.com/" target="_blank" rel="noreferrer">
          BotW Map
        </a>
      </div>

      {/* 맵 컨테이너 */}
      <div className="hyrule-map-container">
        <LeafletMapInstance
          visibleMarkers={visibleMarkers}
          mapHeight={600}
        />

        {/* 사이드바 토글 */}
        <button className="map-sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? '✕ 닫기' : '📋 목록'}
        </button>

        {/* 사이드바 */}
        <div className={`map-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <h3 className="text-sm font-semibold text-text-primary mb-3">
            마커 목록 ({visibleMarkers.length}개)
          </h3>
          <div className="space-y-1">
            {visibleMarkers.map((marker) => (
              <div
                key={marker.id}
                className="text-xs p-2 rounded hover:bg-accent/10 cursor-pointer flex items-center gap-2"
                style={{ color: '#cbd5e1' }}
              >
                <span>{marker.icon}</span>
                <span>{marker.name}</span>
                <span className="ml-auto text-text-secondary">{marker.region}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 마커 통계 */}
      <div className="mt-3 flex gap-4 text-xs text-text-secondary flex-wrap">
        <span>
          전체 마커:{' '}
          <strong className="text-accent">{visibleMarkers.length}</strong>
        </span>
        {categoryFilters
          .filter((f) => activeCategories.has(f.key))
          .map((f) => {
            const count = visibleMarkers.filter((m) => m.category === f.key).length
            return (
              <span key={f.key}>
                {f.icon} {f.label}: <strong>{count}</strong>
              </span>
            )
          })}
      </div>
    </div>
  )
}

// ==========================================
// Leaflet 맵 인스턴스 (div로 직접 렌더링)
// ==========================================
function LeafletMapInstance({
  visibleMarkers,
  mapHeight,
}: {
  visibleMarkers: MapMarker[]
  mapHeight: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const markersLayerRef = useRef<L.LayerGroup | null>(null)

  // 맵 초기화 (1회)
  useEffect(() => {
    const containerEl = containerRef.current
    if (!containerEl) return
    if ((containerEl as any)._leaflet_map) return

    const map = L.map(containerEl, {
      crs: L.CRS.Simple,
      center: [MAP_HEIGHT / 2, MAP_WIDTH / 2],
      zoom: 1,
      minZoom: -2,
      maxZoom: 3,
      zoomControl: true,
      attributionControl: false,
    })
    ;(containerEl as any)._leaflet_map = map

    const bounds: L.LatLngBoundsExpression = [
      [0, 0],
      [MAP_HEIGHT, MAP_WIDTH],
    ]
    L.imageOverlay(MAP_IMAGE, bounds).addTo(map)

    // 마커 레이어 생성
    markersLayerRef.current = L.layerGroup().addTo(map)

    return () => {
      map.remove()
      delete (containerEl as any)._leaflet_map
    }
  }, [])

  // 마커 업데이트
  useEffect(() => {
    const layer = markersLayerRef.current
    if (!layer) return
    layer.clearLayers()
    for (const marker of visibleMarkers) {
      const [x, y] = marker.position
      const leafletLat = MAP_HEIGHT - y
      const leafletLng = x

      L.marker([leafletLat, leafletLng], {
        icon: createMarkerIcon(marker.icon),
      })
        .bindPopup(`
          <strong>${marker.icon} ${marker.name}</strong><br/>
          <span style="color:#94a3b8">지역: ${marker.region}</span>
          ${marker.extra ? `<br/><span style="color:#f59e0b">타입: ${marker.extra.type || ''}</span>` : ''}
        `)
        .addTo(layer)
    }
  }, [visibleMarkers])

  return <div ref={containerRef} style={{ width: '100%', height: `${mapHeight}px` }} />
}
