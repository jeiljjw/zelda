# 하이랄 맵 이미지 설정 안내

## 파일 위치
```
public/maps/hyrule-map.jpg
```

## 맵 이미지 다운로드
고해상도 BotW 하이랄 맵 이미지가 필요합니다. 아래 소스에서 받을 수 있습니다:

1. **Zelda Wiki (권장)**
   - https://zeldawiki.wiki/wiki/Map_(Breath_of_the_Wild)
   - 고해상도 맵 이미지 제공

2. **GitHub - zeldamaps/botw-map**
   - https://github.com/zeldamaps/botw-map
   - Leaflet 타일 기반 인터랙티브 맵 소스

3. **Zelda Universe Forum**
   - https://zeldauniverse.net/
   - 커뮤니티에서 공유하는 맵 이미지

## 파일 형식
- JPG 또는 PNG 지원
- 권장 해상도: 4000x3000 픽셀 이상
- 파일 이름: `hyrule-map.jpg` (변경 시 `src/components/InteractiveMap.tsx`의 `MAP_IMAGE` 경로 수정)

## 맵 크기 조정
`src/components/InteractiveMap.tsx`에서 아래 값을 맵 이미지 실제 픽셀 크기로 맞추세요:

```typescript
const MAP_WIDTH = 4880   // 픽셀 너비
const MAP_HEIGHT = 3400  // 픽셀 높이
```

## 마커 좌표 맞추기
`src/data/map-markers.ts`에서 `position: [x, y]`는 맵 이미지의 픽셀 좌표입니다.
- `[0, 0]` = 왼쪽 하단
- `[MAP_WIDTH, MAP_HEIGHT]` = 오른쪽 상단

## 임시 대안
맵 이미지가 없어도 Leaflet 다크 테마 배경이 보입니다. 마커는 정상 작동합니다.
