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
        show: {
            position: "absolute",
            left: 0,
            top: 0,
            transition: "all 1s",
            background: 'gradient(linear, left top, right top, color-stop(31%, #0fb78c), color-stop(69%, #0fb78c))',
            opacity: ".8",
            transform: 'scale(1)',
            width: "100%",
            height: "100%",
            borderRadius: "10px",
        },
        hide: {
            position: "absolute",
            left: 0,
            top: 0,
            transition: "all .8s",
            background: 'gradient(linear, left top, right top, color-stop(31%, #0fb78c), color-stop(69%, #0fb78c))',
            opacity: ".8",
            transform: 'scale(0)',
            width: "100%",
            height: "100%",
            borderRadius: "10px",
        },
        span: {
            color: "white",
            display: "inline-block",
            height: '50px',
            borderRadius: "50%",
            width: "50px",
            border: '1px solid #ffffff',
            textAlign: "center",
            cursor: "pointer",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)"
        },
        aTag: {
            textDecoration: "none",
            color: "#000000",
            fontSize: ".6rem"
        },
        cardContent: {
            textAlign: "center",
            position:"relative"
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
                                <div >
                                        <img src={project1} className={classes.container} name='one'
                                             onMouseEnter={(e) => handleMouseEnter(e)}
                                             onMouseLeave={(e) => handleMouseLeave(e)}/>
                                    <div className={show.opacity && show.target === 'one' ? classes.show : classes.hide}>
                                     <span className={classes.span}
                                           onClick={() => window.open("http://the-project-2d6a9.web.app")}>
                                    <i className='fas fa-search' style={{
                                        fontSize: "20px",
                                        color: "#fffffff",
                                        lineHeight: "50px"
                                    }}/>
                                </span>
                                    </div>
                                    <Typography style={{marginTop: "20px"}} variant='h4'>SOCIAL EVENTS<br/>
                                        (LEARNED FROM UDEMY)
                                    </Typography>
                                </div>
                                <Typography style={{marginTop: "10px"}}>
                                    <span><strong>Skills used:</strong> Semantic UI,React,<br/>Redux,Hook,firebase,firestore,etc</span>
                                </Typography>
                                <Typography>
                                    <strong>Git:</strong>
                                    <a className={classes.aTag}
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
                                <div >
                                    <img src={project2} className={classes.container}
                                         name='two'
                                         onMouseEnter={(e) => handleMouseEnter(e)}
                                         onMouseLeave={(e) => handleMouseLeave(e)}/>
                                    <div
                                        className={show.opacity && show.target === 'two' ? classes.show : classes.hide}>
                                <span className={classes.span}
                                      onClick={() => window.open("http://3.139.245.70")}><i className='fas fa-search' style={{
                                    fontSize: "20px",
                                    color: "#fffffff", lineHeight: "50px"}}/>
                                </span>
                                    </div>
                                    <Typography style={{marginTop: "20px"}} variant='h4'>
                                        ONLINE SHOPPING<br/>
                                        (LEARNED FROM UDEMY)
                                    </Typography>
                                </div>
                                <Typography style={{marginTop: "10px"}}>
                                    <span><strong>Skills used:</strong>Bootstrap,React,Hook,<br/>Redux,Mongodb,Express,Node,etc</span></Typography>
                                <Typography>
                                    <strong>Git: </strong><a className={classes.aTag} href='https://github.com/zengmy13/shopping'>https://github.com/zengmy13/shopping</a>
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
                        <strong>Git: </strong><a className={classes.aTag} href='https://github.com/zengmy13/shopping'>https://github.com/zengmy13/shopping</a>
                    </Typography>
                </Grid>

            </Grid>
        </>
    )
}