import {useEffect, useState} from "react";
import {Box, Typography, Card, CardContent, Divider, Chip, Avatar, Grid, Tooltip} from "@mui/material";
import {grey} from "@mui/material/colors"
import CountUp from "react-countup";
import avatar from "../assets/avatar.jpg";
import {CodeRounded, SelfImprovementRounded} from "@mui/icons-material";
import DevInfo from "./components/DevInfo";
import Skill from "./components/Skill";
import {devSkills} from "../constants/Skills";
import {RandomReveal} from "react-random-reveal";
import {AlphabetPersian} from "../constants/alphabetPersian";
import {Helmet} from "react-helmet-async";
import {devWorkInfo} from "../constants/details";
import {useTheme} from "@mui/material";

const About = ({helmet}) => {

    const [javascript, setJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [nodeJs, setNodeJs] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [git, setGit] = useState(0);
    const [php, setPhp] = useState(0);
    const [Laravel, setLaravel] = useState(0);

    const [start, setStart] = useState(false);

    const theme=useTheme();

    useEffect(() => {
        const timer = setInterval(() => {

            setHtml(oldProgress => {
                return Math.min(oldProgress + 1, 95);
            });

            setCss(oldProgress => {
                return Math.min(oldProgress + 1, 90);
            });

            setJavascript(oldProgress => {
                return Math.min(oldProgress + 1, 85);
            });

            setNodeJs(oldProgress => {
                return Math.min(oldProgress + 1, 40);
            });

            setReactJs(oldProgress => {
                return Math.min(oldProgress + 1, 80);
            });

            setGit(oldProgress => {
                return Math.min(oldProgress + 1, 60);
            });

            setPhp(oldProgress => {
                return Math.min(oldProgress + 1, 95);
            });

            setLaravel(oldProgress => {
                return Math.min(oldProgress + 1, 80);
            });

        }, 15);

        setStart(true);

        return () => {
            clearInterval(timer);
            setStart(false)
        }
    }, []);

    const {htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill, phpSkill, laravelSkill} = devSkills;

    return (
        <>
            <Helmet>
                <title>{helmet}</title>
            </Helmet>
            <Card sx={{
                height: "100vh",
                backgroundColor: theme.palette.mode === "light" ? "whitesmoke" : "dark",
                overflowY: "auto",
                overflowX: "hidden",
            }}
            >
                <CardContent>
                    <Grid container >
                        <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Divider textAlign={"right"} sx={{"&::before, &::after": {borderColor: grey[300]}}}>
                                <Chip icon={<CodeRounded/>} color={"primary"} label={
                                    <Typography variant={"body1"} color={"black"}
                                                sx={{textAlign: "center", fontWeight: 900}}>
                                        {start && (<RandomReveal isPlaying={true} characters={"توسعه دهنده فول استک"}
                                                                 duration={5} characterSet={AlphabetPersian}/>)}
                                    </Typography>
                                } sx={{p: 3}}/>
                            </Divider>
                            <Grid container>
                                <Grid xs={12} sm={4} md={3} lg={3}
                                      sx={{my:3,textAlign:"center"}}>
                                    {
                                        devWorkInfo.map((item, index) => (
                                            <Box key={index} component={"div"} sx={{width: 1, mb: 1}}>
                                                <Tooltip title={item.tooltipTitle} placement={"top"} arrow>
                                                    <Chip icon={item.icon} label={
                                                        <Typography variant={"body1"} color={"whitesmoke"}>
                                                            <CountUp end={item.total} start={0} duration={5}>
                                                            </CountUp>
                                                        </Typography>} sx={{p:2,backgroundColor:item.color,width:1}}>
                                                    </Chip>
                                                </Tooltip>
                                            </Box>
                                        ))
                                    }
                                </Grid>

                                <Grid  xs={12} sm={8} md={9} lg={9} >
                                    <DevInfo color={theme.palette.mode === "light" ? "black" : "white"}>نام و نام خانوادگی پویا پورداد </DevInfo>
                                    <DevInfo>سن : 33</DevInfo>
                                    <DevInfo>شهر : مشهد</DevInfo>
                                    <DevInfo>شهر : مشهد</DevInfo>
                                    <DevInfo> pouya.prd2@gmail.com : آدرس ایمیل </DevInfo>
                                    <DevInfo>شماره موبایل : 09335554226</DevInfo>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                            <Avatar src={avatar} variant={"rounded"} sx={{
                                height: 250,
                                width: 250,
                                display: {
                                    xl: "block",
                                    lg: "block",
                                    md: "block",
                                    sm: "none",
                                    xs: "none",
                                    margin: "0 auto"
                                }
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
                            <Skill name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color} value={html} theme={theme} />
                            <Skill name={cssSkill.name} icon={cssSkill.icon} color={cssSkill.color} value={css} theme={theme} />
                            <Skill name={jsSkill.name} icon={jsSkill.icon} color={jsSkill.color} value={javascript} theme={theme} />
                            <Skill name={reactSkill.name} icon={reactSkill.icon} color={reactSkill.color} value={reactJs} theme={theme} />
                            <Skill name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color} value={nodeJs} theme={theme} />
                            <Skill name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color} value={git} theme={theme} />
                            <Skill name={phpSkill.name} icon={phpSkill.icon} color={phpSkill.color} value={php} theme={theme} />
                            <Skill name={laravelSkill.name} icon={laravelSkill.icon} color={laravelSkill.color} value={Laravel} theme={theme}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>

    );
};

export default About;