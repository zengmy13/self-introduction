import React from 'react';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

export default function Contact() {
    const useStyles = makeStyles(theme => ({
        title: {
            marginBottom: "20px",
            marginTop: "30px",
            position: "relative",
            '&::after': {
                display: "block",
                position: "absolute",
                content: '""',
                left: "0px",
                bottom: "-10px",
                width: "90px",
                height: "2px",
                background: "#0fb78c"
            }
        },
        subtitle: {
            margin: "20px 0 20px 0"
        },
        icon: {
            verticalAlign: "-10px",
            marginRight: "10px"
        },
        gridItem: {
            marginBottom: "30px",
            marginTop: "30px"
        },
        gridContainer: {
            marginTop: "30px",
            marginLeft: "30px",
            [theme.breakpoints.down("sm")]:{
                marginLeft: "0px",
            }
        }
    }))
    const classes = useStyles();
    return (
        <>
            <Typography variant='h2' className={classes.title}>Contact</Typography>
            <Divider/>
            <Grid item container justify='flex-start' className={classes.gridContainer}>
                <Grid item>
                    <Typography variant='h3' className={classes.subtitle}>Keep In Touch</Typography>
                    <Grid container direction='column'>
                        <Grid item className={classes.gridItem}>
                            <span className={classes.icon}><LocationOnOutlinedIcon color='primary'/></span><span>2650 Hvidovre,Copenhagen,Denmark</span>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <span className={classes.icon}><PhoneIphoneOutlinedIcon
                                color='primary'/></span><span>(+45)50216058</span>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <span className={classes.icon}><MailOutlineIcon
                                color='primary'/></span><span>zengmy13@gmail.com</span>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}