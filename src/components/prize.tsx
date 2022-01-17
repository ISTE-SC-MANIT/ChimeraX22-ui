import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { makeStyles, createStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'


const useStyles = makeStyles((theme: Theme) => (
    createStyles({
        root: {
            minHeight: '80vh',
        },
        card: {
            padding: '40px',
            backgroundColor: theme.palette.mode === 'light' ? '#FFFFE0' : '#0A1929',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        money: {
            marginRight: '10px',
            marginTop: '20px',
            fontWeight: 'bold'
        },
        cardContainer: {
            width: '90%'
        }
    })
));
const Prize = () => {
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.root} container alignItems='center' justifyContent='center'>
                <Typography variant="h3">PRIZES</Typography>
                <Grid container justifyContent="space-around" className={classes.cardContainer}>
                    <Paper elevation={5} className={classes.card}>
                        <Image
                            src='/first prize.svg'
                            alt='logo'
                            width='200px'
                            height='200px'
                        />
                        <Typography variant="h4" className={classes.money}>₹ 15000</Typography>
                    </Paper>
                    <Paper elevation={5} className={classes.card}>
                        <Image
                            src='/second prize.svg'
                            alt='logo'
                            width='200px'
                            height='200px'
                        />
                        <Typography variant="h4" className={classes.money}>₹ 10000</Typography>
                    </Paper>
                    <Paper elevation={5} className={classes.card}>
                        <Image
                            src='/third prize.svg'
                            alt='logo'
                            width='200px'
                            height='200px'
                        />
                        <Typography variant="h4" className={classes.money}>₹ 5000</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Prize;