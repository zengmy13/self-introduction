import React from "react";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/styles";


export default function About() {
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
                width: "110px",
                height: "2px",
                background: "#0fb78c"
            }
        },
        gridContainer: {
            marginTop: "50px",
            marginLeft: "40px",
            [theme.breakpoints.down("sm")]: {
                marginLeft: "0px"
            }
        },
        intro: {
            paddingRight: "40px",
            lineHeight: '2em',
            '&:first-letter': {
                fontSize: "1.5rem",
                fontWeight: 300
            },
            [theme.breakpoints.down("sm")]: {
                paddingRight: 0
            }
        },
        body: {
            marginTop: "30px"
        },
        item: {
            marginTop: "20px"
        }
    }))
    const classes = useStyles();
    return (
        <>
            <Typography variant='h2' className={classes.title}>About me</Typography>
            <Divider/>
            <Grid container className={classes.gridContainer} direction='column'>
                <Grid item>
                    <Typography className={classes.intro}>
                        I am a frontend developer with law background, having mastered a lot of programming skills such
                        as
                        Html, Css, Javascript, React, Redux, Node, MongoDB,etc by self-study. I am looking for
                        internship or
                        job opportunities as a frontend engineer now.
                    </Typography>
                </Grid>
                <Grid container item style={{marginTop: "20px"}} direction='row' spacing={5}>
                    <Grid item xs={12} md={6} className={classes.item}>
                        <span><strong>Name: </strong></span><span>Mengyi Zeng</span>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.item}>
                        <span><strong>Email: </strong></span><span>zengmy13@gmail.com</span>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.item}>
                        <span><strong>Phone: </strong></span><span>(+45)50216058</span>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.item}>
                        <span><strong>Time Available: </strong></span><span>Any time</span>
                    </Grid>
                    <Grid item xs={12} className={classes.item}>
                        <span><strong>Address: </strong></span><span>2650 Hvidovre,Copenhagen,Denmark</span>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}