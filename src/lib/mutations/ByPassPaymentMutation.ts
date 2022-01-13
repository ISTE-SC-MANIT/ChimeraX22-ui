import { gql, useMutation } from '@apollo/client';

export const ByPassPayment = gql`
  mutation ByPassPaymentMutation($input: ByPassPaymentInput!) {
    byPassPayment(byPassPaymentInput: $input) {
      status
      teamLeadersId
      teamHelpersId
    }
  }
`;
