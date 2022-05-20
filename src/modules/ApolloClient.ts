import type { GetServerSidePropsContext } from 'next';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const COOKIES_TOKEN_NAME = 'jwt';

// const getToken = (req?: IncomingMessage) => {
//   const parsedCookie = cookie.parse(
//     req ? req.headers.cookie ?? '' : document.cookie,
//   );
//
//   return parsedCookie[COOKIES_TOKEN_NAME];
// };
//

export const createApolloClient = (ctx?: GetServerSidePropsContext | null) => {
  // const httpLink = new HttpLink({
  //   uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
  //   credentials: 'same-origin',
  // });

  // const authLink = setContext((_, { headers }) => {
  //   // Get the authentication token from cookies
  //   // const token = getToken(ctx?.req);
  //
  //   return {
  //     headers: {
  //       ...headers,
  //       authorization: token ? `Bearer ${token}` : '',
  //     },
  //   };
  // });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri: 'https://countries.trevorblades.com',
    // link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
