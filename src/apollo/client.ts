import { ApolloClient, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
// Apollo GraphQL の設定
//
// // ref: https://www.apollographql.com/docs/react/networking/authentication/#header
// const httpLink = createHttpLink({
//   uri: process.env.GRAPHQL_ENDPOINT,
//   credentials: 'include',
// });


const typePolicies = {
  Query: {
    fields: {
      // relayスタイルのページネーションを使用
      articles: relayStylePagination(),
    },
  },
};

export const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache({
    typePolicies: typePolicies,
  }),
});