import React from 'react';
import { useMediaQuery } from '@mui/material'
import { Theme, useTheme } from '@mui/material/styles';
import { withStyles, makeStyles } from '@mui/styles';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const useStyles = makeStyles((theme: Theme) => ({
    container: {
        textAlign: 'center',
        width: '93%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(4),
        padding: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            width: '96%',
        },
    },

    aboutContent: {
        textAlign: "justify",
        fontSize: '20px',
        fontWeight: '300',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%',
        margin: '5%',
        letterSpacing: '1px',
        padding: '3%',
    },

    heading: {
        fontWeight: "200",
        fontSize: '60px'
    },

}));

export const About = () => {

    const classes = useStyles();
    const AboutImage = () => {
        const theme = useTheme();
        const mobile = useMediaQuery(theme.breakpoints.down('sm'));
        if (mobile) {
            return (
                <Box>
                    <Image
                        src='/aboutImage.jpg'
                        alt='logo'
                        width={window.innerWidth}
                        height={window.innerWidth / 1.74}
                    />
                </Box>
            );
        }
        return (
            <Box>
                <Image src='/aboutImage.jpg' alt='logo' width={980} height={500} />
            </Box>
        );
    };


    return (
        <>
            <Grid>

                <Grid container alignItems="center" justifyContent="center">

                    <Box display="flex" flexDirection="column" textAlign="center" margin={3}>

                        <Typography variant="h3">
                            <b className={classes.heading}  >ABOUT</b>
                        </Typography>

                    </Box>
                </Grid>
                <Grid container alignItems="center" justifyContent="center">
                    <Box>

                        <Paper className={classes.container} elevation={0}>
                            <AboutImage />
                            <h5 className={classes.aboutContent} >


                                Chimera X is the flagship event under the annual students' conclave Chimera, with an exclusive reach in over 30 cities that we intend on magnifying further. Due to the unparalleled level of the event, it has an established legacy of 18 years. It is a national-level quizzing contest providing an incredible opportunity to imbibe and showcase knowledge.

                                Over 5000 students from all over the nation work stringently for 30 days and compete with others in 3 stages of the quiz to be the crown-holders. The event had an enormous cash prize of 30,000 coupled with exhilarating goodies. The zealous participation of students integrated with the persistent efforts of the team to leave no stone unturned has made the event a grand one.
                            </h5>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}