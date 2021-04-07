import React, {useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import {useMediaQuery, useTheme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';
import Card from '@material-ui/core/Card'
import CardContent from "@material-ui/core/CardContent";


export default function Project() {
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
                width: "80px",
                height: "2px",
                background: "#0fb78c"
            },
        },
        container: {
            display: "inline-block",
            height: "150px",
            width: "230px",
            borderRadius: "10px",
        },
        aTag: {
            textDecoration: "none",
            color: "#000000",
            fontSize: ".6rem"
        },
        cardContent: {
            textAlign: "center",
            position:"relative",
            cursor:"pointer"
        },
    }))
    const classes = useStyles();
    const [show, setShow] = useState({
        target: null,
        opacity: false
    })
    const handleMouseEnter = (e) => {
        setShow({
            opacity: true,
            target: e.target.name
        })
    }
    const handleMouseLeave = (e) => {
        setShow({
            opacity: false,
            target: null
        })
    }
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <>
            <Typography variant='h2' className={classes.title}>Project</Typography>
            <Divider/>
            <Grid container justify={ "space-around"}
                  spacing={2}
                  style={{marginTop: matchesMd ? "40px" : "30px"}} >
                <Grid item xs={10} md={6} lg={5}>
                    <Card >
                        <CardContent>
                            <div className={classes.cardContent}>
                                <div  onClick={() => window.open("http://the-project-2d6a9.firebaseapp.com")}>
                                        <img src={project1} className={classes.container}/>
                                    <Typography style={{marginTop: "20px"}} variant='h4'>SOCIAL EVENTS<br/>
                                        (LEARNED FROM UDEMY)
                                    </Typography>
                                </div>
                                <Typography style={{marginTop: "10px"}}>
                                    <span><strong>Skills used:</strong> Semantic UI,React,<br/>Redux,Hook,firebase,firestore,etc</span>
                                </Typography>
                                <Typography>
                                    <strong>Git:</strong>
                                    <a className={classes.aTag} target='_blank'
                                       href='https://github.com/zengmy13/SocialEvent'>https://github.com/zengmy13/SocialEvent</a>
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={10} md={6} style={{marginTop: matchesMd ? '60px' : 0}}>
                    <Card>
                        <CardContent>
                            <div className={classes.cardContent}>
                                <div onClick={() => window.open("http://3.139.245.70:3000")}>
                                    <img src={project2} className={classes.container}/>
                                    <Typography style={{marginTop: "20px"}} variant='h4'>
                                        ONLINE SHOPPING<br/>
                                        (LEARNED FROM UDEMY)
                                    </Typography>
                                </div>
                                <Typography style={{marginTop: "10px"}}>
                                    <span><strong>Skills used:</strong>Bootstrap,React,Hook,<br/>Redux,Mongodb,Express,Node,etc</span></Typography>
                                <Typography>
                                    <strong>Git: </strong><a className={classes.aTag} target='_blank' href='https://github.com/zengmy13/shopping'>https://github.com/zengmy13/shopping</a>
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item style={{marginTop:"20px"}}>
                    <Typography><strong>PLUS:</strong>
                        This self-introduction website is done by myself,mainly using React and Material UI
                    </Typography>
                    <Typography>
                        <strong>Git: </strong><a className={classes.aTag} target='_blank' href='https://github.com/zengmy13/self-introduction'>https://github.com/zengmy13/self-introduction</a>
                    </Typography>
                </Grid>

            </Grid>
        </>
    )
}