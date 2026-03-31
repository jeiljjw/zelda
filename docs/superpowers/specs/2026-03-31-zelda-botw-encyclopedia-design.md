# Zelda: BotW Encyclopedia + Guide — Design Spec

## Overview

젤다의 전설 브레스 오브 더 와일드 도감 + 공략 통합 웹사이트
초보자부터 고수까지 모두를 아우르는 정보 사이트

## Tech Stack

- **Framework**: Vite + React + TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS (다크 테마)
- **Deployment**: Static files (Vite build output)

## Site Structure

### 3 Column Layout
```
┌─────────┬────────────────────────────┐
│ Sidebar │  Header                    │
│ Logo    ├────────────────────────────┤
│ Search  │  Main Content Area         │
│ Nav     │  - Dashboard (default)     │
│ 8 Items │  - Category List/Grid      │
│         │  - Detail Pages            │
└─────────┴────────────────────────────┘
```

### 8 Categories
1. **초보 시작 가이드** — 게임 처음 시작하는 사람을 위한 필수 정보
2. **몬스터 도감** — 몬스터별 HP, 공격력, 약점, 출현 지역, 드랍 아이템
3. **무기·방패·활 도감** — 무기 스탯, 내구도, 공격 범위, 강화 재료
4. **요리 레시피** — 조합법, 효과, 회복량, 필요 재료
5. **Shrine 공략** — 120개 Shrine 위치, 퍼즐 해법, 보상
6. **신수 공략** — 4대 신수 공략 순서, 약점, 보스 패턴
7. **오브의 시련** — DLC 시련 공략, 보상
8. **코로그 찾기** — 코로그 위치 힌트, 지역별 카운트

## Color Palette (Modern Dark)
- Background: `#0f172a` (slate-900)
- Sidebar: `#111827` (gray-900)
- Cards: `#1e293b` (slate-800)
- Card hover: `#334155` (slate-700)
- Accent: `#10b981` (emerald-500) — primary, `#8b5cf6` (violet-500) — secondary
- Text primary: `#f1f5f9` (slate-100)
- Text secondary: `#94a3b8` (slate-400)
- Border: `#334155` (slate-700)

## Component Architecture

### Core Components
- `Sidebar` — 고정 좌측 내비게이션, 8개 카테고리 + 검색
- `Header` — 페이지 타이틀 + 빵 부스러기
- `CategoryCard` — 메인 대시보드 카테고리 바로가기
- `DataTable` — 도감 데이터 테이블 (소트/필터)
- `ItemCard` — 도감 아이템 상세 카드
- `GuideSection` — 공략 페이지 섹션

### Page Routes
```
/                    → 메인 대시보드 (인기 공략 + 최신 업데이트)
/getting-started     → 초보 가이드
/monsters            → 몬스터 목록
/monsters/:id        → 몬스터 상세
/weapons             → 무기 목록
/cooking             → 요리 레시피
/shrines             → Shrine 목록
/shrines/:id         → Shrine 상세
/divine-beasts       → 신수 공략
trials               → 오브의 시련
/koroks              → 코로그 찾기
```

## Data Model

All data stored as static JSON/TypeScript files in `src/data/`.

```typescript
interface Monster {
  id: string;
  name: string;
  hp: number;
  attack: number;
  defense: number;
  drops: string[];
  locations: string[];
  weaknesses: string[];
  description: string;
  image: string;
}

interface Weapon {
  id: string;
  name: string;
  type: 'sword' | 'spear' | 'axe' | 'bow' | 'shield';
  attack: number;
  durability: number;
  description: string;
  locations: string[];
}

interface Recipe {
  id: string;
  ingredients: string[];
  effect: string;
  duration: number;
  recovery: number;
}

interface Shrine {
  id: string;
  name: string;
  location: string;
  type: 'blessing' | 'combat' | 'rune' | 'motion';
  reward: string;
  walkthrough: string[];
}
```

## Dashboard (Home Page) Content

- **인기 공략** — 상위 3~5개 (신수 공략, Shrine 추천 등)
- **최신 업데이트** — 최근 추가된 콘텐츠
- **바로가기** — 8개 카테고리 카드
