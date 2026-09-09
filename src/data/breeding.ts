export interface BreedingRecipe {
  output: string;
  parent_1: string;
  parent_2: string;
  item: string;
}

export interface BreedingTier {
  tier: number;
  time: number;
  breed: boolean;
  chickens: BreedingRecipe[] | NonBreedingChicken[];
}

export interface NonBreedingChicken {
  output: string;
  item: string;
}

export const breedingRecipes: BreedingTier[] = [
  {
    tier: 1,
    time: 40,
    breed: false,
    chickens: [
      { output: "c_white", item: "minecraft:white_dye" },
      { output: "c_orange", item: "minecraft:orange_dye" },
      { output: "c_magenta", item: "minecraft:magenta_dye" },
      { output: "c_light_blue", item: "minecraft:light_blue_dye" },
      { output: "c_yellow", item: "minecraft:yellow_dye" },
      { output: "c_lime", item: "minecraft:lime_dye" },
      { output: "c_pink", item: "minecraft:pink_dye" },
      { output: "c_gray", item: "minecraft:gray_dye" },
      { output: "c_light_gray", item: "minecraft:light_gray_dye" },
      { output: "c_cyan", item: "minecraft:cyan_dye" },
      { output: "c_purple", item: "minecraft:purple_dye" },
      { output: "c_blue", item: "minecraft:blue_dye" },
      { output: "c_brown", item: "minecraft:brown_dye" },
      { output: "c_green", item: "minecraft:green_dye" },
      { output: "c_red", item: "minecraft:red_dye" },
      { output: "c_black", item: "minecraft:black_dye" },
      { output: "c_vanilla", item: "minecraft:egg" }
    ]
  },
  {
    tier: 2,
    time: 40,
    breed: false,
    chickens: [
      { output: "c_water", item: "chicken_roost:water_egg"}, 
      { output: "c_lava", item: "chicken_roost:lava_egg" }
    ]
  },
  {
    tier: 2,
    time: 60,
    breed: true,
    chickens: [
      {
        output: "c_sand",
        parent_1: "c_stone",
        parent_2: "c_yellow",
        item: "minecraft:sand"
      },
      {
        output: "c_dust",
        parent_1: "c_stone",
        parent_2: "c_white",
        item: "ftbstuff:dust"
      },
      {
        output: "c_glowberries",
        parent_1: "c_apple",
        parent_2: "c_bone",
        item: "minecraft:glow_berries"
      },
      {
        output: "c_apple",
        parent_1: "c_oakwood",
        parent_2: "c_red",
        item: "minecraft:apple"
      },
      {
        output: "c_netherrack",
        parent_1: "c_stone",
        parent_2: "c_red",
        item: "minecraft:netherrack"
      },
      {
        output: "c_bone",
        parent_1: "c_feather",
        parent_2: "c_white",
        item: "minecraft:bone"
      },
      {
        output: "c_honeycomb",
        parent_1: "c_glow Berries",
        parent_2: "c_yellow",
        item: "minecraft:honeycomb"
      },
      {
        output: "c_stone",
        parent_1: "c_water",
        parent_2: "c_gray",
        item: "chicken_roost:stone_essence"
      },
      {
        output: "c_ink",
        parent_1: "c_water",
        parent_2: "c_black",
        item: "minecraft:ink_sac"
      },
      {
        output: "c_snow",
        parent_1: "c_white",
        parent_2: "c_water",
        item: "minecraft:snowball"
      },
      {
        output: "c_feather",
        parent_1: "c_white",
        parent_2: "c_vanilla",
        item: "minecraft:feather"
      },
      {
        output: "c_string",
        parent_1: "c_ink",
        parent_2: "c_oakwood",
        item: "minecraft:string"
      },
      {
        output: "c_gravel",
        parent_1: "c_stone",
        parent_2: "c_gray",
        item: "minecraft:gravel"
      },
      {
        output: "c_oakwood",
        parent_1: "c_brown",
        parent_2: "c_green",
        item: "chicken_roost:wood_essence"
      },
      {
        output: "c_clay",
        parent_1: "c_water",
        parent_2: "c_light Blue",
        item: "minecraft:clay_ball"
      },
      {
        output: "c_flint",
        parent_1: "c_gravel",
        parent_2: "c_gray",
        item: "minecraft:flint"
      },
      {
        output: "c_tuff",
        parent_1: "c_flint",
        parent_2: "c_stone",
        item: "minecraft:tuff"
      }
    ]
  },
  {
    tier: 3,
    time: 80,
    breed: true,
    chickens: [
      {
        output: "c_lapis",
        parent_1: "c_blue",
        parent_2: "c_stone",
        item: "minecraft:lapis_lazuli"
      },
      {
        output: "c_glowstone",
        parent_1: "c_quartz",
        parent_2: "c_yellow",
        item: "minecraft:glowstone_dust"
      },
      {
        output: "c_iron",
        parent_1: "c_flint",
        parent_2: "c_bone",
        item: "minecraft:iron_ingot"
      },
      {
        output: "c_rotten",
        parent_1: "c_pink",
        parent_2: "c_bone",
        item: "minecraft:rotten_flesh"
      },
      {
        output: "c_redstone",
        parent_1: "c_red",
        parent_2: "c_sand",
        item: "minecraft:redstone"
      },
      {
        output: "c_leather",
        parent_1: "c_string",
        parent_2: "c_brown",
        item: "minecraft:leather"
      },
      {
        output: "c_quartz",
        parent_1: "c_stone",
        parent_2: "c_iron",
        item: "minecraft:quartz"
      },
      {
        output: "c_copper",
        parent_1: "c_brown",
        parent_2: "c_yellow",
        item: "minecraft:copper_ingot"
      },
      {
        output: "c_basalt",
        parent_1: "c_coal",
        parent_2: "c_quartz",
        item: "minecraft:basalt"
      },
      {
        output: "c_nickel",
        parent_1: "c_bone",
        parent_2: "c_green",
        item: "ftbmaterials:nickel_ingot"
      },
      {
        output: "c_coal",
        parent_1: "c_flint",
        parent_2: "c_oakwood",
        item: "minecraft:coal"
      }
    ]
  },
  {
    tier: 4,
    time: 100,
    breed: true,
    chickens: [
      {
        output: "c_rubber",
        parent_1: "c_oakwood",
        parent_2: "c_orange",
        item: "industrialforegoing:dryrubber"
      },
      {
        output: "c_aluminium",
        parent_1: "c_flint",
        parent_2: "c_iron",
        item: "ftbmaterials:aluminum_ingot"
      },
      {
        output: "c_netherwart",
        parent_1: "c_brown",
        parent_2: "c_glowstone",
        item: "minecraft:nether_wart"
      },
      {
        output: "c_lead",
        parent_1: "c_iron",
        parent_2: "c_cyan",
        item: "ftbmaterials:lead_ingot"
      },
      {
        output: "c_gold",
        parent_1: "c_yellow",
        parent_2: "c_iron",
        item: "minecraft:gold_ingot"
      },
      {
        output: "c_glass",
        parent_1: "c_coal",
        parent_2: "c_sand",
        item: "minecraft:glass"
      },
      {
        output: "c_osmium",
        parent_1: "c_iron",
        parent_2: "c_quartz",
        item: "ftbmaterials:osmium_ingot"
      },
      {
        output: "c_silver",
        parent_1: "c_iron",
        parent_2: "c_bone",
        item: "ftbmaterials:silver_ingot"
      },
      {
        output: "c_soulsoil",
        parent_1: "c_soul Sand",
        parent_2: "c_rotten",
        item: "minecraft:soul_soil"
      },
      {
        output: "c_zinc",
        parent_1: "c_bone",
        parent_2: "c_clay",
        item: "ftbmaterials:zinc_ingot"
      },
      {
        output: "c_silicon",
        parent_1: "c_clay",
        parent_2: "c_sand",
        item: "ftbmaterials:silicon_gem"
      },
      {
        output: "c_tin",
        parent_1: "c_iron",
        parent_2: "c_gray",
        item: "ftbmaterials:tin_ingot"
      },
      {
        output: "c_blackquartz",
        parent_1: "c_quartz",
        parent_2: "c_black",
        item: "actuallyadditions:black_quartz"
      },
      {
        output: "c_spidereye",
        parent_1: "c_rotten",
        parent_2: "c_string",
        item: "minecraft:spider_eye"
      },
      {
        output: "c_sulfur",
        parent_1: "c_coal",
        parent_2: "c_yellow",
        item: "ftbmaterials:sulfur_dust"
      },
      {
        output: "c_soulsand",
        parent_1: "c_quartz",
        parent_2: "c_sand",
        item: "minecraft:soul_sand"
      },
      {
        output: "c_fluorite",
        parent_1: "c_blue",
        parent_2: "c_quartz",
        item: "ftbmaterials:fluorite_gem"
      }
    ]
  },
  {
    tier: 5,
    time: 120,
    breed: true,
    chickens: [
      {
        output: "c_diamond",
        parent_1: "c_glass",
        parent_2: "c_gold",
        item: "minecraft:diamond"
      },
      {
        output: "c_obsidian",
        parent_1: "c_water",
        parent_2: "c_lava",
        item: "minecraft:obsidian"
      },
      {
        output: "c_niter",
        parent_1: "c_sand",
        parent_2: "c_sulfur",
        item: "ftbmaterials:niter_gem"
      },
      {
        output: "c_blazerod",
        parent_1: "c_gold",
        parent_2: "c_lava",
        item: "minecraft:blaze_rod"
      },
      {
        output: "c_slime",
        parent_1: "c_clay",
        parent_2: "c_lime",
        item: "minecraft:slime_ball"
      },
      {
        output: "c_endstone",
        parent_1: "c_stone",
        parent_2: "c_light Gray",
        item: "minecraft:end_stone"
      },
      {
        output: "c_prismarineshard",
        parent_1: "c_water",
        parent_2: "c_lapis",
        item: "minecraft:prismarine_shard"
      }
    ]
  },
  {
    tier: 5,
    time: 120,
    breed: false,
    chickens: [
      {
        output: "c_certusquartz",
        item: "ae2:certus_quartz_crystal"
      }
    ]
  },
  {
    tier: 6,
    time: 140,
    breed: true,
    chickens: [
      {
        output: "c_emerald",
        parent_1: "c_diamond",
        parent_2: "c_green",
        item: "minecraft:emerald"
      },
      {
        output: "c_chorusfruit",
        parent_1: "c_purple",
        parent_2: "c_endstone",
        item: "minecraft:chorus_fruit"
      },
      {
        output: "c_breeze",
        parent_1: "c_snow",
        parent_2: "c_feather",
        item: "minecraft:breeze_rod"
      },
      {
        output: "c_ghasttear",
        parent_1: "c_bone",
        parent_2: "c_blaze Rod",
        item: "minecraft:ghast_tear"
      },
      {
        output: "c_enderpearl",
        parent_1: "c_diamond",
        parent_2: "c_nether Wart",
        item: "minecraft:ender_pearl"
      },
      {
        output: "c_quartz_enriched_iron",
        parent_1: "c_certus Quartz",
        parent_2: "c_iron",
        item: "refinedstorage:quartz_enriched_iron"
      },
      {
        output: "c_quartz_enriched_copper",
        parent_1: "c_certus Quartz",
        parent_2: "c_copper",
        item: "refinedstorage:quartz_enriched_copper"
      }
    ]
  },
  {
    tier: 7,
    time: 160,
    breed: true,
    chickens: [
      {
        output: "c_xp",
        parent_1: "c_green",
        parent_2: "c_emerald",
        item: "minecraft:experience_bottle"
      },
      {
        output: "c_uranium",
        parent_1: "c_redstone",
        parent_2: "c_ender Pearl",
        item: "ftbmaterials:uranium_ingot"
      },
      {
        output: "c_platinum",
        parent_1: "c_nickel",
        parent_2: "c_silver",
        item: "ftbmaterials:platinum_ingot"
      },
      {
        output: "c_netherite",
        parent_1: "c_diamond",
        parent_2: "c_gold",
        item: "minecraft:netherite_scrap"
      },
      {
        output: "c_prismarinecrystal",
        parent_1: "c_diamond",
        parent_2: "c_quartz",
        item: "minecraft:prismarine_crystals"
      },
      {
        output: "c_otherrock",
        parent_1: "c_skystone",
        parent_2: "c_stone",
        item: "occultism:otherrock"
      },
      {
        output: "c_amethystshard",
        parent_1: "c_ghast Tear",
        parent_2: "c_magenta",
        item: "minecraft:amethyst_shard"
      },
    ]
  },
  {
    tier: 8,
    time: 180,
    breed: false,
    chickens: [
      { output: "c_netherstar", item: "minecraft:nether_star" },
      { output: "c_draconium", item: "draconicevolution:draconium_ingot" }
    ]
  },
  {
    tier: 9,
    time: 200,
    breed: false,
    chickens: [
      {
        output: "c_awakeneddraconium",
        item: "draconicevolution:awakened_draconium_ingot"
      },
      { output: "c_time", item: "justdirethings:time_crystal" },
      { output: "c_neutron", item: "avaritia:neutron_pile" },
      { output: "c_chaos", item: "draconicevolution:small_chaos_frag" }
    ]
  },
  {
    tier: 6,
    time: 60,
    breed: false,
    chickens: [
      {
        output: "c_skystone",
        item: "ae2:sky_dust"
      }
    ]
  },
  {
    tier: 9,
    time: 12000,
    breed: false,
    chickens: [
      {
        output: "c_antimatter",
        item: "mekanism:pellet_antimatter"
      }
    ]
  }
];

// Функция для получения рецепта по id курицы
export function getBreedingRecipe(chickenId: string): BreedingRecipe | null {
  for (const tier of breedingRecipes) {
    if (tier.breed) {
      const recipe = (tier.chickens as BreedingRecipe[]).find(
        (c) => c.output === chickenId
      );
      if (recipe) return recipe;
    }
  }
  return null;
}

// Функция для проверки, есть ли у курицы breeding
export function hasBreeding(chickenId: string): boolean {
  return getBreedingRecipe(chickenId) !== null;
}
