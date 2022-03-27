import React from "react";
import { makeStyles, Box, Grid, Container, Hidden } from '@material-ui/core';
import Image from '../images/Aboutus.jpg'
import { RenderSectionHeading } from "./Common";
import WebIcon from '@mui/icons-material/Web';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import SmsIcon from '@mui/icons-material/Sms';
import { CardMedia } from './Common';
import ScrollAnimation from "react-animate-on-scroll";

const useStyle = makeStyles((theme) => ({
    section: {
        backgroundColor: '#1e464a',
        padding: theme.spacing(10, 0, 8, 0),
    },
    resimg: {
        width: "100%",
        height: "auto",
    },
}));

export default function About() {
    const classes = useStyle();
    const cardMediaData = [
        {
          title: "Full Stack Web Developer",
          description:`Experienced in Web Development using React.Js, Redux, Node.Js, Nest Js, HTML, CSS, JavaScript, Material UI, Postgres SQL.`,
          icon: <WebIcon />,
        },
        {
          title: "Mobile Application Developer",
          description: "I have also some experience in Android Application development (Android SDK,Java and XML) using Android Studio as a Framework.",
          icon: <PermDeviceInformationIcon />,
        },
        {
          title: "Communication Skills",
          description: "Able to communicate effectively with a wide range of people, by showing interest and carefully listening to their needs",
          icon: <SmsIcon />,
        },
      ];
    return (
        <Box className={classes.section} id="About">
         <ScrollAnimation animateIn='fadeIn'>
            <Container>
                <Grid container spacing={1}>
                    <Grid item sm={5} >
                        <Box component={Hidden} xsDown>
                            <img src={Image} alt="about us" className={classes.resimg} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        {RenderSectionHeading({
                            smallText: "About Me",
                            heading: "Hi I'm Muttarab Ahmad",
                            description:
                                `Inquisitive Computer Scientist with diverse skills, including programming and development. I am goal
                                 oriented, self-motivated and committed to the successful outcome of the project. I am willing to
                                 work hard and have a great desire to learn.`,
                        })}
                        <br />
                        <Grid container>
                            {cardMediaData.map((item, i) => (
                                <Grid item xs={12} sm={6} key={i}>
                                    {CardMedia({
                                        label: item.title,
                                        Desc: item.description,
                                        Icon: item.icon,
                                    })}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            </ScrollAnimation>
        </Box>
    )
}


