// ==========================================
// 마커 타입 정의
// ==========================================

export interface MapMarker {
  id: string
  name: string
  category: 'shrine' | 'divine-beast' | 'korok' | 'monster' | 'tower' | 'stable' | 'shop' | 'fairy-spring'
  region: string
  // Leaflet CRS.Simple 좌표 (x, y) — 맵 이미지 픽셀 기준
  // 맵 이미지를 4880x3400 픽셀로 가정 (표준 BotW 맵 비율)
  position: [number, number] // [lng/col, lat/row] — Leaflet [x, y]
  icon: string
  extra?: Record<string, string>
}

// ==========================================
// 타워 위치 (15개)
// ==========================================
export const towers: MapMarker[] = [
  { id: 'tower-great-plateau', name: '시작의 사당 타워', category: 'tower', region: '아카래 고원', icon: '🗼', position: [3150, 2680] },
  { id: 'tower-duhan', name: '두한 협곡 타워', category: 'tower', region: '아카래 고원', icon: '🗼', position: [3080, 2480] },
  { id: 'tower-mutsu', name: '무츠 촌 타워', category: 'tower', region: '아카래 고원', icon: '🗼', position: [3300, 2300] },
  { id: 'tower-hateno', name: '하타노 타워', category: 'tower', region: '네를 지방', icon: '🗼', position: [3900, 2450] },
  { id: 'tower-lanayru', name: '라네르 타워', category: 'tower', region: '라네르 지방', icon: '🗼', position: [3650, 2000] },
  { id: 'tower-accent', name: '아켄트 타워', category: 'tower', region: '라네르 지방', icon: '🗼', position: [3350, 1700] },
  { id: 'tower-eldin', name: '엘딘 타워', category: 'tower', region: '엘딘 산맥', icon: '🗼', position: [2950, 2050] },
  { id: 'tower-faron', name: '파롤 타워', category: 'tower', region: '피할 지방', icon: '🗼', position: [2700, 2650] },
  { id: 'tower-lake', name: '호수 타워', category: 'tower', region: '중앙 하이랄', icon: '🗼', position: [2600, 2150] },
  { id: 'tower-hebra', name: '헤브라 타워', category: 'tower', region: '헤브라 산맥', icon: '🗼', position: [1200, 1400] },
  { id: 'tower-tabantha', name: '타반타 타워', category: 'tower', region: '동네브 평원', icon: '🗼', position: [1250, 2000] },
  { id: 'tower-rido', name: '리도 타워', category: 'tower', region: '동네브 평원', icon: '🗼', position: [1350, 2400] },
  { id: 'tower-wasteland', name: '황무지 타워', category: 'tower', region: '게르디 사막', icon: '🗼', position: [1250, 2950] },
  { id: 'tower-gerudo', name: '게르드 타워', category: 'tower', region: '게르디 사막', icon: '🗼', position: [850, 2800] },
]

// ==========================================
// 요정 샘 (4개)
// ==========================================
export const fairySprings: MapMarker[] = [
  { id: 'fairy-cotter', name: '코터 요정의 샘', category: 'fairy-spring', region: '중앙 하이랄', icon: '✨', position: [2680, 2150] },
  { id: 'fairy-kaysa', name: '카이사 요정의 샘', category: 'fairy-spring', region: '피할 지방', icon: '✨', position: [2400, 2650] },
  { id: 'fairy-mija', name: '미자 요정의 샘', category: 'fairy-spring', region: '헤브라 산맥', icon: '✨', position: [1550, 1350] },
  { id: 'fairy-tera', name: '테라 요정의 샘', category: 'fairy-spring', region: '엘딘 산맥', icon: '✨', position: [2850, 1950] },
]

// ==========================================
// 주요 위치 (역/안정소/상점)
// ==========================================
export const villages: MapMarker[] = [
  { id: 'village-kakariko', name: '카카리코 마을', category: 'stable', region: '네를 지방', icon: '🏘️', position: [3500, 2400] },
  { id: 'village-hateno', name: '하타노 마을', category: 'stable', region: '네를 지방', icon: '🏘️', position: [3950, 2300] },
  { id: 'village-lurelo', name: '루렐로 마을', category: 'stable', region: '피할 지방', icon: '🏘️', position: [2800, 2750] },
  { id: 'village-gerudo', name: '게르드 마을', category: 'stable', region: '게르디 사막', icon: '🏘️', position: [800, 2950] },
  { id: 'village-goron', name: '고론 마을', category: 'stable', region: '엘딘 산맥', icon: '🏘️', position: [2850, 2150] },
  { id: 'village-zora', name: '조라 마을', category: 'stable', region: '라네르 지방', icon: '🏘️', position: [3800, 1950] },
  { id: 'village-rito', name: '리토 마을', category: 'stable', region: '헤브라 산맥', icon: '🏘️', position: [1350, 1350] },
  { id: 'village-rito-base', name: '리토 마을 기슭', category: 'stable', region: '헤브라 산맥', icon: '🏘️', position: [1400, 1500] },
  { id: 'shop-highway', name: '하이랄 고속도로 숙소', category: 'shop', region: '중앙 하이랄', icon: '🏪', position: [2500, 2250] },
  { id: 'lab-kakariko', name: '임파의 연구실', category: 'shop', region: '네를 지방', icon: '🔬', position: [3520, 2380] },
  { id: 'lab-hateno', name: '로쉬의 연구실', category: 'shop', region: '네를 지방', icon: '🔬', position: [4050, 2200] },
]

// ==========================================
// 신전 위치 (축약 — 주요 30개, 더 추가 가능)
// ==========================================
export const shrineMarkers: MapMarker[] = [
  // 아카래 고원 (4개)
  { id: 'omba', name: '옴바-오 신전', category: 'shrine', region: '아카래 고원', icon: '🔷', position: [3130, 2630] },
  { id: 'ja-baij', name: '자-바이지 신전', category: 'shrine', region: '아카래 고원', icon: '🔷', position: [3150, 2700] },
  { id: 'kea', name: '케아-후 신전', category: 'shrine', region: '아카래 고원', icon: '🔷', position: [3200, 2650] },
  { id: 'dah-kasoh', name: '다흐-카소 신전', category: 'shrine', region: '아카래 고원', icon: '🔷', position: [3250, 2600] },
  // 중앙 하이랄 (선택 10개)
  { id: 'ta-tenoh', name: '타-테노 신전', category: 'shrine', region: '중앙 하이랄', icon: '🔷', position: [2600, 2100] },
  { id: 'ishto-soh', name: '이슈토-소 신전', category: 'shrine', region: '중앙 하이랄', icon: '🔷', position: [2400, 2050] },
  { id: 'shai-yota', name: '샤이-요타 신전', category: 'shrine', region: '중앙 하이랄', icon: '🔷', position: [2550, 2200] },
  { id: 'shae-moya', name: '샤에-모야 신전', category: 'shrine', region: '중앙 하이랄', icon: '🔷', position: [2700, 2000] },
  { id: 'dako-tuss', name: '다코-터스 신전', category: 'shrine', region: '중앙 하이랄', icon: '🔷', position: [2300, 2100] },
  // 헤브라 선택
  { id: 'daka-tuss', name: '다카-터스 신전', category: 'shrine', region: '헤브라 산맥', icon: '🔷', position: [1200, 1500] },
  { id: 'tu-ka-yo', name: '투-카-요 신전', category: 'shrine', region: '헤브라 산맥', icon: '🔷', position: [1100, 1300] },
  // 엘딘 선택
  { id: 'kema-zosha', name: '케마-조샤 신전', category: 'shrine', region: '엘딘 산맥', icon: '🔷', position: [2800, 2100] },
  { id: 'sato-koda', name: '사토-코다 신전', category: 'shrine', region: '엘딘 산맥', icon: '🔷', position: [2900, 2000] },
  // 게르디 선택
  { id: 'dah-hesho-desert', name: '다-헤쇼 신전', category: 'shrine', region: '게르디 사막', icon: '🔷', position: [1000, 2900] },
  { id: 'voo-kota-desert', name: '부-코타 신전', category: 'shrine', region: '게르디 사막', icon: '🔷', position: [1150, 3000] },
  // 라네르 선택
  { id: 'kah-oya', name: '카-오야 신전', category: 'shrine', region: '라네르 지방', icon: '🔷', position: [3600, 2050] },
  { id: 'kaya-wan', name: '카야-완 신전', category: 'shrine', region: '라네르 지방', icon: '🔷', position: [3750, 2000] },
]

// ==========================================
// 주요 몬스터 출몰지
// ==========================================
export const monsterSpawns: MapMarker[] = [
  { id: 'spawn-lynel-central', name: '라이넬 출몰지 (중앙 하이랄)', category: 'monster', region: '중앙 하이랄', icon: '💀', position: [2350, 2250], extra: { type: '라이넬' } },
  { id: 'spawn-lynel-hebra', name: '라이넬 출몰지 (헤브라)', category: 'monster', region: '헤브라 산맥', icon: '💀', position: [1100, 1600], extra: { type: '라이넬' } },
  { id: 'spawn-molduga', name: '몰더가 사막', category: 'monster', region: '게르디 사막', icon: '💀', position: [1050, 3000], extra: { type: '몰더가' } },
  { id: 'spawn-hinox-central', name: '히녹스 출몰지', category: 'monster', region: '중앙 하이랄', icon: '💀', position: [2750, 2050], extra: { type: '히녹스' } },
  { id: 'spawn-talus-eldin', name: '탈러스 (화산)', category: 'monster', region: '엘딘 산맥', icon: '💀', position: [2950, 1900], extra: { type: '이그네오 탈러스' } },
  { id: 'spawn-guardian', name: '수호자 잔해 (중앙 하이랄)', category: 'monster', region: '중앙 하이랄', icon: '💀', position: [2550, 2000], extra: { type: '수호자' } },
  { id: 'spawn-yiga-hideout', name: '이가단 아지트', category: 'monster', region: '게르디 사막', icon: '💀', position: [1600, 2850], extra: { type: '이가단' } },
]

// ==========================================
// 대표 코로그 위치 (일부 — 20개)
// ==========================================
export const korokMarkers: MapMarker[] = [
  { id: 'korok-plateau-1', name: '불타는 나무 (아카래)', category: 'korok', region: '아카래 고원', icon: '🌰', position: [3180, 2670] },
  { id: 'korok-plateau-2', name: '호숫가 꽃 (아카래)', category: 'korok', region: '아카래 고원', icon: '🌰', position: [3100, 2700] },
  { id: 'korok-lake-1', name: '중앙 호수 섬', category: 'korok', region: '중앙 하이랄', icon: '🌰', position: [2470, 2200] },
  { id: 'korok-castle-1', name: '하이랄 성 해자', category: 'korok', region: '하이랄 성 주변', icon: '🌰', position: [2350, 2100] },
  { id: 'korok-hebra-1', name: '얼음 블록 (헤브라)', category: 'korok', region: '헤브라 산맥', icon: '🌰', position: [1250, 1350] },
  { id: 'korok-desert-1', name: '모래 동상 (사막)', category: 'korok', region: '게르디 사막', icon: '🌰', position: [1100, 2900] },
]

// ==========================================
// 모든 마커 통합 (카테고리별 필터링용)
// ==========================================
export const allMapMarkers: MapMarker[] = [
  ...towers,
  ...fairySprings,
  ...villages,
  ...shrineMarkers,
  ...monsterSpawns,
  ...korokMarkers,
]

// 카테고리별 필터 옵션
export const categoryFilters = [
  { key: 'tower', label: '타워', icon: '🗼' },
  { key: 'shrine', label: '신전', icon: '🔷' },
  { key: 'korok', label: '코로그', icon: '🌰' },
  { key: 'monster', label: '몬스터', icon: '💀' },
  { key: 'fairy-spring', label: '요정 샘', icon: '✨' },
  { key: 'stable', label: '마을/안정소', icon: '🏘️' },
  { key: 'shop', label: '시설', icon: '🏪' },
] as const
