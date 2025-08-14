import axios from "axios";

export const resolvers = {
  Query: {
    // Implement searchPokemonCards as needed
    searchPokemonCards: async (_, args) => {
      const { q, page = 1, pageSize = 50, orderBy } = args;
      const params = {};

      if (q) params.q = q;
      if (page) params.page = page;
      if (pageSize) params.pageSize = pageSize;
      if (orderBy) params.orderBy = orderBy;

      try {
        const response = await axios.get('https://api.pokemontcg.io/v2/cards', {
          params,
          headers: {
            // Add API key
            'X-Api-Key': process.env.POKEMON_TCG_API_KEY
          },
        });
        return response.data.data; // API returns { data: [...] }
      } catch (error) {
        console.error('Error fetching Pokemon cards:', error.message);
        return [];
      }
    },
  },
  TCGPlayerPrices: {
    // Map GraphQL fields to data keys, including those starting with numbers
    firstEditionHolofoil: (parent) =>
      parent['1stEditionHolofoil'] || parent['firstEditionHolofoil'],
    firstEditionNormal: (parent) =>
      parent['1stEditionNormal'] || parent['firstEditionNormal'],
  },
};