import React, { useState } from "react";
import { Box, makeStyles, Typography } from '@material-ui/core';
import { Decorator } from './Common'
import Typed from 'react-typed'
import Image from '../images/Banner.jpg'
import Drawer from './Drawer'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import Navbar from './Navbar'
const useStyle = makeStyles((theme) => ({
    headerwrapper: {
        width: "100%",
        minHeight: "100vh",
        height: "auto",
        background: `linear-gradient(to bottom right,#04303140, #00606473),url(${Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    headercontainer: {
        width: "85%",
        minHeight: "90vh",
        height: "auto",
        padding: "20px",
        color: '#fff',
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        fontFamily: "roboto",
    },
    headertitle: {
        fontSize: "3rem",
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down("xs")]: {
            fontSize: "2rem",
        },
    },
    headerdesc: {
        fontSize: "2rem",
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.5rem",
            margin: theme.spacing(2, 0),
        },
    },
}));

export default function Header() {
    const classes = useStyle();
    const [initialState, setInitialState] = useState(false);
    const handleDrawerToogler = () => {
        setInitialState(!initialState);
    };
    const navlinks = [
        { label: "About Me", Id: "About" },
        { label: "My Portfolio", Id: "Portfolio" },
        { label: "Contact Me", Id: "Contact" },
    ];

    return (
        <Box className={classes.headerwrapper} id='Headder'>
            <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
            <Drawer
                initialState={initialState}
                navlinks={navlinks}
                handleDrawerToogler={handleDrawerToogler}
            />
            <Box className={classes.headercontainer}>
                <Typography variant="h3" component="h4" className={classes.headertitle}>
                    Hi, I'm a <span style={{ paddingRight: "5px" }}></span>
                    <Typed
                        strings={["React Js Developer,", "Node Js Developer,","Nest Js Developer,"]}
                        typeSpeed={30}
                        backSpeed={50}
                        loop
                    />
                </Typography>
                <Typography variant="h3" component="h4" className={classes.headerdesc}>I Create Websites And Applications, <br /> Based On Your Needs!</Typography>
                {Decorator({ label: "About Me", withIcon: true, Icon: <ArrowDownwardRoundedIcon /> })}
            </Box>
        </Box>
    )
}