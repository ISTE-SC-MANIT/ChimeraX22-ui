import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next/router';
import { ComponentProps } from '../../pages/_app';
// import SubmitQuizMutation from './relay/mutations/SubmitQuizMutation';
// import { QuestionAnswer, SubmitQuizInput } from '../__generated__/SubmitQuizMutation.graphql';


interface SubmitQuizProps extends ComponentProps {
  submit: boolean;
  handleClose: () => void;
  setQuizStatus: () => void;
  answer: QuestionAnswer[];
}

const SubmitQuizBox: React.FC<SubmitQuizProps> = ({
  submit,
  environment,
  handleClose,
  setSuccessMessage,
  setErrorMessage,
  refetch,
  setQuizStatus,
  answer
}) => {
  const router = useRouter();
  const handleSubmitQuizMutation = () => {
    const input: SubmitQuizInput = { responses: answer };
    SubmitQuizMutation(environment, input, {
      onCompleted: () => {
        setSuccessMessage('Quiz was successfully Submitted');
        setQuizStatus();
        // router.push('/');
        // refetch();
      },
      onError: () => {
        setErrorMessage('Something went wrong');
        setQuizStatus();
      },
    });
  };

  return (
    <div>
      <Dialog
        open={submit}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Submit Quiz`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to submit your quiz?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitQuizMutation} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SubmitQuizBox;
function SubmitQuizMutation(environment: any, input: SubmitQuizInput, arg2: { onCompleted: () => void; onError: () => void; }) {
  throw new Error('Function not implemented.');
}

