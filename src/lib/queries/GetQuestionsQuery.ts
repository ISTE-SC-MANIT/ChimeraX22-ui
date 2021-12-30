import { gql } from '@apollo/client';

const GetQuestionsQuery = gql`
  query GetQuestionsQuery {
    getQuestions {
      id
      question
      questionAssets
      firstAnswerLabel
      secondAnswerLabel
      questionNo
      questionType
      questionAnswerType
    }
  }
`;

export default GetQuestionsQuery;
