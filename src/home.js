import React from 'react';
import Photo from "./assets/photo.jpeg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import {useTheme} from "@material-ui/core";


export default function Home() {

    const useStyles = makeStyles(theme => ({
        intro: {
            margin: "15px 0"
        },
        img: {
            marginTop: "20px",
            [theme.breakpoints.up('sm')]: {
                marginTop: "100px",
            },
        },
        button: {
             borderRadius: "40px"
        },
        aTag: {
            textDecoration: "none",
            color: "#4c6ef5",

        }
    }))
    const classes = useStyles();
    const theme=useTheme();
    return (
        <>x
            <div className={classes.img}>
                <img src={Photo} style={{width: "160px", height: "250px"}}/>
            </div>
            <Typography variant='h1'>MENGYI ZENG</Typography>
            <Typography className={classes.intro} variant='body1'>
                A future frontend developer with passion,fast learning ability and strong determination
            </Typography>
            <Button size='large' variant='outlined'
                    className={classes.button} color={theme.palette.primary.main}>
                <a className={classes.aTag} href='https://www.linkedin.com/in/zeng-mengyi-9a822a14b/' target="_blank">
                    TO my Linkedin <i className='fab fa-linkedin' style={{
                        marginLight: "10px", fontSize: "1.4rem", verticalAlign: "-3px", color: "#4c6ef5"}}/>
                </a>
            </Button>
        </>
    )
}