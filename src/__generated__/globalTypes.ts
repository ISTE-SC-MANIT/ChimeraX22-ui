/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * type of answer question is having
 */
export enum QuestionAnswerType {
  DOUBLE = "DOUBLE",
  SINGLE = "SINGLE",
}

/**
 * type of question
 */
export enum QuestionType {
  AUDIO = "AUDIO",
  IMAGE = "IMAGE",
  TEXT = "TEXT",
  VIDEO = "VIDEO",
}

/**
 * role of user in team
 */
export enum Role {
  ADMIN = "ADMIN",
  NOT_INITIALIZED = "NOT_INITIALIZED",
  TEAM_HELPER = "TEAM_HELPER",
  TEAM_LEADER = "TEAM_LEADER",
}

/**
 * Step on which user is present
 */
export enum Step {
  CHOOSE_TEAM = "CHOOSE_TEAM",
  PAYMENT = "PAYMENT",
  REGISTER = "REGISTER",
  TEST = "TEST",
}

/**
 * tells wether player is individual or team
 */
export enum TeamStatus {
  INDIVIDUAL = "INDIVIDUAL",
  NOT_INITIALIZED = "NOT_INITIALIZED",
  TEAM = "TEAM",
}

/**
 * status of quiz
 */
export enum UserQuizStatus {
  ENDED = "ENDED",
  NOT_STARTED = "NOT_STARTED",
  STARTED = "STARTED",
}

export interface UserInput {
  name?: string | null;
  phone?: string | null;
  year?: number | null;
  city?: string | null;
  college?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
