import { gql } from '@apollo/client';

const GetQuizStartTimeQuery = gql`
  query GetQuizStartTimeQuery {
    getQuizDetails {
      quizStartTime
    }
  }
`;

export default GetQuizStartTimeQuery;
