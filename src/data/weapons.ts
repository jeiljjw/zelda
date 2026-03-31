import { Weapon } from '../types'

export const weapons: Weapon[] = [
  { id: 'traveler-sword', name: '여행자의 검', type: 'sword', attack: 10, durability: 12, description: '하이랄 전역에서 발견되는 흔한 검', locations: ['몬스터 낙오처', '상점'] },
  { id: 'soldier-broadsword', name: '병사의 양날검', type: 'sword', attack: 14, durability: 20, description: '하이랄 병사들이 사용하던 검', locations: ['캠프', '상점'] },
  { id: 'knights-broadsword', name: '기사의 양날검', type: 'sword', attack: 24, durability: 30, description: '하이랄 기사단이 사용하던 검', locations: ['하이랄 성'] },
  { id: 'royal-broadsword', name: '왕실의 양날검', type: 'sword', attack: 36, durability: 24, description: '하이랄 왕실이 소장하던 검', locations: ['하이랄 성'] },
  { id: 'master-sword', name: '마스터 소드', type: 'sword', attack: 30, durability: 188, description: '악을 물리치는 전설의 검. 몬스터에게 추가 데미지.', locations: ['콜로니우스 유적'] },
  { id: 'traveler-spear', name: '여행자의 창', type: 'spear', attack: 8, durability: 15, description: '범용성의 창', locations: ['몬스터 낙오처'] },
  { id: 'drillshaft', name: '드릴창', type: 'spear', attack: 22, durability: 30, description: '광부가 사용하던 대형 창', locations: ['화산 지대'] },
  { id: 'traveler-bow', name: '여행자의 활', type: 'bow', attack: 10, durability: 18, description: '가장 일반적인 활', locations: ['몬스터 낙오처'] },
  { id: 'soldier-bow', name: '병사의 활', type: 'bow', attack: 14, durability: 20, description: '하이랄 병사의 활', locations: ['하이랄 성 주변'] },
  { id: 'lynel-bow', name: '라이넬의 활', type: 'bow', attack: 32, durability: 40, description: '라이넬이 사용하는 다연발 활', locations: ['라이넬 사냥'] },
  { id: 'travelers-shield', name: '여행자의 방패', type: 'shield', attack: 0, durability: 16, description: '가벼운 나무 방패', locations: ['몬스터 낙오처'] },
  { id: 'knights-shield', name: '기사의 방패', type: 'shield', attack: 0, durability: 36, description: '하이랄 기사 방패', locations: ['하이랄 성'] },
]
