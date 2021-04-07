import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/styles";
import {useTheme} from "@material-ui/core";


export default function Skill() {
    const useStyles = makeStyles((theme) => ({
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
                width: "150px",
                height: "2px",
                background: "#0fb78c"
            }
        },
        gridContainer: {
            marginTop: "20px",
            padding: "0 40px",
            [theme.breakpoints.up('sm')]: {
                marginTop: "70px",
            },
            [theme.breakpoints.down('xs')]: {
                padding: "0 0px",
            },
        },
        bar: {
            height: "3px",
            background: "gradient(linear, left top, right top, color-stop(31%,#0fb78c ), color-stop(69%, #02566a))",
            display: "block",
            marginTop: "10px",
            transition: "all 2s",
        },
        width1: {
            width: `${345 * 0.92}px`,
        },
        width2: {
            width: `${345 * 0.90}px`
        },
        width3: {
            width: `${345 * 0.85}px`
        },
        width4: {
            width: `${345 * 0.70}px`
        },
        width5: {
            width: `${345 * 0.60}px`
        },
        width6: {
            width: `${345 * 0.50}px`
        },
        width7: {
            width: `${340 * 0.30}px`
        },
        initialBar: {
            width: "0px",
        },
        span: {
            verticalAlign: "6px",
            marginLeft: "5px"
        }
    }))

    const classes = useStyles();
    const theme = useTheme();
    const [load, setLoad] = useState(false)
    useEffect(() => {
        setLoad(true);
    })
    return (
        <>
            <Typography variant='h2' className={classes.title}>Personal Skill</Typography>
            <Divider/>
            <Grid container className={classes.gridContainer} spacing={4}>
                <Grid item sm={12} md={6} >
                    <div>
                        <i className="fab fa-html5" aria-hidden="true" style={{
                            color: theme.palette.primary.main, fontSize: "25px"}}/>
                        <span className={classes.span}>HTML & CSS</span>
                        <span style={{float: "right"}}>95%</span>
                        <b className={load ? ` ${classes.bar} ${classes.width1}` : classes.initialBar}
                           data-percent="95%"></b>
                    </div>
                </Grid>
                <Grid item sm={12} md={6}>
                    <div>
                        <i className="fab fa-react" aria-hidden="true" style={{
                            color: theme.palette.primary.main, fontSize: "25px"}}/>
                        <span className={classes.span}>React & Redux </span>
                        <span style={{float: "right"}}>90%</span>
                        <b className={load ? ` ${classes.bar} ${classes.width2}` : classes.initialBar}
                           data-percent="95%"></b>
                    </div>
                </Grid>

                <Grid item sm={12} md={6}>
                    <div>
                        <i className="fab fa-js" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>Javascript</span>
                        <span style={{float: "right"}}>85%</span>
                        <b className={load ? ` ${classes.bar} ${classes.width3}` : classes.initialBar}
                           data-percent="85%"></b>
                    </div>
                </Grid>

                <Grid item sm={12} md={6}>
                    <div>
                        <i className="fab fa-node" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>Node & Express</span>
                        <span style={{float: "right"}}>70%</span>
                        <b className={load ? ` ${classes.bar} ${classes.width4}` : classes.initialBar}
                           data-percent="95%"></b>
                    </div>
                </Grid>

                <Grid item sm={6}>
                    <div>
                        <i className="fas fa-database" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>Mongodb</span>
                        <span style={{float: "right"}}>70%</span>
                        <b className={load ? ` ${classes.bar} ${classes.width4}` : classes.initialBar}
                           data-percent="80%"></b>
                    </div>
                </Grid>

                <Grid item sm={6}>
                    <div>
                        <i className="fab fa-google" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>Firebase</span>
                        <span style={{float: "right"}}>60%</span>
                        <b className={load ? ` ${classes.bar} ${classes.width5}` : classes.initialBar}
                           data-percent="80%"></b>
                    </div>
                </Grid>

                <Grid item sm={6}>
                    <div>
                        <i className="fab fa-jira" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>Scrum</span>
                        <span style={{float: "right"}}>50%</span>
                        <b className={load ? ` ${classes.bar} ${classes.width6}` : classes.initialBar}
                           data-percent="80%"></b>
                    </div>
                </Grid>

                <Grid item sm={6}>
                    <div>
                        <i className="fab fa-aws" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>AWS</span>
                        <span style={{float: "right"}}>30%</span>
                        <b className={load ? ` ${classes.bar} ${classes.width7}` : classes.initialBar}
                           data-percent="80%"></b>
                    </div>
                </Grid>

                <Grid item sm={6}>
                    <div>
                        <i className="fab fa-docker" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>Docker</span>
                        <span style={{float: "right"}}>30%</span>
                        <b className={load ? ` ${classes.bar} ${classes.width7}` : classes.initialBar}
                           data-percent="80%"></b>
                    </div>
                </Grid>

                <Grid item sm={6}>
                    <div>
                        <i className="fab fa-jenkins" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>CI/CD</span>
                        <span style={{float: "right"}}>30%</span>
                        <b className={load ? ` ${classes.bar} ${classes.width7}` : classes.initialBar}
                           data-percent="80%"></b>
                    </div>
                </Grid>
            </Grid>
        </>
    )}
