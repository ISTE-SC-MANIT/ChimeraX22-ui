import React from 'react';
import Instructions from '../../components/test/instructions';
import { ComponentProps } from '../_app';
import { Button, Grid, Box } from '@mui/material';
import { useRouter } from 'next/router';

const Test: React.FC<ComponentProps> = ({
  viewer,
  setSuccessMessage,
  refetch,
  setErrorMessage,
}) => {
  const router = useRouter();

  React.useEffect(() => {
    if (viewer.step === 'REGISTER') {
      router.push('/dashboard/register');
    }
    if (viewer.step === 'PAYMENT') {
      router.push('/dashboard/payment');
    }
    if (viewer.step === 'TEST') {
    }
    if (viewer.step === 'CHOOSE_TEAM') {
      router.push('/dashboard/team');
    }
  }, []);
  return (
    <>
      <Instructions
        page='instructions'
        viewer={viewer}
        setSuccessMessage={setSuccessMessage}
        refetch={refetch}
        setErrorMessage={setErrorMessage}
      />
      {/* <Grid container spacing={0} alignItems="center" justifyContent="center">
        <Box marginBottom={4}>
          <Button
            // onClick={handleStartQuiz}
            disabled={true}
            variant="contained"
            color="primary"
          >
            Start Quiz
          </Button>
        </Box>
      </Grid> */}
    </>
  );
};

export default Test;
