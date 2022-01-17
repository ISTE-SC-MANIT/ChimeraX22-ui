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
            minHeight: '20vh',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
                minHeight: '60vh',
            }
        },
        heading: {
            marginBottom: '50px',
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
        imageUrlG:'/Unschool Logo Horizontal black.png' ,
        url: 'https://www.unschool.in/',
    },
    {
        imageUrl: '/ELearnmarket Logo (2).png',
        imageUrlG: '/ElearnMarketG.png',
        url: 'http://elearnmarkets.com/',
    },
    {
        imageUrl: '/MentorX.png',
        imageUrlG:'/MentorXG.png',
        url: 'https://thementorx.com/',
    },
    {
        imageUrl: '/hoverRobotix.png',
        imageUrlG: '/hoverRobotixG.png',
        url: 'https://hoverrobotix.com/',
    }
]


const Sponsors = () => {
    const classes = useStyles();
    
    const [state,setState]=React.useState<Number>(100);
    return (
        <>
            <Box className={classes.root}>
                <Typography variant="h3" className={classes.heading}>SPONSORS</Typography>
                <Grid container justifyContent='space-around' alignItems='center' spacing={{ xs: 2, md: 3 }}>
                    {
                        sponsorDetails.map((sponsor, key) => (
                            <Grid item key={key} className={classes.card}>
                                <Link href={sponsor.url} target='_blank'>
                                    <a><Image
                                        onMouseOver={() => setState(key)}
                                        onMouseOut={() => setState(100)}
                                        src={ state === key ? sponsor.imageUrl : sponsor.imageUrlG} 
                                        width='130px'
                                        height={key === 1 ? '40px' : '100px'}
                                        alt='logo'
                                    /></a>
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