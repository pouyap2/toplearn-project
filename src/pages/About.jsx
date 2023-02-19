import {useEffect, useState} from "react";
import {Box, Typography, Card, CardContent, Divider, Chip, Avatar, Grid} from "@mui/material";
import {grey} from "@mui/material/colors"

import avatar from "../assets/avatar.jpg";
import {CodeRounded, SelfImprovementRounded} from "@mui/icons-material";
import DevInfo from "./components/DevInfo";
import Skill from "./components/Skill";
import {devSkills} from "../constants/Skills";
import {RandomReveal} from "react-random-reveal";
import {AlphabetPersian} from "../constants/alphabetPersian";

const About = () => {

    const [javascript, setJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [nodeJs, setNodeJs] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [git, setGit] = useState(0);

    const [start,setStart]=useState(false);

    useEffect(() => {
        const timer = setInterval(() => {

            setHtml(oldProgress => {
                return Math.min(oldProgress + 1, 95);
            });

            setCss(oldProgress => {
                return Math.min(oldProgress + 1, 80);
            });

            setJavascript(oldProgress => {
                return Math.min(oldProgress + 1, 82);
            });

            setNodeJs(oldProgress => {
                return Math.min(oldProgress + 1, 40);
            });

            setReactJs(oldProgress => {
                return Math.min(oldProgress + 1, 60);
            });

            setGit(oldProgress => {
                return Math.min(oldProgress + 1, 60);
            });

        }, 15);

        setStart(true);

        return () => {
            clearInterval(timer);
            setStart(false)
        }
    }, []);

    const {htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill} = devSkills;

    return (
        <Card sx={{
            height: "100vh",
            backgroundColor: "whitesmoke",
            overflowY: "auto",
            overflowX: "hidden",
        }}
        >
            <CardContent>
                <Grid container sx={{mx: 3}}>
                    <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Divider textAlign={"right"} sx={{"&::before, &::after": {borderColor: grey[300]}}}>
                            <Chip icon={<CodeRounded/>} color={"primary"} label={
                                <Typography variant={"body1"} color={"black"}
                                            sx={{textAlign: "center", fontWeight: 900}}>
                                    {start && (<RandomReveal isPlaying={true} characters={"توسعه دهنده فول استک"} duration={5} characterSet={AlphabetPersian} />)}
                                </Typography>
                            } sx={{p: 3}}/>
                        </Divider>
                        <DevInfo>نام و نام خانوادگی پویا پورداد </DevInfo>
                        <DevInfo>سن : 33</DevInfo>
                        <DevInfo>شهر : مشهد</DevInfo>
                        <DevInfo>شهر : مشهد</DevInfo>
                        <DevInfo> pouya.prd2@gmail.com : آدرس ایمیل </DevInfo>
                        <DevInfo>شماره موبایل : 09335554226</DevInfo>
                    </Grid>
                    <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                        <Avatar src={avatar} variant={"rounded"} sx={{
                            height: 250,
                            width: 250,
                            display: {xl: "block", lg: "block", md: "block", sm: "none", xs: "none", margin: "0 auto"}
                        }}>
                            P2
                        </Avatar>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{width: 1, mt: 1}}>
                        <Divider textAlign={"center"} sx={{"&::before, &::after": {borderColor: "primary.main"}}}>
                            <Chip icon={<SelfImprovementRounded/>} color={"secondary"} label={
                                <Typography variant={"body1"} color={"black"}
                                            sx={{textAlign: "center", fontWeight: 900}}>
                                    مهارت های من
                                </Typography>
                            } sx={{p: 3}}/>
                        </Divider>
                        <Skill name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color} value={html}/>
                        <Skill name={cssSkill.name} icon={cssSkill.icon} color={cssSkill.color} value={css}/>
                        <Skill name={jsSkill.name} icon={jsSkill.icon} color={jsSkill.color} value={javascript}/>
                        <Skill name={reactSkill.name} icon={reactSkill.icon} color={reactSkill.color} value={reactJs}/>
                        <Skill name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color} value={nodeJs}/>
                        <Skill name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color} value={git}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default About;