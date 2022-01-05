import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faMapMarked,
    faMobile,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { Grid, Box, Container } from '@mui/material';
import ScrollDialog from './terms';
import PrivacyDialog from './privacy';
import RefundDialog from './refund';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, useTheme } from '@mui/material/styles';


const useStyles = makeStyles((theme: Theme) =>

    createStyles({
        footer: {
            backgroundColor: '#fff',
            [theme.breakpoints.down('md')]: {
                paddingLeft: '70px'
            }
        },
        footerSection: {
            textAlign: 'center',
            padding: '50px',
            minHeight: '60vh'
        },
        footerPrivacyli: {
            margin: '10px 15px 10px 15px',
        },
        footerPrivacyA: {
            cursor: 'pointer',
        },
        footerPrivacyUl: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        logo: {
            marginBottom: '10px',
        },
        socialIcon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: '10%',
            [theme.breakpoints.down('md')]: {
                left: '15%',
            }

        },
        icon: {
            position: 'relative',
            width: '50px',
            padding: '0',
            borderRadius: '50px',
        }
    })

);

const Footer: React.FC = () => {
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openPrivacy, setOpenPrivacy] = React.useState(false);
    const [openRefund, setOpenRefund] = React.useState(false);
    const classes = useStyles();



    return (
        <footer className={classes.footer}>
            <ScrollDialog
                openDialog={openDialog}
                onClose={() => setOpenDialog(false)}
            />
            <PrivacyDialog
                openDialog={openPrivacy}
                onClose={() => setOpenPrivacy(false)}
            />
            <RefundDialog
                openDialog={openRefund}
                onClose={() => setOpenRefund(false)}
            />
            <Container maxWidth='lg'>
                <Grid
                    container
                    alignItems='center'
                    justifyContent='center'
                    className='footerSection'
                    spacing={4}
                >
                    <Grid item xs={12} sm={6} md={4} >
                        <div className={classes.logo}>
                            <a href='https://istemanit.in/' >
                                <img src='./iste.svg' alt='iste-logo' />
                            </a>
                        </div>
                        <div className={classes.socialIcon}>
                            <div className={classes.icon}>
                                <a href='https://www.instagram.com/istemanit' >
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        className='social-media fa-2x'
                                    />
                                </a>
                            </div>
                            <div className={classes.icon}>
                                <a href='https://www.facebook.com/ISTESCMANIT' >
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        className='social-media fa-2x'
                                    />
                                </a>
                            </div>
                            <div className={classes.icon}>
                                <a
                                    href='https://www.linkedin.com/company/iste-sc-manit'

                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className='social-media fa-2x'
                                    />
                                </a>
                            </div>
                            <div className={classes.icon}>
                                <a href='https://mobile.twitter.com/iste_manit' >
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        className='social-media fa-2x'
                                    />
                                </a>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='footerMiddle'>
                        <div className='address'>
                            <h2 className='footer-heading'>
                                <span>
                                    <i>
                                        <FontAwesomeIcon icon={faMapMarked} />
                                    </i>
                                </span>
                                ADDRESS
                            </h2>
                            <p>
                                <a
                                    className='link'
                                    href='https://goo.gl/maps/nTNnuX6w5YbGKTic7'

                                >
                                    Maulana Azad National
                                    <br />
                                    Institute of Technology,
                                    <br /> Bhopal
                                </a>
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='footerRight'>
                        <div className='mail'>
                            <h2 className='footer-heading'>
                                <span>
                                    <i>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </i>
                                </span>
                                EMAIL ADDRESS
                            </h2>
                            <p>
                                <a href='mailto:flairhaven.istemanit@gmail.com'>
                                    flairhaven.istemanit@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className='contact'>
                            <h2 className='footer-heading'>
                                <span>
                                    <i>
                                        <FontAwesomeIcon icon={faMobile} />
                                    </i>
                                </span>
                                CONTACT
                            </h2>
                            <p>
                                <a href='tel://9469470474'>
                                    <i aria-hidden='true'>
                                        <FontAwesomeIcon icon={faPhone} />
                                    </i>
                                    Tushar Khajuria <br />
                                    +91 9469470474
                                </a>
                            </p>
                            <br />
                            <p>
                                <a href='tel://9993654745'>
                                    <i aria-hidden='true'>
                                        <FontAwesomeIcon icon={faPhone} />
                                    </i>
                                    Ananya Rawat <br />
                                    +91 9993654745
                                </a>
                            </p>
                        </div>
                    </Grid>
                </Grid>
                <Box >
                    <ul className={classes.footerPrivacyUl}>
                        <a onClick={() => setOpenDialog(true)} className={classes.footerPrivacyA}>
                            <li className={classes.footerPrivacyli}>Terms & Conditions</li>
                        </a>
                        <a onClick={() => setOpenRefund(true)} className={classes.footerPrivacyA}>
                            <li className={classes.footerPrivacyli}>Refund Policy</li>
                        </a>
                        <a onClick={() => setOpenPrivacy(true)} className={classes.footerPrivacyA}>
                            <li className={classes.footerPrivacyli}>Privacy Policy</li>
                        </a>
                    </ul>
                </Box>
            </Container>
        </footer>
    );
};
export default Footer;