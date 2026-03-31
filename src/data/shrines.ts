import { Shrine } from '../types'

export const shrines: Shrine[] = [
  { id: 'omba', name: '옴바-오 신전', location: '아kkane 고원', type: 'rune', reward: '정령의 구슬', walkthrough: ['자석이동으로 문 열기', '구르기 바위 피하기', '보상 받기'] },
  { id: 'ja-baij', name: '자-바이지 신전', location: '아kkane 고원', type: 'combat', reward: '정령의 구슬', walkthrough: ['모블린 격파', '상자 이용', '보상 받기'] },
  { id: 'kea', name: '케아-후 신전', location: '중앙 하이랄', type: 'motion', reward: '정령의 구슬', walkthrough: ['블록 이동', '교각 맞추기', '보상 받기'] },
  { id: 'dah-kasoh', name: '다흐-카소 신전', location: '네를 지방', type: 'blessing', reward: '정령의 구슬', walkthrough: ['신전 내부 진입', '기대보 받기'] },
  { id: 'ta-tenoh', name: '타-테노 신전', location: '동네브 평원', type: 'rune', reward: '정령의 구슬', walkthrough: ['스태시스 활용', '바위 굴리기', '보상 받기'] },
]
