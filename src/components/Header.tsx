import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import KakaoAdBanner from './KakaoAdBanner'

const routeLabels: Record<string, string> = {
  '/': '대시보드',
  '/map': '하이랄 맵',
  '/monsters': '몬스터 도감',
  '/weapons': '무기 도감',
  '/armor': '방어구 도감',
  '/cooking': '요리 레시피',
  '/shrines': '신전 공략',
  '/divine-beasts': '신수 공략',
  '/trials': '오브의 시련',
  '/koroks': '코로그 찾기',
  '/getting-started': '초보 가이드',
}

export default function Header() {
  const location = useLocation()

  const breadcrumbs = useMemo(() => {
    const parts = location.pathname.split('/').filter(Boolean)
    const crumbs = [{ label: '홈', path: '/' }]
    let path = ''
    for (const part of parts) {
      path += `/${part}`
      const label = routeLabels[path] || part
      crumbs.push({ label, path })
    }
    return crumbs
  }, [location])

  const title =
    routeLabels[location.pathname] ||
    (breadcrumbs[breadcrumbs.length - 1]?.label ?? '페이지')

  return (
    <header className="h-16 border-b border-border bg-sidebar/50 flex items-center px-4 sm:px-6 gap-4 flex-shrink-0 pl-14 lg:pl-4">
      <nav className="flex items-center gap-1 text-xs text-text-secondary flex-shrink-0">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.path} className="flex items-center gap-1">
            {i > 0 && <span>/</span>}
            <span className={i === breadcrumbs.length - 1 ? 'text-text-primary' : 'link-hover'}>
              {crumb.label}
            </span>
          </span>
        ))}
      </nav>

      {/* Kakao Ad Banner - Centered */}
      <div className="flex-1 flex justify-center items-center">
        <KakaoAdBanner adUnit="DAN-LX5Ji3grmPJUfZ0I" width={728} height={90} />
      </div>

      <h2 className="text-sm font-semibold text-text-primary flex-shrink-0">
        {title}
      </h2>
    </header>
  )
}
