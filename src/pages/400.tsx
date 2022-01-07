import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Typography } from '@mui/material';
import { Box, useMediaQuery } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, useTheme } from '@mui/material/styles';
import { Link } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#ececec',
      height: '100vh',
      padding: '5%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  })
);
export default function ErrorPage400() {
  const router = useRouter();
  const theme = useTheme();

  React.useEffect(() => {
    // router.push('/login');
  });

  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Typography variant='h4' align='center'>
          Oops!! Something Went Wrong.
        </Typography>
        <Typography variant='h6' align='center'>
          {' '}
          Please Click here Login Again
        </Typography>

        <Button
          onClick={() => {
            router.push('/login');
          }}
        >
          Login Page
        </Button>
      </div>
    </>
  );
}
