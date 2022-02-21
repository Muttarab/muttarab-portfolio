import React from "react";
import { Box, Drawer,List, makeStyles, Button } from "@material-ui/core";
import { Link } from "react-scroll";
const useStyle = makeStyles(() => ({
    drawer: {
        width: "250px",
        height: "100vh",
    },
    drawerContainer: {
        width: "250px",
        height: "100vh",
        backgroundColor: "#143438",
    },
    listItem: {
        color: "#fff",
    },
    navlinks: {
        color: "#fff",
    },
}));

export default function DrawerComponent({
    initialState,
    navlinks,
    handleDrawerToogler,
}) {
    const classes = useStyle();
    return (
        <Drawer
            anchor='left'
            open={initialState}
            onClose={handleDrawerToogler}
            className={classes.drawer}>
            <Box className={classes.drawerContainer}>
                <List style={{ paddingTop: "30px" }}>
                    {navlinks.map((item, i) => (
                        <List className={classes.listItem}>
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
                        </List>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}