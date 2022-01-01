import { ApolloClient, InMemoryCache } from '@apollo/client';
import cookie from 'js-cookie';
const token: any = cookie.get('token');

console.log(token);
//const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWNiNDllMjA5MmU2OWI5YmNmMWJlZjMiLCJpYXQiOjE2NDA3MTI2NzQsImV4cCI6MTY0MTMxNzQ3NH0.AoPn1dNacdtSLUfQmWzBF3ho_g6uEmHHYRX8aKaJ7KY`;
export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BACKEND}/graphql`,
  headers: { authorization: `Bearer ${token}` },
  cache: new InMemoryCache(),
});
