import { ApolloClient, InMemoryCache } from '@apollo/client';

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWNiNDllMjA5MmU2OWI5YmNmMWJlZjMiLCJpYXQiOjE2NDA3MTI2NzQsImV4cCI6MTY0MTMxNzQ3NH0.AoPn1dNacdtSLUfQmWzBF3ho_g6uEmHHYRX8aKaJ7KY`;
export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BACKEND}/graphql`,
  headers: { authorization: token },
  cache: new InMemoryCache(),
});
