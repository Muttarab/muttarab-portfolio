import { Box, Button, Container, Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { RenderSectionHeading } from './Common';
import ScrollAnimation from "react-animate-on-scroll";
import PF2 from "../images/PF6.jpeg";
import PF4 from "../images/PF2.jpeg";
import PF3 from "../images/PF4.jpeg";
import PF1 from "../images/PF1.jpeg";
import PF5 from "../images/PF3.jpeg";
import PF6 from "../images/PF5.jpeg";

const useStyle = makeStyles((theme) => ({
    sectionDark: {
        backgroundColor: '#1e464a',
        padding: theme.spacing(10, 0, 8, 0),
    },
    imageContainer: {
        position: "relative",
        "&:hover $imageOverlay": {
            opacity: 1,
        },
    },
    imageOverlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        backgroundColor: '#0097a7',
        color: '#fff',
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0,
        transition: "0.7s",
    },
    overlayTitle: {
        fontSize: "2rem",
        marginBottom: "16px",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.2rem",
        },
    },
    resimg: {
        width: "100%",
        height: "auto",
    },
    navlink:{
        textDecoration:'none',
        color:'inherit'
    }
}));
export default function Portfolio() {
    const classes = useStyle();
    const portfolioData = [
        { url: PF1, title: "#My Portfolio Website", link: "https://muttarab-portfolio.herokuapp.com/" },
        { url: PF2, title: "#Portfolio 2", link: "" },
        { url: PF3, title: "#Portfolio 3", link: "" },
        { url: PF4, title: "#Portfolio 4", link: "" },
        { url: PF5, title: "#Portfolio 5", link: "" },
        { url: PF6, title: "#Portfolio 6", link: "" },
    ];
    return (
        <Box className={classes.sectionDark} id='Portfolio'>
            <ScrollAnimation animateIn='fadeIn'>
                <Grid
                    container
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                    }}>
                    <Grid item xs={12} sm={8}>
                        {RenderSectionHeading({
                            smallText: "Portfolio",
                            heading: "Let's See My Work",
                            alignCenter: true,
                        })}
                    </Grid>
                </Grid>
                <Container maxWidth='xl'>
                    <Grid container spacing={2}>
                        {portfolioData.map((item, i) => (
                            <Grid item xs={6} sm={6} lg={4} key={i}>
                                <Box className={classes.imageContainer}>
                                    <img
                                        src={item.url}
                                        alt={item.title}
                                        className={classes.resimg}
                                    />
                                    <Box className={classes.imageOverlay}>
                                        <Typography className={classes.overlayTitle}>
                                            {item.title}
                                        </Typography>
                                        <Button variant='contained'><a  className={classes.navlink} target='_blank' rel="noreferrer" href={item.link}>Visit</a></Button>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </ScrollAnimation>
        </Box>
    );
}