import { useEffect, useRef } from 'react'

interface KakaoAdBannerProps {
  adUnit: string
  width: number | string
  height: number | string
  className?: string
}

export default function KakaoAdBanner({ adUnit, width, height, className }: KakaoAdBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only load if adUnit is provided
    if (!adUnit) return

    const scriptId = 'kakao-adfit-script'
    
    const loadScript = () => {
      const script = document.createElement('script')
      script.id = scriptId
      script.src = '//t1.kakaocdn.net/kas/static/ba.min.js'
      script.async = true
      script.type = 'text/javascript'
      document.body.appendChild(script)
    }

    // Kakao AdFit in SPA: Need to re-insert script to trigger scanning of new <ins> tags
    const existingScript = document.getElementById(scriptId)
    if (existingScript) {
      existingScript.remove()
    }
    
    // Slight delay to ensure DOM is ready
    const timer = setTimeout(loadScript, 100)
    
    return () => clearTimeout(timer)
  }, [adUnit]) // Reload if adUnit changes

  return (
    <div 
      ref={containerRef} 
      className={`ad-container flex justify-center items-center overflow-hidden ${className || ''}`}
      style={{ 
        width: '100%',
        minHeight: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      <ins
        className="kakao_ad_area"
        style={{ display: 'none', width: '100%' }}
        data-ad-unit={adUnit}
        data-ad-width={width}
        data-ad-height={height}
      />
    </div>
  )
}

