/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ByPassPaymentInput, PaymentStatus } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: ByPassPaymentMutation
// ====================================================

export interface ByPassPaymentMutation_byPassPayment {
  __typename: "Team";
  status: PaymentStatus;
  teamLeadersId: string;
  teamHelpersId: string | null;
}

export interface ByPassPaymentMutation {
  byPassPayment: ByPassPaymentMutation_byPassPayment;
}

export interface ByPassPaymentMutationVariables {
  input: ByPassPaymentInput;
}
