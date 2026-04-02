import { useState } from 'react'

export default function Map() {
  const [showHint, setShowHint] = useState(true)

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg font-bold text-text-primary">하이랄 맵</h1>
        <p className="text-sm text-text-secondary mt-1">
          인터랙티브 하이랄 지도 — 타워, 신전, 코로그, 몬스터 위치를 확인하세요.
        </p>
      </div>

      <div className="relative rounded-xl overflow-hidden border border-border" style={{ height: 'calc(100vh - 120px)' }}>
        <iframe
          src="https://botw.jonathantiritilli.com/"
          title="하이랄 인터랙티브 맵"
          className="w-full h-full"
          style={{ border: 'none' }}
          allowFullScreen
        />

        {/* 필터 버튼 안내 오버레이 */}
        {showHint && (
          <div
            className="absolute top-3 right-3 z-50 flex items-start gap-2 animate-pulse cursor-pointer"
            onClick={() => setShowHint(false)}
          >
            <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <span className="text-lg">☰</span>
              <span>이 버튼을 눌러서<br/>마커 필터를 켜세요!</span>
            </div>
            <svg className="w-6 h-6 text-yellow-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
