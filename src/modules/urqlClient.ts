import { withUrqlClient } from 'next-urql';

const clientSetting = {
  url: 'https://trygql.formidable.dev/graphql/basic-pokedex',
};

// @ts-ignore
export const withUrql = (page) => {
  return withUrqlClient(
    () => clientSetting,
    { ssr: false },
  )(page);
};