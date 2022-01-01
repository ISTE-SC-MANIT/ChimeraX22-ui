
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material';
import {Box , useMediaQuery} from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, useTheme } from '@mui/material/styles';
import Image from 'next/image'
const useStyles = makeStyles((theme: Theme) =>

  createStyles({
    root: {
      backgroundColor: '	#00BFFF', 
      height: '100vh', 
      padding: '5%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    },
  })

);
export default function ErrorPage() {

  const ErrorImg = () => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));
    if (mobile) {
      return (
        <Box>
          <Image
            src='/error.png'
            alt='logo'
            width={window.innerWidth}
            height={window.innerWidth / 1.74}
          />
        </Box>
      );
    }
    return (
      <Box>
        <Image src='/error.png' alt='logo' width={500} height={350} />
      </Box>
    );
  };
  
  const classes = useStyles();
  return (
    <>
      <div className={classes.root} >
        <CssBaseline />
            <Typography variant='subtitle1' align='center'>
              <ErrorImg/>
              <h2>If you face any difficulty Please contact below email address<br />
                <a href='#' >istescmanit@gmail.com</a>
              </h2>
            </Typography>
    
      </div>
    </>
  );
}