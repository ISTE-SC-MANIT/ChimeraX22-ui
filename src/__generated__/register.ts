/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: register
// ====================================================

export interface register_registerUser {
  __typename: "User";
  name: string;
  id: string | null;
  email: string;
  phone: string;
  college: string | null;
  strategy: string;
}

export interface register {
  registerUser: register_registerUser;
}

export interface registerVariables {
  input: UserInput;
}
