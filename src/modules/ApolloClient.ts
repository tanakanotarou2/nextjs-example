import type { GetServerSidePropsContext } from 'next';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';

export const COOKIES_TOKEN_NAME = 'jwt';

// const getToken = (req?: IncomingMessage) => {
//   const parsedCookie = cookie.parse(
//     req ? req.headers.cookie ?? '' : document.cookie,
//   );
//
//   return parsedCookie[COOKIES_TOKEN_NAME];
// };
//

const getToken =()=>{
  return process.env.NEXT_PUBLIC_GH_TOKEN
}

export const createApolloClient = (ctx?: GetServerSidePropsContext | null) => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    // credentials: 'same-origin',
  });

  // @ts-ignore
  const authLink = setContext((_, { headers }) => {
    // Get the authentication token from cookies
    const token = getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `bearer ${token}` : '',
      },
    };
  });

  const typePolicies = {
    Query: {
      fields: {
        // // relayスタイルのページネーションを使用
        // repository: relayStylePagination(),
      },
    },
  };

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({typePolicies}),
  });
};
