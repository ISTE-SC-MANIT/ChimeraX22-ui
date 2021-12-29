import { gql } from '@apollo/client';

export const viewer = gql`
  query viewer {
    viewer {
      _id
      name
      id
      email
      phone
      registered
      strategy
      role
      step
      city
    }
  }
`;
