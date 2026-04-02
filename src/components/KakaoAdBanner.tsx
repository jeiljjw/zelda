import { useEffect, useRef } from 'react'

interface KakaoAdBannerProps {
  adUnit: string
  width: number
  height: number
}

declare global {
  interface Window {
    KakaoBA?: {
      requestAd?: (element: HTMLElement) => void
    }
  }
}

export default function KakaoAdBanner({ adUnit, width, height }: KakaoAdBannerProps) {
  const ref = useRef<HTMLModElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = ref.current
      if (!el) return

      // Try KakaoBA SDK
      if (window.KakaoBA?.requestAd) {
        window.KakaoBA.requestAd(el)
        return
      }

      // Fallback: re-register the ad slot by re-creating the ins element
      const parent = el.parentNode
      if (parent) {
        const newIns = document.createElement('ins')
        newIns.className = 'kakao_ad_area'
        newIns.style.display = 'none'
        newIns.setAttribute('data-ad-unit', adUnit)
        newIns.setAttribute('data-ad-width', String(width))
        newIns.setAttribute('data-ad-height', String(height))
        parent.replaceChild(newIns, el)
      }
    }, 200)

    return () => clearTimeout(timer)
  }, [adUnit, width, height])

  return (
    <ins
      ref={ref}
      className="kakao_ad_area"
      style={{ display: 'none' }}
      data-ad-unit={adUnit}
      data-ad-width={width}
      data-ad-height={height}
    />
  )
}
