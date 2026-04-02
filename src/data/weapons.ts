import { Weapon } from '../types'

// Fandom Wiki API에서 가져온 실제 이미지 URL (2026-04-02 기준)
const TRAVELER_SWORD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/f/f2/BotW_Traveler%27s_Sword_Model.png/revision/latest/scale-to-width-down/150'
const SOLDIER_SWORD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/3c/BotW_Soldier%27s_Broadsword_Model.png/revision/latest/scale-to-width-down/150'
const KNIGHT_SWORD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/47/BotW_Knight%27s_Broadsword_Model.png/revision/latest/scale-to-width-down/150'
const ROYAL_SWORD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/e/e4/BotW_Royal_Broadsword_Model2.png/revision/latest/scale-to-width-down/150'
const ROYAL_GUARD_SWORD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/ad/BotW_Royal_Guard%27s_Sword_Model.png/revision/latest/scale-to-width-down/150'
const FLAMEBLADE_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/49/BotW_Flameblade_Model.png/revision/latest/scale-to-width-down/150'
const THUNDERBLADE_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/f/f9/BotW_Thunderblade_Model.png/revision/latest/scale-to-width-down/150'
const FROSTBLADE_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/a9/BotW_Frostblade_Model.png/revision/latest/scale-to-width-down/150'
const FOREST_DWELLER_SWORD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/49/BotW_Forest_Dweller%27s_Sword_Model.png/revision/latest/scale-to-width-down/150'
const EIGHTFOLD_BLADE_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/91/BotW_Eightfold_Blade_Model.png/revision/latest/scale-to-width-down/150'
const EDGE_OF_DUALITY_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/84/BotW_Edge_of_Duality_Model.png/revision/latest/scale-to-width-down/150'
const FEATHERED_EDGE_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/3d/BotW_Feathered_Edge_Model.png/revision/latest/scale-to-width-down/150'
const ZORA_SWORD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/01/BotW_Zora_Sword_Model.png/revision/latest/scale-to-width-down/150'
const GERUDO_SCIMITAR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/1/15/BotW_Gerudo_Scimitar_Model.png/revision/latest/scale-to-width-down/150'
const GUARDIAN_SWORD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/4d/BotW_Guardian_Sword_Model.png/revision/latest/scale-to-width-down/150'
const GUARDIAN_SWORD_PLUS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/1/17/BotW_Guardian_Sword%EF%BC%8B_Model.png/revision/latest/scale-to-width-down/150'
const GUARDIAN_SWORD_PRO_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/95/BotW_Guardian_Sword%EF%BC%8B%EF%BC%8B_Model.png/revision/latest/scale-to-width-down/150'
const ANCIENT_SHORT_SWORD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/d/d8/BotW_Ancient_Short_Sword_Model.png/revision/latest/scale-to-width-down/150'
const LIZAL_BOOMERANG_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/3b/BotW_Lizal_Boomerang_Model.png/revision/latest/scale-to-width-down/150'
const LIZAL_FORKED_BOOMERANG_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/02/BotW_Lizal_Forked_Boomerang_Model.png/revision/latest/scale-to-width-down/150'
const LIZAL_TRI_BOOMERANG_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/e/e7/BotW_Lizal_Tri-Boomerang_Model.png/revision/latest/scale-to-width-down/150'
const TORCH_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/9e/BotW_Torch_Model.png/revision/latest/scale-to-width-down/150'
const TREE_BRANCH_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/4f/BotW_Tree_Branch_Model.png/revision/latest/scale-to-width-down/150'
const BOOMERANG_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/a9/TWWHD_Boomerang_Artwork.png/revision/latest/scale-to-width-down/150'
const SOUP_LADLE_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/5/58/BotW_Soup_Ladle_Model.png/revision/latest/scale-to-width-down/150'
const BOKO_CLUB_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/aa/BotW_Boko_Club_Model.png/revision/latest/scale-to-width-down/150'
const SPIKED_BOKO_CLUB_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/25/BotW_Spiked_Boko_Club_Model.png/revision/latest/scale-to-width-down/150'
const DRAGONBONE_BOKO_CLUB_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/9c/BotW_Dragonbone_Boko_Club_Model.png/revision/latest/scale-to-width-down/150'
const LYNEL_SWORD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/61/BotW_Lynel_Sword_Model.png/revision/latest/scale-to-width-down/150'
const MIGHTY_LYNEL_SWORD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/65/BotW_Mighty_Lynel_Sword_Model.png/revision/latest/scale-to-width-down/150'
const SAVAGE_LYNEL_SWORD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/2c/BotW_Savage_Lynel_Sword_Model.png/revision/latest/scale-to-width-down/150'
const MASTER_SWORD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/0a/TotK_Decayed_Master_Sword_Artwork.png/revision/latest/scale-to-width-down/150'
const TRAVELER_SPEAR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/6c/BotW_Traveler%27s_Spear_Model.png/revision/latest/scale-to-width-down/150'
const SOLDIER_SPEAR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/24/BotW_Soldier%27s_Spear_Model.png/revision/latest/scale-to-width-down/150'
const KNIGHT_HALBERD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/c3/BotW_Knight%27s_Halberd_Model.png/revision/latest/scale-to-width-down/150'
const ROYAL_HALBERD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/e/ef/BotW_Royal_Halberd_Model.png/revision/latest/scale-to-width-down/150'
const FOREST_DWELLER_SPEAR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/0b/BotW_Forest_Dweller%27s_Spear_Model.png/revision/latest/scale-to-width-down/150'
const ZORA_SPEAR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/d/df/BotW_Zora_Spear_Model.png/revision/latest/scale-to-width-down/150'
const CEREMONIAL_TRIDENT_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/af/BotW_Ceremonial_Trident_Model.png/revision/latest/scale-to-width-down/150'
const LIGHTSCALE_TRIDENT_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/0a/BotW_Lightscale_Trident_Model.png/revision/latest/scale-to-width-down/150'
const FEATHERED_SPEAR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/47/BotW_Feathered_Spear_Model.png/revision/latest/scale-to-width-down/150'
const DRILLSHAFT_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/e/e1/BotW_Drillshaft_Model.png/revision/latest/scale-to-width-down/150'
const GUARDIAN_SPEAR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/7a/BotW_Guardian_Spear_Icon.png/revision/latest/scale-to-width-down/150'
const GUARDIAN_SPEAR_PLUS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/b6/BotW_Guardian_Spear%EF%BC%8B_Model.png/revision/latest/scale-to-width-down/150'
const GUARDIAN_SPEAR_PRO_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/d/d9/BotW_Guardian_Spear%EF%BC%8B%EF%BC%8B_Model.png/revision/latest/scale-to-width-down/150'
const ANCIENT_SPEAR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/22/BotW_Ancient_Spear_Model.png/revision/latest/scale-to-width-down/150'
const ROYAL_GUARD_SPEAR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/d/dc/BotW_Royal_Guard%27s_Spear_Model.png/revision/latest/scale-to-width-down/150'
const LYNEL_SPEAR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/0b/BotW_Lynel_Spear_Model.png/revision/latest/scale-to-width-down/150'
const MIGHTY_LYNEL_SPEAR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/8a/BotW_Mighty_Lynel_Spear_Model.png/revision/latest/scale-to-width-down/150'
const SAVAGE_LYNEL_SPEAR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/b3/BotW_Savage_Lynel_Spear_Model.png/revision/latest/scale-to-width-down/150'
const LIZAL_SPEAR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/31/BotW_Lizal_Spear_Model.png/revision/latest/scale-to-width-down/150'
const ENHANCED_LIZAL_SPEAR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/7a/BotW_Enhanced_Lizal_Spear_Model.png/revision/latest/scale-to-width-down/150'
const FORKED_LIZAL_SPEAR_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/72/BotW_Forked_Lizal_Spear_Model.png/revision/latest/scale-to-width-down/150'
const COBBLE_CRUSHER_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/5/5e/HWAoC_Cobble_Crusher_Icon.png/revision/latest/scale-to-width-down/150'
const STONE_SMASHER_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/ce/BotW_Stone_Smasher_Model.png/revision/latest/scale-to-width-down/150'
const IRON_SLEDGEHAMMER_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/79/BotW_Iron_Sledgehammer_Model.png/revision/latest/scale-to-width-down/150'
const GIANT_BOOMERANG_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/9a/BotW_Giant_Boomerang_Model.png/revision/latest/scale-to-width-down/150'
const MOBLIN_CLUB_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/c4/BotW_Moblin_Club_Model.png/revision/latest/scale-to-width-down/150'
const SPIKED_MOBLIN_CLUB_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/1/1b/BotW_Spiked_Moblin_Club_Model.png/revision/latest/scale-to-width-down/150'
const DRAGONBONE_MOBLIN_CLUB_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/b4/BotW_Dragonbone_Moblin_Club_Model.png/revision/latest/scale-to-width-down/150'
const ANCIENT_BATTLE_AXE_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/00/BotW_Ancient_Battle_Axe_Model.png/revision/latest/scale-to-width-down/150'
const ANCIENT_BATTLE_AXE_PLUS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/b7/BotW_Ancient_Battle_Axe%EF%BC%8B_Model.png/revision/latest/scale-to-width-down/150'
const LYNEL_CRUSHER_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/ad/BotW_Lynel_Crusher_Model.png/revision/latest/scale-to-width-down/150'
const MIGHTY_LYNEL_CRUSHER_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/6d/BotW_Mighty_Lynel_Crusher_Model.png/revision/latest/scale-to-width-down/150'
const SAVAGE_LYNEL_CRUSHER_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/64/BotW_Savage_Lynel_Crusher_Model.png/revision/latest/scale-to-width-down/150'
const TRAVELER_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/e/e2/BotW_Traveler%27s_Bow_Model.png/revision/latest/scale-to-width-down/150'
const SOLDIER_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/d/d7/BotW_Soldier%27s_Bow_Model.png/revision/latest/scale-to-width-down/150'
const KNIGHT_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/ce/BotW_Knight%27s_Bow_Model.png/revision/latest/scale-to-width-down/150'
const FOREST_DWELLER_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/c5/BotW_Forest_Dweller%27s_Bow_Model.png/revision/latest/scale-to-width-down/150'
const SWALLOW_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/49/BotW_Swallow_Bow_Model.png/revision/latest/scale-to-width-down/150'
const GOLDEN_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/f/ff/BotW_Golden_Bow_Model.png/revision/latest/scale-to-width-down/150'
const PHRENIC_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/8e/BotW_Phrenic_Bow_Model.png/revision/latest/scale-to-width-down/150'
const LIZAL_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/85/BotW_Lizal_Bow_Model.png/revision/latest/scale-to-width-down/150'
const STEEL_LIZAL_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/a5/BotW_Steel_Lizal_Bow_Model.png/revision/latest/scale-to-width-down/150'
const MIGHTY_LYNEL_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/a7/BotW_Mighty_Lynel_Bow_Model.png/revision/latest/scale-to-width-down/150'
const SAVAGE_LYNEL_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/44/BotW_Savage_Lynel_Bow_Model.png/revision/latest/scale-to-width-down/150'
const DUPLEX_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/b3/BotW_Duplex_Bow_Model.png/revision/latest/scale-to-width-down/150'
const BOKO_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/93/BotW_Boko_Bow_Model.png/revision/latest/scale-to-width-down/150'
const SPIKED_BOKO_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/8f/BotW_Spiked_Boko_Bow_Model.png/revision/latest/scale-to-width-down/150'
const ANCIENT_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/75/BotW_Ancient_Bow_Model.png/revision/latest/scale-to-width-down/150'
const ROYAL_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/b3/BotW_Royal_Bow_Model2.png/revision/latest/scale-to-width-down/150'
const ROYAL_GUARD_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/b7/BotW_Royal_Guard%27s_Bow_Model.png/revision/latest/scale-to-width-down/150'
const BOW_OF_LIGHT_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/45/ST_Bow_of_Light_Artwork.png/revision/latest/scale-to-width-down/150'
const WOODEN_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/1/16/BotW_Wooden_Bow_Model.png/revision/latest/scale-to-width-down/150'
const FALCON_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/e/e1/BotW_Falcon_Bow_Model.png/revision/latest/scale-to-width-down/150'
const GREAT_EAGLE_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/1/19/BotW_Great_Eagle_Bow_Model.png/revision/latest/scale-to-width-down/150'
const STRENGTHENED_LIZAL_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/8f/BotW_Strengthened_Lizal_Bow_Model.png/revision/latest/scale-to-width-down/150'
const LYNEL_BOW_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/61/BotW_Lynel_Bow_Model.png/revision/latest/scale-to-width-down/150'
const WOODEN_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/28/BotW_Wooden_Shield_Model.png/revision/latest/scale-to-width-down/150'
const TRAVELER_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/0a/BotW_Traveler%27s_Shield_Model.png/revision/latest/scale-to-width-down/150'
const SOLDIER_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/4f/BotW_Soldier%27s_Shield_Model.png/revision/latest/scale-to-width-down/150'
const KNIGHT_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/0f/BotW_Knight%27s_Shield_Model.png/revision/latest/scale-to-width-down/150'
const ROYAL_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/a1/BotW_Royal_Shield_Model.png/revision/latest/scale-to-width-down/150'
const FOREST_DWELLER_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/67/BotW_Forest_Dweller%27s_Shield_Model.png/revision/latest/scale-to-width-down/150'
const BOKO_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/e/e1/BotW_Boko_Shield_Model.png/revision/latest/scale-to-width-down/150'
const SPIKED_BOKO_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/6a/BotW_Spiked_Boko_Shield_Model.png/revision/latest/scale-to-width-down/150'
const DRAGONBONE_BOKO_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/f/f3/BotW_Dragonbone_Boko_Shield_Model.png/revision/latest/scale-to-width-down/150'
const LIZAL_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/5/5d/BotW_Lizal_Shield_Model.png/revision/latest/scale-to-width-down/150'
const REINFORCED_LIZAL_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/8b/BotW_Reinforced_Lizal_Shield_Model.png/revision/latest/scale-to-width-down/150'
const STEEL_LIZAL_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/d/d5/BotW_Steel_Lizal_Shield_Model.png/revision/latest/scale-to-width-down/150'
const LYNEL_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/65/BotW_Lynel_Shield_Model.png/revision/latest/scale-to-width-down/150'
const MIGHTY_LYNEL_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/46/BotW_Mighty_Lynel_Shield_Model.png/revision/latest/scale-to-width-down/150'
const SAVAGE_LYNEL_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/28/BotW_Savage_Lynel_Shield_Model.png/revision/latest/scale-to-width-down/150'
const GUARDIAN_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/78/BotW_Guardian_Shield_Model.png/revision/latest/scale-to-width-down/150'
const GUARDIAN_SHIELD_PLUS_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/ce/BotW_Guardian_Shield%EF%BC%8B_Model.png/revision/latest/scale-to-width-down/150'
const GUARDIAN_SHIELD_PRO_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/b2/BotW_Guardian_Shield%EF%BC%8B%EF%BC%8B_Model.png/revision/latest/scale-to-width-down/150'
const ANCIENT_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/30/BotW_Ancient_Shield_Model.png/revision/latest/scale-to-width-down/150'
const RADIANT_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/3f/BotW_Radiant_Shield_Model.png/revision/latest/scale-to-width-down/150'
const DAYBREAKER_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/71/BotW_Daybreaker_Model.png/revision/latest/scale-to-width-down/150'
const GERUDO_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/f/fa/BotW_Gerudo_Shield_Model.png/revision/latest/scale-to-width-down/150'
const HYLIAN_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/9f/SS_Hylian_Shield_Artwork.png/revision/latest/scale-to-width-down/150'
const ROYAL_GUARD_SHIELD_IMG = 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/c4/BotW_Royal_Guard%27s_Shield_Model.png/revision/latest/scale-to-width-down/150'

export const weapons: Weapon[] = [
  // ===== 검 (Swords) =====
  { id: 'traveler-sword', name: '여행자의 검', type: 'sword', attack: 5, durability: 20, description: '하이랄 전역에서 발견되는 흔한 검', locations: ['몬스터 드롭', '보물 상자'], image: TRAVELER_SWORD_IMG },
  { id: 'soldier-broadsword', name: '병사의 양날검', type: 'sword', attack: 14, durability: 25, description: '하이랄 병사들이 사용하던 검', locations: ['하이랄 성 주변'], image: SOLDIER_SWORD_IMG },
  { id: 'knights-broadsword', name: '기사의 양날검', type: 'sword', attack: 26, durability: 27, description: '하이랄 기사단이 사용하던 검', locations: ['하이랄 성'], image: KNIGHT_SWORD_IMG },
  { id: 'royal-broadsword', name: '왕실의 양날검', type: 'sword', attack: 36, durability: 36, description: '하이랄 왕실이 소장하던 검', locations: ['하이랄 성'], image: ROYAL_SWORD_IMG },
  { id: 'forest-dweller-sword', name: '숲에 사는 자의 검', type: 'sword', attack: 22, durability: 27, description: '코로그 부족의 검', locations: ['토리 숲'], image: FOREST_DWELLER_SWORD_IMG },
  { id: 'zora-sword', name: '조라 검', type: 'sword', attack: 15, durability: 27, description: '조라족이 사용하는 검', locations: ['조라 마을'], image: ZORA_SWORD_IMG },
  { id: 'gerudo-scimitar', name: '게르도 크리스', type: 'sword', attack: 16, durability: 23, description: '게르도족이 사용하는 곡도', locations: ['게르도 마을'], image: GERUDO_SCIMITAR_IMG },
  { id: 'feathered-edge', name: '깃털검', type: 'sword', attack: 15, durability: 27, description: '리토족이 사용하는 가벼운 검', locations: ['리토 마을'], image: FEATHERED_EDGE_IMG },
  { id: 'eightfold-blade', name: '팔면도', type: 'sword', attack: 15, durability: 26, description: '시코족이 사용하던 전통적인 검', locations: ['하테노 마을'], image: EIGHTFOLD_BLADE_IMG },
  { id: 'edge-of-duality', name: '이변의 검', type: 'sword', attack: 32, durability: 27, description: '이상한 형태의 이변의 검', locations: ['보물 상자'], image: EDGE_OF_DUALITY_IMG },
  { id: 'guardian-sword', name: '수호자의 검', type: 'sword', attack: 20, durability: 17, description: '수호자가 사용하는 검', locations: ['신전'], image: GUARDIAN_SWORD_IMG },
  { id: 'guardian-sword-plus', name: '수호자의 검+', type: 'sword', attack: 30, durability: 22, description: '강화된 수호자의 검', locations: ['시련의 신전'], image: GUARDIAN_SWORD_PLUS_IMG },
  { id: 'guardian-sword-pro', name: '수호자의 검++', type: 'sword', attack: 40, durability: 27, description: '최강의 수호자의 검', locations: ['오브의 시련'], image: GUARDIAN_SWORD_PRO_IMG },
  { id: 'ancient-short-sword', name: '고대의 단검', type: 'sword', attack: 40, durability: 54, description: '고대 기술로 만들어진 검', locations: ['아키야 연구소'], image: ANCIENT_SHORT_SWORD_IMG },
  { id: 'royal-guard-sword', name: '왕실 호위무사의 검', type: 'sword', attack: 48, durability: 14, description: '왕실 호위무사의 검', locations: ['하이랄 성 내부'], image: ROYAL_GUARD_SWORD_IMG },
  { id: 'master-sword', name: '마스터 소드', type: 'sword', attack: 30, durability: 40, description: '전설의 검. 악의 존재에게 60의 위력', locations: ['코로그의 숲'], image: MASTER_SWORD_IMG },
  { id: 'flameblade', name: '염화의 검', type: 'sword', attack: 24, durability: 36, description: '화염 속성을 가진 마법의 검', locations: ['엘딘 산맥'], image: FLAMEBLADE_IMG },
  { id: 'frostblade', name: '빙결의 검', type: 'sword', attack: 20, durability: 30, description: '냉기 속성을 가진 마법의 검', locations: ['헤브라 산맥'], image: FROSTBLADE_IMG },
  { id: 'thunderblade', name: '뇌전의 검', type: 'sword', attack: 22, durability: 36, description: '전기 속성을 가진 마법의 검', locations: ['네를 지방'], image: THUNDERBLADE_IMG },
  { id: 'lizal-boomerang', name: '리잘 부메랑', type: 'sword', attack: 14, durability: 17, description: '리자포스가 사용하는 부메랑', locations: ['리자포스 드롭'], image: LIZAL_BOOMERANG_IMG },
  { id: 'lizal-forked-boomerang', name: '리잘 포크 부메랑', type: 'sword', attack: 24, durability: 23, description: '갈라진 형태의 리잘 부메랑', locations: ['리자포스 드롭'], image: LIZAL_FORKED_BOOMERANG_IMG },
  { id: 'lizal-tri-boomerang', name: '리잘 트라이 부메랑', type: 'sword', attack: 36, durability: 27, description: '세 갈래의 강력한 리잘 부메랑', locations: ['리자포스 드롭'], image: LIZAL_TRI_BOOMERANG_IMG },
  { id: 'torch', name: '횃불', type: 'sword', attack: 2, durability: 8, description: '불을 붙여 사용하는 도구', locations: ['전역'], image: TORCH_IMG },
  { id: 'tree-branch', name: '나뭇가지', type: 'sword', attack: 2, durability: 4, description: '가장 약한 무기', locations: ['전역'], image: TREE_BRANCH_IMG },
  { id: 'boomerang', name: '부메랑', type: 'sword', attack: 8, durability: 18, description: '던지면 되돌아오는 무기', locations: ['보물 상자'], image: BOOMERANG_IMG },
  { id: 'soup-ladle', name: '국자', type: 'sword', attack: 4, durability: 5, description: '요리용 국자', locations: ['하이랄 전역'], image: SOUP_LADLE_IMG },
  { id: 'boko-club', name: '보코 봉', type: 'sword', attack: 4, durability: 12, description: '보코블린의 기본 무기', locations: ['보코블린 드롭'], image: BOKO_CLUB_IMG },
  { id: 'spiked-boko-club', name: '가시 보코 봉', type: 'sword', attack: 12, durability: 14, description: '가시가 달린 보코 봉', locations: ['보코블린 드롭'], image: SPIKED_BOKO_CLUB_IMG },
  { id: 'dragonbone-boko-club', name: '용뼈 보코 봉', type: 'sword', attack: 24, durability: 18, description: '용뼈로 강화한 보코 봉', locations: ['보코블린 드롭'], image: DRAGONBONE_BOKO_CLUB_IMG },
  { id: 'lynel-sword', name: '라이넬의 검', type: 'sword', attack: 24, durability: 30, description: '라이넬이 사용하는 검', locations: ['라이넬 드롭'], image: LYNEL_SWORD_IMG },
  { id: 'mighty-lynel-sword', name: '강력한 라이넬의 검', type: 'sword', attack: 36, durability: 32, description: '강력한 라이넬의 검', locations: ['라이넬 드롭'], image: MIGHTY_LYNEL_SWORD_IMG },
  { id: 'savage-lynel-sword', name: '흉악한 라이넬의 검', type: 'sword', attack: 58, durability: 36, description: '최강의 라이넬의 검', locations: ['라이넬 드롭'], image: SAVAGE_LYNEL_SWORD_IMG },

  // ===== 창 (Spears) =====
  { id: 'traveler-spear', name: '여행자의 창', type: 'spear', attack: 3, durability: 25, description: '기본적인 긴 창', locations: ['몬스터 드롭'], image: TRAVELER_SPEAR_IMG },
  { id: 'soldier-spear', name: '병사의 창', type: 'spear', attack: 12, durability: 28, description: '병사들이 사용하는 창', locations: ['하이랄 성 주변'], image: SOLDIER_SPEAR_IMG },
  { id: 'knights-halberd', name: '기사의 창', type: 'spear', attack: 22, durability: 32, description: '기사단의 창', locations: ['하이랄 성'], image: KNIGHT_HALBERD_IMG },
  { id: 'royal-halberd', name: '왕실의 창', type: 'spear', attack: 28, durability: 34, description: '왕실의 창', locations: ['하이랄 성'], image: ROYAL_HALBERD_IMG },
  { id: 'forest-dweller-spear', name: '숲에 사는 자의 창', type: 'spear', attack: 10, durability: 28, description: '코로그 부족의 창', locations: ['토리 숲'], image: FOREST_DWELLER_SPEAR_IMG },
  { id: 'zora-spear', name: '조라 창', type: 'spear', attack: 9, durability: 28, description: '조라족이 사용하는 창', locations: ['조라 마을'], image: ZORA_SPEAR_IMG },
  { id: 'ceremonial-trident', name: '의식의 삼지창', type: 'spear', attack: 14, durability: 30, description: '조라족 의식용 삼지창', locations: ['조라 마을'], image: CEREMONIAL_TRIDENT_IMG },
  { id: 'lightscale-trident', name: '빛의 비늘 삼지창', type: 'spear', attack: 22, durability: 70, description: '미파의 의식용 삼지창', locations: ['조라 마을'], image: LIGHTSCALE_TRIDENT_IMG },
  { id: 'feathered-spear', name: '깃털창', type: 'spear', attack: 10, durability: 35, description: '리토족의 가벼운 창', locations: ['리토 마을'], image: FEATHERED_SPEAR_IMG },
  { id: 'drillshaft', name: '드릴창', type: 'spear', attack: 14, durability: 50, description: '드릴 형태의 창', locations: ['고론 마을'], image: DRILLSHAFT_IMG },
  { id: 'guardian-spear', name: '수호자의 창', type: 'spear', attack: 12, durability: 20, description: '수호자가 사용하는 창', locations: ['신전'], image: GUARDIAN_SPEAR_IMG },
  { id: 'guardian-spear-plus', name: '수호자의 창+', type: 'spear', attack: 18, durability: 25, description: '강화된 수호자의 창', locations: ['시련의 신전'], image: GUARDIAN_SPEAR_PLUS_IMG },
  { id: 'guardian-spear-pro', name: '수호자의 창++', type: 'spear', attack: 24, durability: 30, description: '최강의 수호자의 창', locations: ['오브의 시련'], image: GUARDIAN_SPEAR_PRO_IMG },
  { id: 'ancient-spear', name: '고대의 창', type: 'spear', attack: 30, durability: 50, description: '고대 기술로 만들어진 창', locations: ['아키야 연구소'], image: ANCIENT_SPEAR_IMG },
  { id: 'royal-guard-spear', name: '왕실 호위무사의 창', type: 'spear', attack: 38, durability: 15, description: '호위무사의 창', locations: ['하이랄 성 내부'], image: ROYAL_GUARD_SPEAR_IMG },
  { id: 'lynel-spear', name: '라이넬의 창', type: 'spear', attack: 14, durability: 35, description: '라이넬이 사용하는 창', locations: ['라이넬 드롭'], image: LYNEL_SPEAR_IMG },
  { id: 'mighty-lynel-spear', name: '강력한 라이넬의 창', type: 'spear', attack: 22, durability: 40, description: '강력한 라이넬의 창', locations: ['라이넬 드롭'], image: MIGHTY_LYNEL_SPEAR_IMG },
  { id: 'savage-lynel-spear', name: '흉악한 라이넬의 창', type: 'spear', attack: 30, durability: 45, description: '최강의 라이넬의 창', locations: ['라이넬 드롭'], image: SAVAGE_LYNEL_SPEAR_IMG },
  { id: 'lizal-spear', name: '리잘 창', type: 'spear', attack: 7, durability: 22, description: '리자포스가 사용하는 창', locations: ['리자포스 드롭'], image: LIZAL_SPEAR_IMG },
  { id: 'enhanced-lizal-spear', name: '강화 리잘 창', type: 'spear', attack: 12, durability: 25, description: '강화된 리잘 창', locations: ['리자포스 드롭'], image: ENHANCED_LIZAL_SPEAR_IMG },
  { id: 'forked-lizal-spear', name: '포크 리잘 창', type: 'spear', attack: 16, durability: 28, description: '갈라진 리잘 창', locations: ['리자포스 드롭'], image: FORKED_LIZAL_SPEAR_IMG },

  // ===== 둔기/도끼 (Blunt/Axes) =====
  { id: 'cobble-crusher', name: '자갈 분쇄기', type: 'axe', attack: 18, durability: 30, description: '암석에 강한 분쇄 무기', locations: ['고론 마을'], image: COBBLE_CRUSHER_IMG },
  { id: 'stone-smasher', name: '돌 분쇄 해머', type: 'axe', attack: 42, durability: 40, description: '거대한 돌 분쇄 해머', locations: ['고론 마을'], image: STONE_SMASHER_IMG },
  { id: 'iron-sledgehammer', name: '쇠망치', type: 'axe', attack: 12, durability: 40, description: '광산에서 사용하던 망치', locations: ['전역'], image: IRON_SLEDGEHAMMER_IMG },
  { id: 'giant-boomerang', name: '거대 부메랑', type: 'axe', attack: 25, durability: 20, description: '거대한 부메랑', locations: ['보물 상자'], image: GIANT_BOOMERANG_IMG },
  { id: 'moblin-club', name: '모블린 봉', type: 'axe', attack: 9, durability: 16, description: '모블린의 기본 무기', locations: ['모블린 드롭'], image: MOBLIN_CLUB_IMG },
  { id: 'spiked-moblin-club', name: '가시 모블린 봉', type: 'axe', attack: 18, durability: 20, description: '가시가 달린 모블린 봉', locations: ['모블린 드롭'], image: SPIKED_MOBLIN_CLUB_IMG },
  { id: 'dragonbone-moblin-club', name: '용뼈 모블린 봉', type: 'axe', attack: 30, durability: 24, description: '용뼈로 강화한 모블린 봉', locations: ['모블린 드롭'], image: DRAGONBONE_MOBLIN_CLUB_IMG },
  { id: 'ancient-battle-axe', name: '고대의 전투 도끼', type: 'axe', attack: 30, durability: 48, description: '고대 기술의 전투 도끼', locations: ['아키야 연구소'], image: ANCIENT_BATTLE_AXE_IMG },
  { id: 'ancient-battle-axe-plus', name: '고대의 전투 도끼+', type: 'axe', attack: 45, durability: 54, description: '강화된 고대의 전투 도끼', locations: ['아키야 연구소'], image: ANCIENT_BATTLE_AXE_PLUS_IMG },
  { id: 'lynel-crusher', name: '라이넬 분쇄기', type: 'axe', attack: 36, durability: 35, description: '라이넬이 사용하는 분쇄기', locations: ['라이넬 드롭'], image: LYNEL_CRUSHER_IMG },
  { id: 'mighty-lynel-crusher', name: '강력한 라이넬 분쇄기', type: 'axe', attack: 54, durability: 40, description: '강력한 라이넬 분쇄기', locations: ['라이넬 드롭'], image: MIGHTY_LYNEL_CRUSHER_IMG },
  { id: 'savage-lynel-crusher', name: '흉악한 라이넬 분쇄기', type: 'axe', attack: 78, durability: 45, description: '최강의 라이넬 분쇄기', locations: ['라이넬 드롭'], image: SAVAGE_LYNEL_CRUSHER_IMG },

  // ===== 활 (Bows) =====
  { id: 'traveler-bow', name: '여행자의 활', type: 'bow', attack: 5, durability: 22, description: '기본적인 활', locations: ['몬스터 드롭'], image: TRAVELER_BOW_IMG },
  { id: 'soldier-bow', name: '병사의 활', type: 'bow', attack: 14, durability: 26, description: '병사들이 사용하는 활', locations: ['하이랄 성 주변'], image: SOLDIER_BOW_IMG },
  { id: 'knight-bow', name: '기사의 활', type: 'bow', attack: 26, durability: 32, description: '기사단의 활', locations: ['하이랄 성'], image: KNIGHT_BOW_IMG },
  { id: 'royal-bow', name: '왕실의 활', type: 'bow', attack: 38, durability: 38, description: '왕실의 활', locations: ['하이랄 성'], image: ROYAL_BOW_IMG },
  { id: 'forest-dweller-bow', name: '숲에 사는 자의 활', type: 'bow', attack: 15, durability: 27, description: '코로그 부족의 활', locations: ['토리 숲'], image: FOREST_DWELLER_BOW_IMG },
  { id: 'swallow-bow', name: '제비 활', type: 'bow', attack: 20, durability: 30, description: '리토족의 전통 활', locations: ['리토 마을'], image: SWALLOW_BOW_IMG },
  { id: 'golden-bow', name: '황금 활', type: 'bow', attack: 14, durability: 36, description: '게르도족의 황금 활', locations: ['게르도 마을'], image: GOLDEN_BOW_IMG },
  { id: 'phrenic-bow', name: '명궁의 활', type: 'bow', attack: 10, durability: 30, description: '줌 기능이 있는 활', locations: ['전역'], image: PHRENIC_BOW_IMG },
  { id: 'falcon-bow', name: '매의 활', type: 'bow', attack: 20, durability: 35, description: '리토의 명궁이 사용하는 활', locations: ['리토 마을'], image: FALCON_BOW_IMG },
  { id: 'great-eagle-bow', name: '위대한 독수리 활', type: 'bow', attack: 28, durability: 60, description: '리발의 보물', locations: ['리토 마을 (퀘스트)'], image: GREAT_EAGLE_BOW_IMG },
  { id: 'lizal-bow', name: '리잘 활', type: 'bow', attack: 14, durability: 22, description: '리자포스가 사용하는 활', locations: ['리자포스 드롭'], image: LIZAL_BOW_IMG },
  { id: 'strengthened-lizal-bow', name: '강화 리잘 활', type: 'bow', attack: 20, durability: 26, description: '강화된 리잘 활', locations: ['리자포스 드롭'], image: STRENGTHENED_LIZAL_BOW_IMG },
  { id: 'steel-lizal-bow', name: '철 리잘 활', type: 'bow', attack: 36, durability: 30, description: '철로 강화한 리잘 활', locations: ['리자포스 드롭'], image: STEEL_LIZAL_BOW_IMG },
  { id: 'lynel-bow', name: '라이넬의 활', type: 'bow', attack: 10, durability: 35, description: '3연발 활', locations: ['라이넬 드롭'], image: LYNEL_BOW_IMG },
  { id: 'mighty-lynel-bow', name: '강력한 라이넬의 활', type: 'bow', attack: 10, durability: 40, description: '3연발 강력한 활', locations: ['라이넬 드롭'], image: MIGHTY_LYNEL_BOW_IMG },
  { id: 'savage-lynel-bow', name: '흉악한 라이넬의 활', type: 'bow', attack: 10, durability: 45, description: '5연발 최강의 활', locations: ['라이넬 드롭'], image: SAVAGE_LYNEL_BOW_IMG },
  { id: 'duplex-bow', name: '이중 활', type: 'bow', attack: 14, durability: 18, description: '이가단이 사용하는 2연발 활', locations: ['이가단 드롭'], image: DUPLEX_BOW_IMG },
  { id: 'boko-bow', name: '보코 활', type: 'bow', attack: 4, durability: 16, description: '보코블린의 기본 활', locations: ['보코블린 드롭'], image: BOKO_BOW_IMG },
  { id: 'spiked-boko-bow', name: '가시 보코 활', type: 'bow', attack: 12, durability: 20, description: '가시가 달린 보코 활', locations: ['보코블린 드롭'], image: SPIKED_BOKO_BOW_IMG },
  { id: 'ancient-bow', name: '고대의 활', type: 'bow', attack: 44, durability: 120, description: '고대 기술의 활', locations: ['아키야 연구소'], image: ANCIENT_BOW_IMG },
  { id: 'royal-guard-bow', name: '왕실 호위무사의 활', type: 'bow', attack: 32, durability: 20, description: '5연발 호위무사의 활', locations: ['하이랄 성 내부'], image: ROYAL_GUARD_BOW_IMG },
  { id: 'bow-of-light', name: '빛의 활', type: 'bow', attack: 100, durability: 100, description: '가논전 전용', locations: ['최종 보스전'], image: BOW_OF_LIGHT_IMG },
  { id: 'wooden-bow', name: '나무 활', type: 'bow', attack: 4, durability: 20, description: '간단한 나무 활', locations: ['전역'], image: WOODEN_BOW_IMG },

  // ===== 방패 (Shields) =====
  { id: 'wooden-shield', name: '나무 방패', type: 'shield', attack: 0, durability: 12, description: '약하지만 가벼운 나무 방패', locations: ['전역'], image: WOODEN_SHIELD_IMG },
  { id: 'travelers-shield', name: '여행자의 방패', type: 'shield', attack: 0, durability: 16, description: '기본적인 방패', locations: ['몬스터 드롭'], image: TRAVELER_SHIELD_IMG },
  { id: 'soldiers-shield', name: '병사의 방패', type: 'shield', attack: 0, durability: 20, description: '병사들이 사용하는 방패', locations: ['하이랄 성 주변'], image: SOLDIER_SHIELD_IMG },
  { id: 'knights-shield', name: '기사의 방패', type: 'shield', attack: 0, durability: 26, description: '기사단의 방패', locations: ['하이랄 성'], image: KNIGHT_SHIELD_IMG },
  { id: 'royal-shield', name: '왕실의 방패', type: 'shield', attack: 0, durability: 32, description: '왕실의 방패', locations: ['하이랄 성'], image: ROYAL_SHIELD_IMG },
  { id: 'forest-dwellers-shield', name: '숲에 사는 자의 방패', type: 'shield', attack: 0, durability: 24, description: '코로그 부족의 방패', locations: ['토리 숲'], image: FOREST_DWELLER_SHIELD_IMG },
  { id: 'boko-shield', name: '보코 방패', type: 'shield', attack: 0, durability: 8, description: '보코블린의 기본 방패', locations: ['보코블린 드롭'], image: BOKO_SHIELD_IMG },
  { id: 'spiked-boko-shield', name: '가시 보코 방패', type: 'shield', attack: 0, durability: 12, description: '가시가 달린 보코 방패', locations: ['보코블린 드롭'], image: SPIKED_BOKO_SHIELD_IMG },
  { id: 'dragonbone-boko-shield', name: '용뼈 보코 방패', type: 'shield', attack: 0, durability: 16, description: '용뼈로 강화한 보코 방패', locations: ['보코블린 드롭'], image: DRAGONBONE_BOKO_SHIELD_IMG },
  { id: 'lizal-shield', name: '리잘 방패', type: 'shield', attack: 0, durability: 14, description: '리자포스가 사용하는 방패', locations: ['리자포스 드롭'], image: LIZAL_SHIELD_IMG },
  { id: 'reinforced-lizal-shield', name: '보강 리잘 방패', type: 'shield', attack: 0, durability: 18, description: '보강된 리잘 방패', locations: ['리자포스 드롭'], image: REINFORCED_LIZAL_SHIELD_IMG },
  { id: 'steel-lizal-shield', name: '철 리잘 방패', type: 'shield', attack: 0, durability: 24, description: '철로 강화한 리잘 방패', locations: ['리자포스 드롭'], image: STEEL_LIZAL_SHIELD_IMG },
  { id: 'lynel-shield', name: '라이넬의 방패', type: 'shield', attack: 0, durability: 30, description: '라이넬이 사용하는 방패', locations: ['라이넬 드롭'], image: LYNEL_SHIELD_IMG },
  { id: 'mighty-lynel-shield', name: '강력한 라이넬의 방패', type: 'shield', attack: 0, durability: 34, description: '강력한 라이넬의 방패', locations: ['라이넬 드롭'], image: MIGHTY_LYNEL_SHIELD_IMG },
  { id: 'savage-lynel-shield', name: '흉악한 라이넬의 방패', type: 'shield', attack: 0, durability: 40, description: '최강의 라이넬의 방패', locations: ['라이넬 드롭'], image: SAVAGE_LYNEL_SHIELD_IMG },
  { id: 'guardian-shield', name: '수호자의 방패', type: 'shield', attack: 0, durability: 16, description: '수호자의 방패', locations: ['신전'], image: GUARDIAN_SHIELD_IMG },
  { id: 'guardian-shield-plus', name: '수호자의 방패+', type: 'shield', attack: 0, durability: 22, description: '강화된 수호자의 방패', locations: ['시련의 신전'], image: GUARDIAN_SHIELD_PLUS_IMG },
  { id: 'guardian-shield-pro', name: '수호자의 방패++', type: 'shield', attack: 0, durability: 28, description: '최강의 수호자의 방패', locations: ['오브의 시련'], image: GUARDIAN_SHIELD_PRO_IMG },
  { id: 'ancient-shield', name: '고대의 방패', type: 'shield', attack: 0, durability: 32, description: '고대 기술의 방패', locations: ['아키야 연구소'], image: ANCIENT_SHIELD_IMG },
  { id: 'radiant-shield', name: '빛나는 방패', type: 'shield', attack: 0, durability: 24, description: '게르도족의 화려한 방패', locations: ['게르도 마을'], image: RADIANT_SHIELD_IMG },
  { id: 'daybreaker', name: '새벽파괴자', type: 'shield', attack: 0, durability: 60, description: '우르보사의 보물', locations: ['게르도 마을 (퀘스트)'], image: DAYBREAKER_IMG },
  { id: 'gerudo-shield', name: '게르도 방패', type: 'shield', attack: 0, durability: 18, description: '게르도족의 방패', locations: ['게르도 마을'], image: GERUDO_SHIELD_IMG },
  { id: 'hylian-shield', name: '하일리아 방패', type: 'shield', attack: 0, durability: 800, description: '최강의 방패', locations: ['하이랄 성 지하'], image: HYLIAN_SHIELD_IMG },
  { id: 'royal-guard-shield', name: '왕실 호위무사의 방패', type: 'shield', attack: 0, durability: 14, description: '호위무사의 방패', locations: ['하이랄 성 내부'], image: ROYAL_GUARD_SHIELD_IMG },
]