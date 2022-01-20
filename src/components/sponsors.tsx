import { Box, ButtonBase, Card, CardContent, CardMedia, Grid, Paper, Typography, Button, Link } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles'
import React, { useState } from 'react'
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
            backgroundColor: theme.palette.mode === 'light' ? '#ECF0F6' : '#0A1929',
            [theme.breakpoints.down('md')]: {
                minHeight: '60vh',
            }
        },
        heading: {
            marginBottom: '50px',
            fontWeight: "200",
            fontSize: '48px',
            [theme.breakpoints.down('md')]: {
                marginBottom: '80px',
                fontSize: '30px'
            }
        },
        cardGroup: {
            width: '80%',
        },
        card: {
            height: '130px',
            width: '160px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '30px',
        },
    })
)


const sponsorDetails = [
    {
        imageUrl: '/Unschool Logo Horizontal White.png',
        url: 'https://www.unschool.in/',
    },
    {
        imageUrl: '/ELearnmarket Logo (2).png',
        url: 'http://elearnmarkets.com/',
    },
    {
        imageUrl: '/MentorX.png',
        url: 'https://thementorx.com/',
    },
    {
        imageUrl: '/hoverRobotix.png',
        url: 'https://hoverrobotix.com/',
    }
    ,
    {
        imageUrl: '/bull.svg',
        url: 'http://sponsorbull.com/',
    }
   
]


const Sponsors = () => {
    const classes = useStyles();
    const [keyIndex, setKey] = useState<number>(100);
    return (
        <>
            <Box className={classes.root}>
                <Typography variant="h3" className={classes.heading}>SPONSORS</Typography>
                <Grid container justifyContent='space-around' alignItems='center' className={classes.cardGroup}>
                    {
                        sponsorDetails.map((sponsor, key) => (
                            <Grid item key={key} className={classes.card}
                                onMouseOver={() => setKey(key)}
                                onMouseOut={() => setKey(100)}>
                                <Link href={sponsor.url} target='_blank'>
                                    <Image
                                        src={sponsor.imageUrl}
                                        width={keyIndex === key ? '140px' : '130px'}
                                        height={key === 1 ? keyIndex === key ? '45px' : '40px' : keyIndex === key ? '140px' : '130px'}
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