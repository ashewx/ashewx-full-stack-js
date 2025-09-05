import axios from "axios";
import type { IResolvers } from "@graphql-tools/utils";

type TCGPlayerPricesParent = {
  [key: string]: any;
};

export const resolvers: IResolvers = {
  Query: {
    searchPokemonCards: async (
      _: unknown,
      args: { q?: string; page?: number; pageSize?: number; orderBy?: string }
    ) => {
      const { q, page = 1, pageSize = 50, orderBy } = args;
      const params: Record<string, string | number> = {};

      if (q) params.q = q;
      if (page) params.page = page;
      if (pageSize) params.pageSize = pageSize;
      if (orderBy) params.orderBy = orderBy;

      try {
        const response = await axios.get('https://api.pokemontcg.io/v2/cards', {
          params,
          headers: {
            'X-Api-Key': process.env.POKEMON_TCG_API_KEY as string,
          },
        });
        return response.data.data;
      } catch (error: any) {
        console.error('Error fetching Pokemon cards:', error.message);
        return [];
      }
    },
  },
  TCGPlayerPrices: {
    firstEditionHolofoil: (parent: TCGPlayerPricesParent) =>
      parent['1stEditionHolofoil'] || parent['firstEditionHolofoil'],
    firstEditionNormal: (parent: TCGPlayerPricesParent) =>
      parent['1stEditionNormal'] || parent['firstEditionNormal'],
  },
};