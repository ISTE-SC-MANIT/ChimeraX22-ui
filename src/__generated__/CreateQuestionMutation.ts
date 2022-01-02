/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateQuestionInput, QuestionType, QuestionAnswerType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateQuestionMutation
// ====================================================

export interface CreateQuestionMutation_createQuestion {
  __typename: "Question";
  id: string | null;
  question: string;
  questionAssets: string | null;
  firstAnswerLabel: string;
  secondAnswerLabel: string | null;
  questionNo: number;
  questionType: QuestionType;
  questionAnswerType: QuestionAnswerType;
}

export interface CreateQuestionMutation {
  createQuestion: CreateQuestionMutation_createQuestion;
}

export interface CreateQuestionMutationVariables {
  input: CreateQuestionInput;
}
