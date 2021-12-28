/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role, Step } from "./globalTypes";

// ====================================================
// GraphQL query operation: AppViewerQuery
// ====================================================

export interface AppViewerQuery_viewer {
  __typename: "User";
  _id: string | null;
  name: string;
  id: string | null;
  email: string;
  phone: string;
  registered: boolean;
  strategy: string;
  role: Role;
  step: Step;
  city: string;
}

export interface AppViewerQuery {
  viewer: AppViewerQuery_viewer;
}
