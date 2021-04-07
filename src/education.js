import React from 'react';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import {useTheme} from "@material-ui/core";


export default function Work() {
    const useStyles = makeStyles(theme => ({
        title: {
            position: "relative",
            marginBottom: "20px",
            marginTop: "30px",
            '&::after': {
                display: "block",
                position: "absolute",
                content: '""',
                left: "0px",
                bottom: "-10px",
                width: "190px",
                height: "2px",
                background: "#0fb78c"
            }
        },
        gridContainer: {
            marginTop: "20px",
            [theme.breakpoints.up('md')]: {
                marginTop: "70px",
            },
        },
        date: {
            color: theme.palette.primary.main,
            fontWeight: 400
        },
        degree: {
            fontWeight: 400,
            fontSize: "18px",
            marginTop: "-30px",
            marginBottom: "10px"
        },
        college: {
            fontSize: "15px",
            fontWeight: 400
        },
        subtitle: {
            color: "darkgray",
            fontSize: "14px",
            marginTop: "5px"
        },
        subBody: {
            marginLeft: "40px",
            position: "relative",
            '&::after': {
                display: "block",
                position: "absolute",
                content: '""',
                left: "-4px",
                top: "-4px",
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                background: theme.palette.primary.main
            },
            '&::before': {
                display: "block",
                position: "absolute",
                content: '""',
                bottom: 0,
                left: "0px",
                top: "0px",
                borderLeft: "1px solid #d0d0d0",
            }
        }
    }))
    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
            <Typography variant='h2' className={classes.title}>Work & Education</Typography>
            <Divider/>
            <Grid container direction='row'>
                <Grid container md={6} className={classes.gridContainer}>
                    <Grid item>
                        <Grid container justify='center' spacing={6} direction='column'>
                            <Grid item> <i className="fas fa-code" style={{
                                color: theme.palette.primary.main,
                                fontSize: "24px", display: "inline-block", height: "30px", width: "30px"
                            }}/><span style={{fontSize: "25px", marginLeft: "10px", fontWeight: 400}}>Self-Study</span></Grid>
                            <Grid item className={classes.subBody}>
                                <Typography className={classes.degree}>Frontend Development</Typography>
                                <Typography><span className={classes.date}>2020-Until</span><span
                                    className={classes.college}>/Self-study</span>
                                </Typography>
                                <Typography
                                    className={classes.subtitle}>
                                    Html,Css,React,Javascript,
                                    Redux,Express,Mongodb...
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={6} direction='column' style={{marginTop: "10px"}}>
                        <Grid item> <i className="fa fa-graduation-cap" style={{
                            color: theme.palette.primary.main,
                            fontSize: "27px", display: "inline-block", height: "30px", width: "30px"
                        }}/><span
                            style={{fontSize: "25px", marginLeft: "10px", fontWeight: 400}}>Employment</span></Grid>
                        <Grid item className={classes.subBody}>
                            <Typography className={classes.degree}>Trainee</Typography>
                            <Typography><span className={classes.date}>2018-Present</span><span
                                className={classes.college}>/Andersen Partners</span></Typography>
                            <Typography className={classes.subtitle}>
                                Responsible for doing legal search, preparing legal
                                documents and doing translation</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className={classes.gridContainer} md={6}>
                    <Grid>
                        <Grid item container spacing={6} direction='column'>
                            <Grid item> <i className="fa fa-briefcase" style={{
                                color: theme.palette.primary.main,
                                fontSize: "27px", display: "inline-block", height: "30px", width: "30px"
                            }}/><span
                                style={{fontSize: "25px", marginLeft: "10px", fontWeight: 400}}>Education</span></Grid>
                            <Grid item className={classes.subBody}>
                                <Typography className={classes.degree}>Master degree</Typography>
                                <Typography><span className={classes.date}>2017-2019</span><span
                                    className={classes.college}>/University of Copenhagen, Denmark</span></Typography>
                                <Typography className={classes.subtitle}>Got government scholarship</Typography>
                            </Grid>
                            <Grid item className={classes.subBody}>
                                <Typography className={classes.degree}>Master degree</Typography>
                                <Typography><span className={classes.date}>2013-2016</span><span
                                    className={classes.college}>/University of JiLin, China</span></Typography>
                            </Grid>
                            <Grid item className={classes.subBody}>
                                <Typography className={classes.degree}>Bachelor degree</Typography>
                                <Typography><span className={classes.date}>2009-2012</span><span
                                    className={classes.college}>/University of Hubei, China</span></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}