import React from "react";
import { Box, IconButton, Typography, makeStyles } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Link } from "react-scroll";

const useStyle = makeStyles((theme) => ({
    footerContainer: {
        backgroundColor: "#143438",
        color: "#fff",
        padding: theme.spacing(2),
        position: "relative",
    },
    iconButton: {
        position: "absolute",
        right: 5,
        top: -25,
        backgroundColor: "#0097a7",
        color: '#fff',
    },
}));

export default function Footer() {
    const classes = useStyle();
    var date = new Date();
    return (
        <Box className={classes.footerContainer} id='Footer'>
            <IconButton
                className={classes.iconButton}
                to='Headder'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
                component={Link}>
                <ArrowUpwardIcon />
            </IconButton>
            <Typography variant='body1' component='h4' align='center' color='inherit'>
                Developed and designed by <b>Muttarab Ahmad</b> , All Rights Reserved © {date.getFullYear()}
            </Typography>
        </Box>
    );
}
