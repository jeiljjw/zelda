import { Monster } from '../types'

// Fandom Wiki 이미지 URL
const BOKOBLIN_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/3e/TWW_-_Bokoblin.png/revision/latest/scale-to-width-down/150'
const MOBLIN_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/47/EoW_Spear_Moblin.png/revision/latest/scale-to-width-down/150'
const LIZALFOS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/1/14/OoT_Lizalfos_Artwork.png/revision/latest/scale-to-width-down/150'
const LYNEL_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/7c/Lynel_Echo.png/revision/latest/scale-to-width-down/150'
const GUARDIAN_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/9b/BotW_Guardian_Artwork.png/revision/latest/scale-to-width-down/150'
const HINOX_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/87/LA_Link_Fighting_Hinox_Artwork.png/revision/latest/scale-to-width-down/150'
const MOLDUGA_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/a1/BotW_Molduga_Model.png/revision/latest/scale-to-width-down/150'
const TALUS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/73/BotW_Stone_Talus_Model.png/revision/latest/scale-to-width-down/150'
const KEESE_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/48/Keese_Echo.png/revision/latest/scale-to-width-down/150'
const CHUCHU_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/07/TWW_Chuchus_Artwork.png/revision/latest/scale-to-width-down/150'
const OCTOROK_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/33/LANS_Octorok_Render.png/revision/latest/scale-to-width-down/150'
const WIZZROBE_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/c4/Electric_Wizzrobe_Echo.png/revision/latest/scale-to-width-down/150'
const YIGA_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/67/BotW_Yiga_Blademaster_Model.png/revision/latest/scale-to-width-down/150'

export const monsters: Monster[] = [
  // 보크블린 계열
  { id: 'bokoblin-red', name: '붉은 보크블린', hp: 24, attack: 3, defense: 1, drops: ['보크블린의 뿔', '보크블린의 창', '고기'], locations: ['중앙 하이랄 평원', '동네브 평원'], weaknesses: ['원거리 공격', '불'], description: '하이랄 전역에 서식하는 가장 흔한 몬스터. 무리를 지어 행동한다.', image: BOKOBLIN_IMG },
  { id: 'bokoblin-blue', name: '푸른 보크블린', hp: 64, attack: 7, defense: 2, drops: ['보크블린의 뿔', '보크블린의 검', '고기'], locations: ['동네브 평원', '피할 지방'], weaknesses: ['원거리 공격'], description: '붉은 보크블린보다 강하고 지능이 높다. 무기를 다양하게 다룬다.', image: BOKOBLIN_IMG },
  { id: 'bokoblin-black', name: '검은 보크블린', hp: 150, attack: 16, defense: 4, drops: ['보크블린의 뿔', '보크블린의 창', '고기'], locations: ['해변 하이랄', '아카래 산맥'], weaknesses: ['불', '머리 공격'], description: '강력한 공격과 높은 체력을 가진 보크블린. 야간에 더 위험해진다.', image: BOKOBLIN_IMG },
  { id: 'bokoblin-silver', name: '은빛 보크블린', hp: 300, attack: 36, defense: 6, drops: ['보크블린의 뿔', '보크블린의 창', '고기'], locations: ['중앙 하이랄 평원', '피할 지방'], weaknesses: ['불'], description: '보크블린 중 최강종. 모든 능력이 극대화되었다.', image: BOKOBLIN_IMG },
  { id: 'bokoblin-striped', name: '줄무늬 보크블린', hp: 200, attack: 24, defense: 5, drops: ['보크블린의 뿔', '보크블린의 창', '고기'], locations: ['아카래 산맥', '중앙 하이랄'], weaknesses: ['불'], description: '검은 보크블린과 은빛 보크블린 사이의 중급종.', image: BOKOBLIN_IMG },
  { id: 'bokoblin-armored', name: '갑주 보크블린', hp: 300, attack: 24, defense: 8, drops: ['보크블린의 뿔', '보크블린의 창', '갑옷 파편'], locations: ['하이랄 성 주변'], weaknesses: ['타격 무기'], description: '갑옷을 입고 있어 방어가 매우 높다.', image: BOKOBLIN_IMG },

  // 모블린 계열
  { id: 'moblin-red', name: '붉은 모블린', hp: 128, attack: 12, defense: 3, drops: ['모블린의 뿔', '모블린의 창'], locations: ['중앙 하이랄', '아카래 고원'], weaknesses: ['다리 공격'], description: '거대한 체구의 몬스터. 강한 공격력을 가지지만 움직임이 둔하다.', image: MOBLIN_IMG },
  { id: 'moblin-blue', name: '푸른 모블린', hp: 320, attack: 18, defense: 5, drops: ['모블린의 뿔', '모블린의 창'], locations: ['동네브 평원', '네를 지방'], weaknesses: ['다리 공격'], description: '붉은 모블린보다 더 단단하고 강력하다.', image: MOBLIN_IMG },
  { id: 'moblin-black', name: '검은 모블린', hp: 600, attack: 30, defense: 7, drops: ['모블린의 뿔', '모블린의 창'], locations: ['아카래 산맥', '피할 지방'], weaknesses: ['다리 공격'], description: '강력한 방어력과 공격력. 멀리서 접근해야 한다.', image: MOBLIN_IMG },
  { id: 'moblin-silver', name: '은빛 모블린', hp: 1500, attack: 50, defense: 10, drops: ['모블린의 뿔', '모블린의 창'], locations: ['중앙 하이랄 평원', '아카래 산맥'], weaknesses: ['다리 공격'], description: '모블린 최강종. 매우 높은 공격력을 가지고 있다.', image: MOBLIN_IMG },
  { id: 'moblin-striped', name: '줄무늬 모블린', hp: 500, attack: 24, defense: 6, drops: ['모블린의 뿔', '모블린의 창'], locations: ['피할 지방', '중앙 하이랄'], weaknesses: ['다리 공격'], description: '검은 모블린과 은빛 모블린 사이의 중급종.', image: MOBLIN_IMG },

  // 리자폴스 계열
  { id: 'lizalfos-red', name: '붉은 리자폴스', hp: 64, attack: 8, defense: 2, drops: ['리자폴스 뿔', '리자폴스의 꼬리'], locations: ['네를 지방', '라네르 바다'], weaknesses: ['얼음 공격'], description: '민첩한 도마뱀 몬스터. 위장 능력이 뛰어나다.', image: LIZALFOS_IMG },
  { id: 'lizalfos-blue', name: '푸른 리자폴스', hp: 160, attack: 12, defense: 3, drops: ['리자폴스 뿔', '리자폴스의 꼬리'], locations: ['네를 지방', '피할 지방'], weaknesses: ['얼음 공격'], description: '더 단단하고 빠른 리자폴스.', image: LIZALFOS_IMG },
  { id: 'lizalfos-black', name: '검은 리자폴스', hp: 300, attack: 24, defense: 6, drops: ['리자폴스 뿔', '리자폴스의 꼬리'], locations: ['피할 지방', '아카래 산맥'], weaknesses: ['얼음 공격'], description: '독 특화된 리자폴스. 꼬리 공격에 주의.', image: LIZALFOS_IMG },
  { id: 'lizalfos-fire', name: '화염 리자폴스', hp: 200, attack: 15, defense: 4, drops: ['화염 리자폴스 뿔', '화염 리자폴스 꼬리'], locations: ['엘딘 산맥'], weaknesses: ['얼음 공격'], description: '화염을 내뿜는 리자폴스. 불에 강한 갑옷을 입는다.', image: LIZALFOS_IMG },
  { id: 'lizalfos-ice', name: '얼음 리자폴스', hp: 200, attack: 15, defense: 4, drops: ['얼음 리자폴스 뿔', '얼음 리자폴스 꼬리'], locations: ['헤브라 산맥', '그레이트 설산'], weaknesses: ['불 공격'], description: '얼음을 조작하는 리자폴스. 냉기에 강하다.', image: LIZALFOS_IMG },
  { id: 'lizalfos-electric', name: '전기 리자폴스', hp: 200, attack: 15, defense: 4, drops: ['전기 리자폴스 뿔', '전기 리자폴스 꼬리'], locations: ['네를 지방', '라네르 지방'], weaknesses: ['불 공격'], description: '전기를 내뿜는 리자폴스. 금속 무기는 위험.', image: LIZALFOS_IMG },
  { id: 'lizalfos-silver', name: '은빛 리자폴스', hp: 500, attack: 32, defense: 7, drops: ['리자폴스 뿔', '리자폴스의 꼬리'], locations: ['피할 지방', '중앙 하이랄'], weaknesses: ['모든 공격'], description: '리자폴스 최강종. 은빛으로 빛난다.', image: LIZALFOS_IMG },

  // 라이넬 계열
  { id: 'lynel-red', name: '붉은 라이넬', hp: 2000, attack: 54, defense: 5, drops: ['라이넬 뿔', '라이넬의 발굽', '전설의 무기'], locations: ['중앙 하이랄 평원 동쪽', '아카래 산맥'], weaknesses: ['헤드샷 기절'], description: '하이랄 최강의 몬스터. 검, 활, 창을 모두 구사한다.', image: LYNEL_IMG },
  { id: 'lynel-blue', name: '푸른 라이넬', hp: 3000, attack: 70, defense: 6, drops: ['라이넬 뿔', '라이넬의 발굽', '전설의 무기'], locations: ['중앙 하이랄 평원', '아카래 산맥'], weaknesses: ['플러트 샷'], description: '더 강력하고 빠르게 공격하는 중급 라이넬.', image: LYNEL_IMG },
  { id: 'lynel-white', name: '하얀 라이넬', hp: 4000, attack: 90, defense: 8, drops: ['라이넬 뿔', '라이넬의 발톱', '전설의 무기'], locations: ['아카래 산맥', '피할 지방'], weaknesses: ['플러트 샷'], description: '고위 라이넬. 강력한 화염 공격을 사용한다.', image: LYNEL_IMG },
  { id: 'lynel-silver', name: '은빛 라이넬', hp: 8000, attack: 153, defense: 12, drops: ['라이넬 뿔', '라이넬의 발톱', '전설의 무기'], locations: ['중앙 하이랄 평원'], weaknesses: ['플러트 샷'], description: '라이넬 최강종. 하이랄에서 가장 위험한 적.', image: LYNEL_IMG },
  { id: 'lynel-gold', name: '황금 라이넬', hp: 10000, attack: 188, defense: 14, drops: ['라이넬 뿔', '라이넬의 발톱', '전설의 무기'], locations: ['시련의 신전'], weaknesses: ['플러트 샷'], description: '마스터 모드 전용 최강 라이넬.', image: LYNEL_IMG },

  // 가디언
  { id: 'guardian-stalker', name: '수호자 보행체', hp: 1500, attack: 58, defense: 12, drops: ['톱니바퀴', '고대의 부품', '고대의 화살'], locations: ['중앙 하이랄', '하이랄 성 주변'], weaknesses: ['다리 공격', '고대 무기'], description: '6개의 다리로 움직이는 거대 가디언. 레이저 공격이 치명적이다.', image: GUARDIAN_IMG },
  { id: 'guardian-scout-i', name: '수호자 경계 I', hp: 40, attack: 8, defense: 2, drops: ['톱니바퀴'], locations: ['신전'], weaknesses: ['다리 공격', '반사 공격'], description: '신전 내부에 배치된 소형 수호자.', image: GUARDIAN_IMG },
  { id: 'guardian-scout-ii', name: '수호자 경계 II', hp: 60, attack: 15, defense: 3, drops: ['톱니바퀴', '고대의 부품'], locations: ['시련의 신전'], weaknesses: ['다리 공격', '반사 공격'], description: '시련의 신전 내 수호자. 레이저 속도가 더 빠르다.', image: GUARDIAN_IMG },
  { id: 'guardian-scout-iii', name: '수호자 경계 III', hp: 100, attack: 20, defense: 4, drops: ['톱니바퀴', '고대의 부품'], locations: ['고급 시련 신전'], weaknesses: ['다리 공격', '반사 공격'], description: '수호자 시리즈 중 가장 강력하다.', image: GUARDIAN_IMG },
  { id: 'guardian-sky', name: '수호자 비행체', hp: 500, attack: 30, defense: 8, drops: ['톱니바퀴', '고대의 부품'], locations: ['중앙 하이랄', '하이랄 성 주변'], weaknesses: ['활 공격', '고대의 화살'], description: '공중을 나는 수호자. 레이저 공격이 매우 정확하다.', image: GUARDIAN_IMG },
  { id: 'guardian-turret', name: '수호자 포대', hp: 36, attack: 10, defense: 2, drops: ['톱니바퀴'], locations: ['신전', '요새'], weaknesses: ['반사 공격'], description: '이동이 불가능하지만 레이저를 발사하는 수호자.', image: GUARDIAN_IMG },
  { id: 'guardian-scout-iv', name: '수호자 경계 IV', hp: 200, attack: 30, defense: 6, drops: ['톱니바퀴', '고대의 부품', '고대의 검'], locations: ['오브의 시련'], weaknesses: ['반사 공격', '고대 무기'], description: '시련의 최종 보스급 수호자.', image: GUARDIAN_IMG },

  // 해골 몬스터
  { id: 'stal-bokoblin', name: '스탈 보크블린', hp: 24, attack: 10, defense: 1, drops: ['보크블린의 뿔'], locations: ['전 지역 (야간)'], weaknesses: ['불 공격'], description: '밤에 등장하는 해골 보크블린. 일출 시 소멸.', image: BOKOBLIN_IMG },
  { id: 'stal-moblin', name: '스탈 모블린', hp: 100, attack: 18, defense: 3, drops: ['모블린의 뿔'], locations: ['전 지역 (야간)'], weaknesses: ['모든 공격'], description: '밤에 등장하는 해골 모블린. 야간에 강력한 공격.', image: BOKOBLIN_IMG },
  { id: 'stal-lizalfos', name: '스탈 리자폴스', hp: 40, attack: 12, defense: 2, drops: ['리자폴스 뿔'], locations: ['전 지역 (야간)'], weaknesses: ['모든 공격'], description: '밤에 등장하는 해골 리자폴스. 재조립 능력이 있다.', image: BOKOBLIN_IMG },

  // 기타 몬스터
  { id: 'keese', name: '키스', hp: 1, attack: 3, defense: 0, drops: ['키스 날개'], locations: ['전 지역', '동굴'], weaknesses: ['모든 공격'], description: '작은 박쥐 몬스터. 동굴과 밤 하늘에 등장.', image: KEESE_IMG },
  { id: 'keese-fire', name: '화염 키스', hp: 1, attack: 3, defense: 0, drops: ['키스 날개', '화염 키스 날개'], locations: ['엘딘 화산', '동굴'], weaknesses: ['얼음 공격'], description: '화염을 내뿜는 박쥐 몬스터. 동굴에 서식.', image: KEESE_IMG },
  { id: 'keese-ice', name: '얼음 키스', hp: 1, attack: 3, defense: 0, drops: ['키스 날개', '얼음 키스 날개'], locations: ['헤브라 산맥', '동굴'], weaknesses: ['불 공격'], description: '얼음을 내뿜는 박쥐 몬스터. 추운 지역에 서식.', image: KEESE_IMG },
  { id: 'keese-electric', name: '전기 키스', hp: 1, attack: 3, defense: 0, drops: ['키스 날개', '전기 키스 날개'], locations: ['네를 지방', '동굴'], weaknesses: ['모든 공격'], description: '전기를 내뿜는 박쥐 몬스터.', image: KEESE_IMG },
  { id: 'chuchu-red', name: '빨간 추추', hp: 8, attack: 2, defense: 0, drops: ['추추 젤리', '빨간 추추 젤리'], locations: ['중앙 하이랄', '피할 지방'], weaknesses: ['모든 공격'], description: '부드러운 젤리 몬스터. 젤리를 드롭한다.', image: CHUCHU_IMG },
  { id: 'chuchu-white', name: '하얀 추추', hp: 8, attack: 2, defense: 0, drops: ['추추 젤리', '하얀 추추 젤리'], locations: ['중앙 하이랄', '동네브 평원'], weaknesses: ['불 공격'], description: '차가운 성질을 가진 추추. 젤리를 드롭.', image: CHUCHU_IMG },
  { id: 'chuchu-yellow', name: '노란 추추', hp: 10, attack: 3, defense: 0, drops: ['추추 젤리', '노란 추추 젤리'], locations: ['중앙 하이랄', '피할 지방'], weaknesses: ['모든 공격'], description: '전기 성질을 가진 추추. 감전 효과가 있다.', image: CHUCHU_IMG },
  { id: 'chuchu-green', name: '초록 추추', hp: 8, attack: 2, defense: 0, drops: ['추추 젤리', '초록 추추 젤리'], locations: ['중앙 하이랄', '동네브 평원'], weaknesses: ['모든 공격'], description: '일반적인 추추. 젤리를 드롭.', image: CHUCHU_IMG },
  { id: 'hinox-red', name: '붉은 히녹스', hp: 600, attack: 20, defense: 4, drops: ['히녹스의 발톱', '히녹스의 이빨'], locations: ['중앙 하이랄', '동네브 평원'], weaknesses: ['눈 공격'], description: '거대한 외눈 몬스터. 자고 있을 때 습격이 효과적.', image: HINOX_IMG },
  { id: 'hinox-blue', name: '푸른 히녹스', hp: 1200, attack: 30, defense: 7, drops: ['히녹스의 발톱', '히녹스의 이빨'], locations: ['중앙 하이랄', '피할 지방'], weaknesses: ['눈 공격'], description: '푸른 히녹스. 무기가 더 강력하다.', image: HINOX_IMG },
  { id: 'hinox-black', name: '검은 히녹스', hp: 2000, attack: 40, defense: 9, drops: ['히녹스의 발톱', '히녹스의 이빨'], locations: ['아카래 산맥', '피할 지방'], weaknesses: ['눈 공격'], description: '검은 히녹스. 모든 능력이 극대화.', image: HINOX_IMG },
  { id: 'hinox-stal', name: '스탈 히녹스', hp: 600, attack: 28, defense: 4, drops: ['히녹스의 발톱', '히녹스의 이빨'], locations: ['전 지역 (야간)'], weaknesses: ['눈 공격', '불'], description: '밤에만 등장하는 해골 히녹스.', image: HINOX_IMG },
  { id: 'molduga', name: '몰더가', hp: 1500, attack: 45, defense: 6, drops: ['몰더가의 지느러미', '몰더가의 위'], locations: ['게르디 사막'], weaknesses: ['원거리 공격'], description: '사막을 헤엄치는 거대 몬스터. 진동을 감지한다.', image: MOLDUGA_IMG },
  { id: 'molduking', name: '몰더킹', hp: 3000, attack: 60, defense: 9, drops: ['몰더가의 지느러미', '몰더가의 위'], locations: ['게르디 사막'], weaknesses: ['원거리 공격'], description: '몰더가의 강화종. 빨라지고 강해졌다.', image: MOLDUGA_IMG },
  { id: 'igneo-talus', name: '화암석의 이그네오', hp: 600, attack: 30, defense: 10, drops: ['보석', '광석'], locations: ['엘딘 화산'], weaknesses: ['얼음 공격', '폭탄'], description: '화산 지역에서 발견되는 거대 골렘. 용암을 두른다.', image: TALUS_IMG },
  { id: 'frost-talus', name: '얼음의 프로스트 탈러스', hp: 600, attack: 30, defense: 10, drops: ['보석', '얼음 광석'], locations: ['헤브라 산맥'], weaknesses: ['화염 공격', '폭탄'], description: '얼음으로 뒤덮인 거대 골렘.', image: TALUS_IMG },
  { id: 'stone-talus', name: '바위 탈러스', hp: 500, attack: 25, defense: 8, drops: ['보석', '광석'], locations: ['중앙 하이랄', '아카래 산맥'], weaknesses: ['폭탄', '약점'], description: '바위로 이루어진 거대 골렘. 등을 올라타면 약점이 있다.', image: TALUS_IMG },
  { id: 'rare-talus', name: '진귀 탈러스', hp: 700, attack: 30, defense: 10, drops: ['희귀 보석', '다이아몬드'], locations: ['중앙 하이랄', '피할 지방'], weaknesses: ['폭탄', '약점'], description: '진귀 보석을 몸에 지닌 탈러스.', image: TALUS_IMG },
  { id: 'yiga-archer', name: '이가단 궁병', hp: 180, attack: 15, defense: 2, drops: ['이단의 도끼', '바나나'], locations: ['이가단 아지트', '중앙 하이랄'], weaknesses: ['근접 공격'], description: '이가단의 궁병. 위장하여 습격한다.', image: YIGA_IMG },
  { id: 'yiga-bladed', name: '이가단 도병', hp: 240, attack: 30, defense: 3, drops: ['이단의 도끼', '바나나'], locations: ['이가단 아지트'], weaknesses: ['원거리 공격'], description: '이가단 근접 전투원. 바람을 가르는 일격을 날린다.', image: YIGA_IMG },
  { id: 'yiga-bludger', name: '이가단 중병', hp: 400, attack: 45, defense: 5, drops: ['이단의 대검', '루피'], locations: ['이가단 아지트'], weaknesses: ['폭탄'], description: '이가단 중무장 병사. 거대한 무기로 위협한다.', image: YIGA_IMG },
  { id: 'wizzrobe-fire', name: '화염 위자로드', hp: 200, attack: 20, defense: 2, drops: ['위자로드 지팡이', '화염 물질'], locations: ['엘딘 산맥', '중앙 하이랄'], weaknesses: ['얼음 화살'], description: '화염 마법을 사용하는 위자로드.', image: WIZZROBE_IMG },
  { id: 'wizzrobe-ice', name: '얼음 위자로드', hp: 200, attack: 20, defense: 2, drops: ['위자로드 지팡이', '얼음 물질'], locations: ['헤브라 산맥'], weaknesses: ['화염 화살'], description: '얼음 마법을 사용하는 위자로드.', image: WIZZROBE_IMG },
  { id: 'wizzrobe-electric', name: '전기 위자로드', hp: 200, attack: 20, defense: 2, drops: ['위자로드 지팡이', '전기 물질'], locations: ['네를 지방'], weaknesses: ['속성 공격'], description: '전기 마법을 사용하는 위자로드.', image: WIZZROBE_IMG },
  { id: 'pebble', name: '자갈몬', hp: 1, attack: 1, defense: 0, drops: ['자갈'], locations: ['중앙 하이랄', '전 지역'], weaknesses: ['모든 공격'], description: '작은 돌 몬스터. 건드리면 도망간다.', image: TALUS_IMG },
  { id: 'octarock', name: ' 오크록', hp: 4, attack: 1, defense: 0, drops: ['오크록 파편'], locations: ['중앙 하이랄', '전 지역'], weaknesses: ['활 공격'], description: '땅 속에 숨어서 돌을 던지는 몬스터.', image: OCTOROK_IMG },
]
