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
        initialBar:{
            '&::after':{
                width:'0',
                content:'""',
                position:"absolute",
                display: "block",
                left:0,
                bottom:0,
                height: "3px",

            }
        },
        main:{
            position:"relative",
           '&::after':{
               content:'""',
               position:"absolute",
               display: "block",
               left:0,
               bottom:'-10px',
               height: "3px",
               background: "gradient(linear, left top, right top, color-stop(31%,#0fb78c ), color-stop(69%, #02566a))",
               transition: "all 2s",
           }
        },
        width1: {
            '&::after':{
                width: "95%",
            }
        },
        width2: {
            '&::after':{
                width: "90%",
            }
        },
        width3: {
            '&::after':{
                width: "85%",
            }
        },
        width4: {
            '&::after':{
                width: "70%",
            }
        },
        width5: {
            '&::after':{
                width: "60%",
            }
        },
        width6: {
            '&::after':{
                width: "50%",
            }
        },
        width7: {
            '&::after':{
                width: "30%",
            }
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
            <Grid container className={classes.gridContainer} spacing={5}>
                <Grid item xs={12} md={6} >
                    <div className={load? `${classes.main} ${classes.width1}`:classes.initialBar}>
                        <i className="fab fa-html5" aria-hidden="true" style={{
                            color: theme.palette.primary.main, fontSize: "25px"}}/>
                        <span className={classes.span}>HTML & CSS</span>
                        <span style={{float: "right"}}>95%</span>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={load? `${classes.main} ${classes.width2}`:classes.initialBar}>
                        <i className="fab fa-react" aria-hidden="true" style={{
                            color: theme.palette.primary.main, fontSize: "25px"}}/>
                        <span className={classes.span}>React & Redux </span>
                        <span style={{float: "right"}}>90%</span>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className={load? `${classes.main} ${classes.width3}`:classes.initialBar}>
                        <i className="fab fa-js" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>Javascript</span>
                        <span style={{float: "right"}}>85%</span>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className={load? `${classes.main} ${classes.width4}`:classes.initialBar}>
                        <i className="fab fa-node" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>Node & Express</span>
                        <span style={{float: "right"}}>70%</span>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className={load? `${classes.main} ${classes.width4}`:classes.initialBar}>
                        <i className="fas fa-database" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>Mongodb</span>
                        <span style={{float: "right"}}>70%</span>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className={load? `${classes.main} ${classes.width5}`:classes.initialBar}>
                        <i className="fab fa-google" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>Firebase</span>
                        <span style={{float: "right"}}>60%</span>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className={load? `${classes.main} ${classes.width6}`:classes.initialBar}>
                        <i className="fab fa-jira" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>Scrum</span>
                        <span style={{float: "right"}}>50%</span>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={load? `${classes.main} ${classes.width7}`:classes.initialBar}>
                        <i className="fab fa-aws" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>AWS</span>
                        <span style={{float: "right"}}>30%</span>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className={load? `${classes.main} ${classes.width7}`:classes.initialBar}>
                        <i className="fab fa-docker" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>Docker</span>
                        <span style={{float: "right"}}>30%</span>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className={load? `${classes.main} ${classes.width7}`:classes.initialBar}>
                        <i className="fab fa-jenkins" aria-hidden="true" style={{
                            color: theme.palette.primary.main,
                            fontSize: "25px"}}/>
                        <span className={classes.span}>CI/CD</span>
                        <span style={{float: "right"}}>30%</span>
                    </div>
                </Grid>
            </Grid>
        </>
    )}
