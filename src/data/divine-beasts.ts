import { DivineBeast } from '../types'

export const divineBeasts: DivineBeast[] = [
  {
    id: 'vento',
    name: '바람의 신전 베리아',
    element: '바람',
    location: '헤브라 산맥',
    boss: '바람의 가논',
    walkthrough: ['사원의 입구에서 글라이더 사용', '1층: 터미널 3개 활성화', '2층: 미로 해결', '3층: 보스 전투', '미파의 능력 해금'],
  },
  {
    id: 'nabora',
    name: '번개의 신전 나보리스',
    element: '번개',
    location: '게르디 사막',
    boss: '번개의 가논',
    walkthrough: ['게르디 마을에서 의뢰 수주', '성역 진입', '회전하는 방 해결', '보스 전투', '우르보사의 능력 해금'],
  },
  {
    id: 'ruta',
    name: '물의 신전 루타',
    element: '물',
    location: '라네르 호수',
    boss: '물의 가논',
    walkthrough: ['조라 마을에서 의뢰', '얼음 생성으로 사다리 만들기', '터미널 조작', '보스 전투', '미파의 치유 해금'],
  },
  {
    id: 'rudania',
    name: '화염의 신전 루다니아',
    element: '불꽃',
    location: '데스 마운틴',
    boss: '화염의 가논',
    walkthrough: ['고론 마을에서 의뢰', '사신전 이동', '회전 제어', '보스 전투', '다르케르의 수호 해금'],
  },
]
