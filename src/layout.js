import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Tabs} from "@material-ui/core";
import Tab from '@material-ui/core/Tab';
import {Grid} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import Background from './assets/1.jpg'
import Home from "./home";
import Contact from "./contact";
import About from "./about";
import Skill from "./skill";
import Work from "./education";
import Certificate from "./certificate";
import Project from "./project";
import AppBar from "@material-ui/core/AppBar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from "@material-ui/core";


function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function Layout() {
    const useStyles = makeStyles(theme => ({
            main: {
                minHeight: '600px',
                minWidth: "350px",
                width: "80%",
                margin: 'auto',
                position: "absolute",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                display: 'flex',
                flexDirection: "column",
                [theme.breakpoints.down('sm')]: {
                    width: "100vw",
                    height: "100vh"
                },
                [theme.breakpoints.up('md')]: {
                    flexDirection: "row"
                },
                height: "77vh",
                [theme.breakpoints.up('lg')]: {
                    height: "60vh",
                    width: "70%"
                },
                boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)",
            },
            tabs: {
                borderRight: `1px solid ${theme.palette.divider}`,
                background: "#ffffff"
            },
            home: {
                backgroundImage: `url(${Background})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                textAlign: "center",
            },
            panel: {
                width: "100%",
                height: "100%",
                position: "relative",
                background: "#ffffff",
            },

        })
    )
    const classes = useStyles()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    const tabs = (
        <Tabs
            orientation={matches ? "vertical" : "horizontal"}
            variant={matches ? "undefined" : "scrollable"}
            value={value}
            onChange={handleChange}
            className={classes.tabs}>
            <Tab icon={<HomeIcon color='primary'/>} label='Home'></Tab>
            <Tab icon={<PersonIcon color='primary'/>} label='About'/>
            <Tab icon={<ImportantDevicesIcon color='primary'/>} label='Skill'/>
            <Tab icon={<CastForEducationIcon color='primary'/>} label='Education'/>
            <Tab icon={<CardMembershipIcon color='primary'/>} label='Certificate'/>
            <Tab icon={<GroupWorkIcon color='primary'/>} label='Project'/>
            <Tab icon={<ContactMailIcon color='primary'/>} label='Contact'/>
        </Tabs>
    )
    return (
        <Grid container>
            <Grid item className={classes.main}>
                {matches ? tabs : <AppBar position="static" color="default">{tabs}</AppBar>}
                <TabPanel value={value} index={0} className={classes.home}>
                    <Home/>
                </TabPanel>
                <TabPanel value={value} index={1} className={classes.panel}>
                    <About/>
                </TabPanel>
                <TabPanel value={value} index={2} className={classes.panel}>
                    <Skill/>
                </TabPanel>
                <TabPanel value={value} index={3} className={classes.panel}>
                    <Work/>
                </TabPanel>
                <TabPanel value={value} index={4} className={classes.panel}>
                    <Certificate/>
                </TabPanel>
                <TabPanel value={value} index={5} className={classes.panel}>
                    <Project/>
                </TabPanel>
                <TabPanel value={value} index={6} className={classes.panel}>
                    <Contact/>
                </TabPanel>
            </Grid>
        </Grid>
    );
}