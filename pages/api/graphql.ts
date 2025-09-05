import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs as pokemonTcgTypeDefs } from '@graphql/types/pokemonTcg';
import { resolvers as pokemonTcgResolvers } from '@graphql/resolvers/pokemonTcg';

const server = new ApolloServer({
  typeDefs: pokemonTcgTypeDefs,
  resolvers: pokemonTcgResolvers,
});

export default startServerAndCreateNextHandler(server);