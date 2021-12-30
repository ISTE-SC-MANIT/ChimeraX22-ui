import { gql } from '@apollo/client';

const GetQuizStatusQuery = gql`
  query GetQuizStatusQuery {
    getQuizDetails {
      quizStartTime
      userQuizStatus
    }
  }
`;

export default GetQuizStatusQuery;
