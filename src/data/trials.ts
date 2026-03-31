import { Trial } from '../types'

export const trials: Trial[] = [
  { id: 'sword-trial-beginner', name: '검의 시련 (초급)', type: '초급', reward: '마스터 소드 강화 Lv1', walkthrough: ['방어구 없이 시작', '순서대로 적을 쓰러뜨리기', '타임 리미트 내 클리어'] },
  { id: 'sword-trial-medium', name: '검의 시련 (중급)', type: '중급', reward: '마스터 소드 강화 Lv2', walkthrough: ['초급보다 강력한 적', '자원 관리 중요', '최종 보스 집중'] },
  { id: 'sword-trial-master', name: '검의 시련 (상급)', type: '상급', reward: '마스터 소드 강화 Lv3', walkthrough: ['가장 강력한 적 배치', '자원 고갈', '완벽한 전투 스킬 필요'] },
  { id: 'star-trial-beginner', name: '별의 시련 (초급)', type: '초급', reward: '방어구 강화', walkthrough: ['별의 시련 시작', '퍼즐 해결', '보상 획득'] },
  { id: 'star-trial-master', name: '별의 시련 (상급)', type: '상급', reward: '방어구 최대 강화', walkthrough: ['최고 난이도 퍼즐', '보스 전투', '최종 보상'] },
]
