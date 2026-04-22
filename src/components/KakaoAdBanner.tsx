import { useEffect } from 'react'

interface KakaoAdBannerProps {
  adUnit: string
  width: number
  height: number
}

let pendingReload = false

export default function KakaoAdBanner({ adUnit, width, height }: KakaoAdBannerProps) {
  useEffect(() => {
    if (pendingReload) return
    pendingReload = true

    requestAnimationFrame(() => {
      // Remove existing script so SDK re-scans DOM
      const existing = document.querySelector(
        'script[src="//t1.kakaocdn.net/kas/static/ba.min.js"]'
      )
      if (existing) existing.remove()

      // Insert SDK script — it will scan the current DOM and find our <ins>
      const script = document.createElement('script')
      script.src = '//t1.kakaocdn.net/kas/static/ba.min.js'
      script.async = true
      script.type = 'text/javascript'
      document.body.appendChild(script)

      pendingReload = false
    })
  }, [])

  return (
    <ins
      className="kakao_ad_area"
      style={{ display: 'none' }}
      data-ad-unit={adUnit}
      data-ad-width={width}
      data-ad-height={height}
    />
  )
}
