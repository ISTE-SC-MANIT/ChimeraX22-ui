import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles'
import { useRouter } from 'next/dist/client/router';
import CustomDrawer from '../../components/navbar/customDrawer';
import Navbar from '../../components/navbar/Navbar';
import { ComponentProps } from '../../pages/_app';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
  },
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
          <Typography variant="h5">
            Congratulations. Your quiz was successfully submitted. We will get back to you soon.
          </Typography>
        </Box>
      </Grid>
    </div>
  );
}

export default Success;