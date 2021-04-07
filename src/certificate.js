import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Avatar from "@material-ui/core/Avatar";
import udemy from './assets/udemy.svg';
import Button from "@material-ui/core/Button";
import {useMediaQuery, useTheme} from "@material-ui/core";


export default function Certificate() {
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
                width: "130px",
                height: "2px",
                background: "#0fb78c"
            },
            udemy: {
                marginTop: "20px"
            },
            linkTag: {
                color: "#ffffff",
                textDecoration: "none"
            },
        },
    }))
    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));
    const matchesMd = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Typography variant='h2' className={classes.title}>Certification</Typography>
            <Divider/>
            <Grid container style={{marginTop: matchesSm ? "70px" : "50px"}}>
                <Grid item container justify='space-around'>
                    <Grid item sm={8} md={4}>
                        <Card variant="outlined"
                              style={{boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)"}}>
                            <CardContent style={{display: "flex"}}>
                                <Avatar variant="square" src={udemy}/>
                                <div>
                                    <Typography variant='h3'>
                                        Modern React with Redux
                                    </Typography>
                                    <Typography variant='body2' style={
                                        {margin: "10px 0"}}>
                                        Udemy
                                    </Typography>
                                    <Typography variant='h4'>
                                        <Button variant="contained" color="primary">
                                            <a href='https://www.udemy.com/certificate/UC-85167f88-dadf-4bec-a055-852750f6bd5d/'
                                               style={{color: "#ffffff", textDecoration: "none"}}
                                               target='_blank'> See Credential</a>
                                        </Button>
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sm={8} md={4} style={{marginTop: matchesMd ? "30px" : 0}}>
                        <Card variant="outlined" style={{boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)"}}>
                            <CardContent style={{display: "flex"}}>
                                <Avatar variant="square" src={udemy}/>
                                <div>
                                    <Typography variant='h3'>
                                        Agile Fundamentals
                                    </Typography>
                                    <Typography variant='body2' style={{margin: "10px 0"}}>
                                        Udemy
                                    </Typography>
                                    <Typography variant='h4'>
                                        <Button variant="contained" color="primary">
                                            <a href='https://www.udemy.com/certificate/UC-689ec869-e5ea-4b07-b73e-a813d32623df/'
                                               style={{color: "#ffffff", textDecoration: "none"}}
                                               target='_blank'> See Credential</a>
                                        </Button>
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>


                <Grid item container justify='center' style={{marginTop: "30px"}}>
                    <Grid item sm={8} md={4}>
                        <Card variant="outlined"
                              style={{boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)"}}>
                            <CardContent style={{display: "flex"}}>
                                <Avatar variant="square" src={udemy}/>
                                <div>
                                    <Typography variant='h3'>
                                        Learn DevOps:CI/CD
                                    </Typography>
                                    <Typography variant='body2' style={{margin: "10px 0"}}>
                                        Udemy
                                    </Typography>
                                    <Typography variant='h4'>
                                        <Button variant="contained" color="primary">
                                            <a href='https://www.udemy.com/certificate/UC-ba42b6d2-ff36-42d3-96c7-9bfae3cd5e4d/'
                                            style={{color: "#ffffff", textDecoration: "none"}}
                                            target='_blank'> See Credential</a></Button>
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}