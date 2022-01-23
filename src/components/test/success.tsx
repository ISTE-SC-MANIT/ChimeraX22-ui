import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles'
import { useRouter } from 'next/dist/client/router';
import CustomDrawer from '../../components/navbar/customDrawer';
import Navbar from '../../components/navbar/Navbar';
import { ComponentProps } from '../../pages/_app';
import Image from 'next/image';
const useStyles = makeStyles((theme : Theme) => ({
  root: {
    height: '90vh',
    backgroundColor : theme.palette.mode === 'light' ? '#ececec' : 'dark'
  },

  typo :{
    fontWeight:700,
    padding:'20px',
    margin:'20px',
  }
}));

const Success: React.FC<ComponentProps> = ({ viewer, setSuccessMessage, setErrorMessage }) => {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  
 
  return (
    <div>
      <CustomDrawer
        name={viewer.name}
        username={viewer.email}
        open={open}
        setOpen={setOpen}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
      />
      <Navbar
        setOpen={setOpen}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
      />
      <Grid
        container
        justifyContent="center"
        onClick={() => setOpen(false)}
        className={classes.root}
      >
        <Box textAlign="center" margin={3}>
          <Typography variant="h5" className={classes.typo} >
            Congratulations. Your quiz was successfully submitted. We will get back to you soon.
          </Typography>
        </Box>
      </Grid>
    </div>
  );
}

export default Success;