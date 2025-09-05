import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type PokemonCard {
    id: ID!
    name: String
    supertype: String
    subtypes: [String]
    hp: String
    types: [String]
    evolvesTo: [String]
    rules: [String]
    attacks: [Attack]
    weaknesses: [Weakness]
    retreatCost: [String]
    convertedRetreatCost: Int
    set: Set
    number: String
    artist: String
    rarity: String
    nationalPokedexNumbers: [Int]
    legalities: Legalities
    images: CardImages
    tcgplayer: TCGPlayer
  }

  type Set {
    id: ID!
    name: String
    series: String
    printedTotal: String
    total: Int
    legalities: Legalities
    ptcgoCode: String
    releaseDate: String
    updatedAt: String
    images: SetImages
  }

  type Attack {
    name: String
    cost: [String]
    convertedEnergyCost: Int
    damage: String
    text: String
  }

  type Weakness {
    type: String
    value: String
  }

  type Legalities {
    unlimited: String
    expanded: String
  }

  type SetImages {
    symbol: String
    logo: String
  }

  type CardImages {
    small: String
    large: String
  }

  type TCGPlayer {
    url: String
    updatedAt: String
    prices: TCGPlayerPrices
  }

  type TCGPlayerPrices {
    normal: TCGPlayerPricesFields
    holofoil: TCGPlayerPricesFields
    reverseHolofoil: TCGPlayerPricesFields
    firstEditionHolofoil: TCGPlayerPricesFields
    firstEditionNormal: TCGPlayerPricesFields
  }

  type TCGPlayerPricesFields {
    low: Float
    mid: Float
    high: Float
    market: Float
    directLow: Float
  }

  type Query {
    searchPokemonCards(q: String, page: Int, pageSize: Int, orderBy: String): [PokemonCard]
  }
`;