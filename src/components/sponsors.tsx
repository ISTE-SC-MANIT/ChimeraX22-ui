import { Box, ButtonBase, Card, CardContent, CardMedia, Grid, Paper, Typography, Button, Link } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles'
import React from 'react'
import { Theme } from '@mui/material/styles'
import Image from 'next/image';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '90vh',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
                minHeight: '60vh',
            }
        },
        heading: {
            marginBottom: '170px',
            fontWeight: "200",
            fontSize: '60px',
            [theme.breakpoints.down('md')]: {
                marginBottom: '80px',
                fontSize: '30px'
            }
        },
        card: {
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '30px'
        }
    })
)


const sponsorDetails = [
    {
        imageUrl: '/Unschool Logo Horizontal White.png',
        url: 'https://www.unschool.in/',
    },
    {
        imageUrl: '/MentorX.png',
        url: 'https://thementorx.com/',
    },
    {
        imageUrl: '/ELearnmarket Logo.jpg',
        url: 'http://elearnmarkets.com/',
    },
    {
        imageUrl: '/hoverRobotix.png',
        url: 'https://hoverrobotix.com/',
    }
]


const Sponsors = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Typography variant="h3" className={classes.heading}>SPONSORS</Typography>
                <Grid container justifyContent='space-around' alignItems='center' spacing={{ xs: 2, md: 3 }}>
                    {
                        sponsorDetails.map((sponsor, key) => (
                            <Grid item key={key} className={classes.card}>
                                <Link href={sponsor.url} target='_blank'>
                                    <Image
                                        src={sponsor.imageUrl}
                                        width='200px'
                                        height={key === 2 ? '60px' : '200px'}
                                        alt='logo'
                                    />
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    )
}

export default Sponsors;