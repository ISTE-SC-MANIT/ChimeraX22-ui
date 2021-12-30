import { gql } from '@apollo/client';

const GetTeamDetailsQuery = gql`
  query GetTeamDetailsQuery {
    getTeamDetails {
      teamLeader {
        name
        email
        userId
      }
      teamHelper {
        name
        email
        userId
      }
      status
    }
  }
`;

export default GetTeamDetailsQuery;
