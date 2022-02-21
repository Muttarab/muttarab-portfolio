import React from "react";
import { makeStyles, Typography, AppBar, Toolbar, Button, Box, Hidden, IconButton } from '@material-ui/core';
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import { Link } from "react-scroll";
const useStyle = makeStyles(() => ({
    navbar: {
        backgroundColor: '#143438',
        color: '#fff'
    },
    toolbar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
    },
    navlinks: {
        color: '#fff'
    }
}));

export default function Navbar({ navlinks, handleDrawerToogler }) {
    const classes = useStyle();
    return (
        <AppBar position="fixed" className={classes.navbar}>
            <Toolbar className={classes.toolbar} style={{ backgroundColor: "#1e464a" }}>
                <Typography variant="h5" component="h6" >
                    {"<MyPortfolio/>"}
                </Typography>
                <Box component={Hidden} xsDown>
                    <Box>
                        {navlinks.map((item, i) => (
                            <Button
                                key={i}
                                className={classes.navlinks}
                                to={`${item.Id}`}
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                component={Link}
                                color='inherit'>
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Box>
                <Box component={Hidden} smUp>
                    <IconButton onClick={handleDrawerToogler} color="inherit">
                        <MenuOpenRoundedIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}