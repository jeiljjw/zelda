import { Armor } from '../types'

// Fandom Wiki 이미지 URL
const HYLIAN_HOOD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/74/BotW_Hylian_Hood_Model.png/revision/latest/scale-to-width-down/150'
const HYLIAN_TUNIC_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/b1/BotW_Tunic_of_the_Wild_Model.png/revision/latest/scale-to-width-down/150'
const HYLIAN_TROUSERS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/b4/BotW_Hylian_Trousers_Model.png/revision/latest/scale-to-width-down/150'
const CHAMPIONS_TUNIC_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/42/Tunic_of_Memories.png/revision/latest/scale-to-width-down/150'
const SOLDIER_HELM_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/f/ff/BotW_Soldier%27s_Helm_Model.png/revision/latest/scale-to-width-down/150'
const SOLDIER_ARMOR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/2c/BotW_Soldier%27s_Armor_Icon.png/revision/latest/scale-to-width-down/150'
const SOLDIER_GREAVES_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/63/BotW_Soldier%27s_Greaves_Icon.png/revision/latest/scale-to-width-down/150'
const ANCIENT_HELM_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/1/15/BotW_Ancient_Helm_Model.png/revision/latest/scale-to-width-down/150'
const ANCIENT_CUIRASS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/1/13/BotW_Ancient_Cuirass_Model.png/revision/latest/scale-to-width-down/150'
const ANCIENT_GREAVES_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/26/BotW_Ancient_Greaves_Icon.png/revision/latest/scale-to-width-down/150'
const BARBARIAN_HELM_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/d/d3/BotW_Barbarian_Helm_Model.png/revision/latest/scale-to-width-down/150'
const BARBARIAN_ARMOR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/be/BotW_Barbarian_Armor_Model.png/revision/latest/scale-to-width-down/150'
const CLIMBERS_BANDANNA_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/f/f4/BotW_Climber%27s_Bandanna_Model.png/revision/latest/scale-to-width-down/150'
const RUBBER_HELM_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/30/BotW_Rubber_Helm_Model.png/revision/latest/scale-to-width-down/150'
const RUBBER_ARMOR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/29/BotW_Rubber_Armor_Icon.png/revision/latest/scale-to-width-down/150'
const RUBBER_TIGHTS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/d/d8/BotW_Rubber_Tights_Icon.png/revision/latest/scale-to-width-down/150'
const SNOWQUILL_HEADDRESS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/ad/BotW_Snowquill_Headdress_Model.png/revision/latest/scale-to-width-down/150'
const SNOWQUILL_TUNIC_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/6f/BotW_Snowquill_Tunic_Icon.png/revision/latest/scale-to-width-down/150'
const SNOWQUILL_TROUSERS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/d/d6/BotW_Snowquill_Trousers_Icon.png/revision/latest/scale-to-width-down/150'
const FLAMEBREAKER_HELM_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/3f/BotW_Flamebreaker_Helm_Model.png/revision/latest/scale-to-width-down/150'
const FLAMEBREAKER_ARMOR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/d/d9/BotW_Flamebreaker_Armor_Icon.png/revision/latest/scale-to-width-down/150'
const FLAMEBREAKER_BOOTS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/9d/BotW_Flamebreaker_Boots_Icon.png/revision/latest/scale-to-width-down/150'
const DESERT_VOE_HEADBAND_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/76/BotW_Desert_Voe_Headband_Model.png/revision/latest/scale-to-width-down/150'
const DESERT_VOE_SPAULDER_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/94/BotW_Desert_Voe_Spaulder_Icon.png/revision/latest/scale-to-width-down/150'
const DESERT_VOE_TROUSERS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/e/ed/BotW_Desert_Voe_Trousers_Model.png/revision/latest/scale-to-width-down/150'
const ZORA_HELM_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/7b/BotW_Zora_Helm_Model.png/revision/latest/scale-to-width-down/150'
const ZORA_ARMOR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/46/BotW_Zora_Armor_Icon.png/revision/latest/scale-to-width-down/150'
const ZORA_GREAVES_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/c5/BotW_Zora_Greaves_Model.png/revision/latest/scale-to-width-down/150'
const STEALTH_MASK_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/e/ef/BotW_Stealth_Mask_Model.png/revision/latest/scale-to-width-down/150'
const STEALTH_CHEST_GUARD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/d/da/BotW_Stealth_Chest_Guard_Icon.png/revision/latest/scale-to-width-down/150'
const STEALTH_TIGHTS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/85/BotW_Stealth_Tights_Icon.png/revision/latest/scale-to-width-down/150'
const RADIANT_MASK_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/73/BotW_Radiant_Mask_Model.png/revision/latest/scale-to-width-down/150'
const RADIANT_SHIRT_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/71/BotW_Radiant_Shirt_Icon.png/revision/latest/scale-to-width-down/150'
const RADIANT_TIGHTS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/b0/BotW_Radiant_Tights_Icon.png/revision/latest/scale-to-width-down/150'
const DARK_HOOD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/26/BotW_Dark_Hood_Model.png/revision/latest/scale-to-width-down/150'
const DARK_TUNIC_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/5/5a/BotW_Dark_Tunic_Icon.png/revision/latest/scale-to-width-down/150'
const DARK_TROUSERS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/91/BotW_Dark_Trousers_Icon.png/revision/latest/scale-to-width-down/150'
const CAP_OF_THE_WILD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/43/BotW_Cap_of_the_Wild_Model.png/revision/latest/scale-to-width-down/150'
const TUNIC_OF_THE_WILD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/b1/BotW_Tunic_of_the_Wild_Model.png/revision/latest/scale-to-width-down/150'
const TROUSERS_OF_THE_WILD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/f/fe/BotW_Trousers_of_the_Wild_Model.png/revision/latest/scale-to-width-down/150'
const ROYAL_GUARD_CAP_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/84/BotW_Royal_Guard_Cap_Model.png/revision/latest/scale-to-width-down/150'
const ROYAL_GUARD_UNIFORM_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/0b/BotW_Royal_Guard_Uniform_Icon.png/revision/latest/scale-to-width-down/150'
const ROYAL_GUARD_BOOTS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/d/d9/BotW_Royal_Guard_Boots_Model.png/revision/latest/scale-to-width-down/150'

export const armor: Armor[] = [
  // ===== 모자/투구 =====
  { id: 'hylian-hood', name: '하이리안 후드', slot: 'head', defense: 3, effect: '없음', set: '하이리안', locations: ['하이랄 성 주변', '상점'], image: HYLIAN_HOOD_IMG },
  { id: 'soldiers-helm', name: '병사의 투구', slot: 'head', defense: 4, effect: '없음', set: '병사', locations: ['하이랄 성 주변'], image: SOLDIER_HELM_IMG },
  { id: 'ancient-helm', name: '고대의 투구', slot: 'head', defense: 4, effect: '고대 무기 위력 업', set: '고대', locations: ['아키야 연구소'], image: ANCIENT_HELM_IMG },
  { id: 'barbarian-helm', name: '야만의 투구', slot: 'head', defense: 3, effect: '공격력 업', set: '야만', locations: ['투로 사원'], image: BARBARIAN_HELM_IMG },
  { id: 'climbers-bandanna', name: '등산가의 반다나', slot: 'head', defense: 3, effect: '등반 속도 업', set: '등산', locations: ['헤스 씨의 온천'], image: CLIMBERS_BANDANNA_IMG },
  { id: 'rubber-helm', name: '고무 투구', slot: 'head', defense: 3, effect: '전기 저항', set: '고무', locations: ['퀘스트 보상'], image: RUBBER_HELM_IMG },
  { id: 'snowquill-headdress', name: '설조의 머리장식', slot: 'head', defense: 3, effect: '냉기 저항', set: '설조', locations: ['리토 마을'], image: SNOWQUILL_HEADDRESS_IMG },
  { id: 'flamebreaker-helm', name: '염파의 투구', slot: 'head', defense: 3, effect: '화염 저항', set: '염파', locations: ['고론 마을'], image: FLAMEBREAKER_HELM_IMG },
  { id: 'desert-voe-headband', name: '게르도 남성 머리띠', slot: 'head', defense: 3, effect: '열기 저항', set: '게르도 남성', locations: ['게르도 마을'], image: DESERT_VOE_HEADBAND_IMG },
  { id: 'zora-helm', name: '조라 투구', slot: 'head', defense: 3, effect: '수영 속도 업', set: '조라', locations: ['조라 마을'], image: ZORA_HELM_IMG },
  { id: 'stealth-mask', name: '닌자 가면', slot: 'head', defense: 2, effect: '은밀 속도 업', set: '닌자', locations: ['카카리코 마을'], image: STEALTH_MASK_IMG },
  { id: 'radiant-mask', name: '해골 가면', slot: 'head', defense: 3, effect: '야간 발광', set: '해골', locations: ['게르도 마을'], image: RADIANT_MASK_IMG },
  { id: 'dark-hood', name: '어둠의 후드', slot: 'head', defense: 3, effect: '없음', set: '어둠', locations: ['하이랄 성 내부'], image: DARK_HOOD_IMG },
  { id: 'cap-of-the-wild', name: '야생의 모자', slot: 'head', defense: 4, effect: '없음', set: '야생', locations: ['120개 신전 클리어 보상'], image: CAP_OF_THE_WILD_IMG },
  { id: 'champions-tunic', name: '챔피언의 튜닉', slot: 'body', defense: 5, effect: '적 HP 표시', set: '챔피언', locations: ['하이랄 성 (임파의 기억)'], image: CHAMPIONS_TUNIC_IMG },
  { id: 'royal-guard-cap', name: '왕실 근위대 모자', slot: 'head', defense: 4, effect: '없음', set: '왕실 근위대', locations: ['하이랄 성 내부'], image: ROYAL_GUARD_CAP_IMG },

  // ===== 상의/갑옷 =====
  { id: 'hylian-tunic', name: '하이리안 튜닉', slot: 'body', defense: 5, effect: '없음', set: '하이리안', locations: ['상점'], image: HYLIAN_TUNIC_IMG },
  { id: 'soldiers-armor', name: '병사의 갑옷', slot: 'body', defense: 7, effect: '없음', set: '병사', locations: ['상점'], image: SOLDIER_ARMOR_IMG },
  { id: 'ancient-cuirass', name: '고대의 갑옷', slot: 'body', defense: 4, effect: '고대 무기 위력 업', set: '고대', locations: ['아키야 연구소'], image: ANCIENT_CUIRASS_IMG },
  { id: 'barbarian-armor', name: '야만의 갑옷', slot: 'body', defense: 3, effect: '공격력 업', set: '야만', locations: ['다오 라크 사원'], image: BARBARIAN_ARMOR_IMG },
  { id: 'climbers-gear', name: '등산가의 장비', slot: 'body', defense: 3, effect: '등반 속도 업', set: '등산', locations: ['퀘스트 보상'], image: CLIMBERS_BANDANNA_IMG },
  { id: 'rubber-armor', name: '고무 갑옷', slot: 'body', defense: 3, effect: '전기 저항', set: '고무', locations: ['퀘스트 보상'], image: RUBBER_ARMOR_IMG },
  { id: 'snowquill-tunic', name: '설조의 옷', slot: 'body', defense: 3, effect: '냉기 저항', set: '설조', locations: ['리토 마을'], image: SNOWQUILL_TUNIC_IMG },
  { id: 'flamebreaker-armor', name: '염파의 갑옷', slot: 'body', defense: 3, effect: '화염 저항', set: '염파', locations: ['고론 마을'], image: FLAMEBREAKER_ARMOR_IMG },
  { id: 'desert-voe-spaulder', name: '게르도 남성 어깨보호대', slot: 'body', defense: 3, effect: '열기 저항', set: '게르도 남성', locations: ['게르도 마을'], image: DESERT_VOE_SPAULDER_IMG },
  { id: 'zora-armor', name: '조라 갑옷', slot: 'body', defense: 3, effect: '수영 속도 업', set: '조라', locations: ['조라 마을 (퀘스트)'], image: ZORA_ARMOR_IMG },
  { id: 'stealth-chest-guard', name: '닌자 상의', slot: 'body', defense: 2, effect: '은밀 속도 업', set: '닌자', locations: ['카카리코 마을'], image: STEALTH_CHEST_GUARD_IMG },
  { id: 'radiant-shirt', name: '해골 상의', slot: 'body', defense: 3, effect: '야간 발광', set: '해골', locations: ['게르도 마을'], image: RADIANT_SHIRT_IMG },
  { id: 'dark-tunic', name: '어둠의 튜닉', slot: 'body', defense: 3, effect: '없음', set: '어둠', locations: ['하이랄 성 내부'], image: DARK_TUNIC_IMG },
  { id: 'tunic-of-the-wild', name: '야생의 옷', slot: 'body', defense: 4, effect: '없음', set: '야생', locations: ['120개 신전 클리어 보상'], image: TUNIC_OF_THE_WILD_IMG },
  { id: 'royal-guard-uniform', name: '왕실 근위대 제복', slot: 'body', defense: 4, effect: '없음', set: '왕실 근위대', locations: ['하이랄 성 내부'], image: ROYAL_GUARD_UNIFORM_IMG },

  // ===== 하의/각반 =====
  { id: 'hylian-trousers', name: '하이리안 바지', slot: 'legs', defense: 4, effect: '없음', set: '하이리안', locations: ['상점'], image: HYLIAN_TROUSERS_IMG },
  { id: 'soldiers-greaves', name: '병사의 각반', slot: 'legs', defense: 5, effect: '없음', set: '병사', locations: ['상점'], image: SOLDIER_GREAVES_IMG },
  { id: 'ancient-greaves', name: '고대의 각반', slot: 'legs', defense: 4, effect: '고대 무기 위력 업', set: '고대', locations: ['아키야 연구소'], image: ANCIENT_GREAVES_IMG },
  { id: 'barbarian-leg-wraps', name: '야만의 각반', slot: 'legs', defense: 3, effect: '공격력 업', set: '야만', locations: ['퀴즈 아라 사원'], image: BARBARIAN_ARMOR_IMG },
  { id: 'climbers-boots', name: '등산화', slot: 'legs', defense: 3, effect: '등반 속도 업', set: '등산', locations: ['리넬 동굴'], image: CLIMBERS_BANDANNA_IMG },
  { id: 'rubber-tights', name: '고무 타이츠', slot: 'legs', defense: 3, effect: '전기 저항', set: '고무', locations: ['퀘스트 보상'], image: RUBBER_TIGHTS_IMG },
  { id: 'snowquill-trousers', name: '설조의 바지', slot: 'legs', defense: 3, effect: '냉기 저항', set: '설조', locations: ['리토 마을'], image: SNOWQUILL_TROUSERS_IMG },
  { id: 'flamebreaker-boots', name: '염파의 장화', slot: 'legs', defense: 3, effect: '화염 저항', set: '염파', locations: ['고론 마을'], image: FLAMEBREAKER_BOOTS_IMG },
  { id: 'desert-voe-trousers', name: '게르도 남성 바지', slot: 'legs', defense: 3, effect: '열기 저항', set: '게르도 남성', locations: ['게르도 마을'], image: DESERT_VOE_TROUSERS_IMG },
  { id: 'zora-greaves', name: '조라 각반', slot: 'legs', defense: 3, effect: '수영 속도 업', set: '조라', locations: ['조라 마을 (퀘스트)'], image: ZORA_GREAVES_IMG },
  { id: 'stealth-tights', name: '닌자 타이츠', slot: 'legs', defense: 2, effect: '은밀 속도 업', set: '닌자', locations: ['카카리코 마을'], image: STEALTH_TIGHTS_IMG },
  { id: 'radiant-tights', name: '해골 타이츠', slot: 'legs', defense: 3, effect: '야간 발광', set: '해골', locations: ['게르도 마을'], image: RADIANT_TIGHTS_IMG },
  { id: 'dark-trousers', name: '어둠의 바지', slot: 'legs', defense: 3, effect: '없음', set: '어둠', locations: ['하이랄 성 내부'], image: DARK_TROUSERS_IMG },
  { id: 'trousers-of-the-wild', name: '야생의 바지', slot: 'legs', defense: 4, effect: '없음', set: '야생', locations: ['120개 신전 클리어 보상'], image: TROUSERS_OF_THE_WILD_IMG },
  { id: 'royal-guard-boots', name: '왕실 근위대 장화', slot: 'legs', defense: 4, effect: '없음', set: '왕실 근위대', locations: ['하이랄 성 내부'], image: ROYAL_GUARD_BOOTS_IMG },
]