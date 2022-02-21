import { Box, Button, Container, Grid, Hidden, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import image from "../images/Contactme.jpeg";
import { RenderSectionHeading } from './Common';
import { RenderInputText } from "./Common";
import ScrollAnimation from "react-animate-on-scroll";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import emailjs from "emailjs-com";

const useStyle = makeStyles((theme) => ({
    resimg: {
        width: "100%",
        height: "auto",
    },
    section: {
        backgroundColor: '#1e464a',
        padding: theme.spacing(10, 0, 8, 0),
    },
    submitBtn: {
        backgroundColor: "#0097a7",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#143438",
        },
    },
}));

export default function Contact() {
    const classes = useStyle();
    const [emailsent, setEmailsent] = useState(false);
    const [state, setState] = useState({
        data: {
            fullname: "",
            subject: "",
            email: "",
            message: "",
        },
    });
    const handleOnChange = ({ target }) => {
        const { data } = state;
        data[target.name] = target.value;
        setState({ data });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_h0w45ya', 'muttarab_5pfkquu', e.target, 'user_zsnOcjg9erJM4x2XFpe28')
            .then((result) => {
                console.log(result.text);
                setEmailsent(true);

            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <Box className={classes.section} id='Contact'>
            <ScrollAnimation animateIn='fadeIn'>
                <Container maxWidth='xl'>
                    <Grid container spacing={1}>
                        <Grid item sm={5}>
                            <Box component={Hidden} xsDown>
                                <img
                                    src={image}
                                    alt='about us'
                                    className={classes.resimg}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            {RenderSectionHeading({
                                smallText: "Contact Me",
                                heading: "Let’s talk about your project.",
                                description:
                                    `I am available for full time, part time and freelance work. I would love to discuss your ideas and look forward to bring them to life!`,
                            })}
                            <br />
                            <form onSubmit={handleSubmit}>
                                <Grid
                                    container
                                    direction='row'
                                    justify='center'
                                    alignItems='center'>
                                    <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                                        {RenderInputText({
                                            label: "Full Name",
                                            type: 'text',
                                            name: "fullname",
                                            state: state,
                                            onChange: handleOnChange,
                                        })}
                                    </Grid>
                                    <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                                        {RenderInputText({
                                            label: "Email",
                                            type: 'email',
                                            name: "email",
                                            state: state,
                                            onChange: handleOnChange,
                                        })}
                                    </Grid>
                                    <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                                        {RenderInputText({
                                            type: 'text',
                                            label: "Subject",
                                            name: "subject",
                                            state: state,
                                            onChange: handleOnChange,
                                        })}
                                    </Grid>
                                    <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                                        {RenderInputText({
                                            type: 'text',
                                            label: "Write your message here...",
                                            name: "message",
                                            state: state,
                                            onChange: handleOnChange,
                                            multiline: true,
                                            rows: 5,
                                        })}
                                    </Grid>
                                    <Grid item xs={12} sm={8} style={{ marginBottom: "16px" }}>
                                        <Button
                                            variant='outlined'
                                            type='submit'
                                            fullWidth={true}
                                            className={classes.submitBtn}>
                                            Send Message
                                        </Button>
                                    </Grid>
                                  
                                </Grid>
                                {
                                        emailsent ?
                                            <Alert severity="success">
                                                <AlertTitle>Email Sent!</AlertTitle>
                                                Thank you, I'll get back to you ASAP.
                                            </Alert>
                                            : null
                                    }
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </ScrollAnimation>
        </Box>
    );
}