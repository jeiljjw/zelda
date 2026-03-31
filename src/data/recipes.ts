import { Recipe } from '../types'

export const recipes: Recipe[] = [
  { id: 'hearty-saute', name: '포근포근 볶음', ingredients: ['포근포근 버섯', '포근포근 송로'], effect: '하트 회복 + 추가 하트', duration: 0, recovery: 10 },
  { id: 'mighty-elixir', name: '강장 비약', ingredients: ['강장 도마뱀', '마물parts'], effect: '공격력 업', duration: 1440, recovery: 0 },
  { id: 'fish-skewer', name: '구운 생선', ingredients: ['하이랄 송어'], effect: 'HP 회복', duration: 0, recovery: 4 },
  { id: 'spicy-saute', name: '매콤 볶음', ingredients: ['매운 버섯', '포근포근 송로'], effect: '냉기 저항 업', duration: 720, recovery: 0 },
  { id: 'hasty-elixer', name: '신속 비약', ingredients: ['신속 도마뱀', '마물parts'], effect: '이속 업', duration: 1080, recovery: 0 },
  { id: 'glazed-veggies', name: '야채 버터구이', ingredients: ['하이랄 토마토', '고원 버섯'], effect: 'HP 회복', duration: 0, recovery: 8 },
]
