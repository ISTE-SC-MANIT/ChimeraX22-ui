import { gql } from '@apollo/client';

const AppViewerQuery = gql`
  query AppViewerQuery {
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
