import { gql, useMutation } from '@apollo/client';

export const CreateQuestion = gql`
  mutation CreateQuestionMutation($input: CreateQuestionInput!) {
    createQuestion(createQuestionInput: $input) {
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
