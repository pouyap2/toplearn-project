import {useEffect, useState} from "react";
import { Card, CardContent, Grid} from "@mui/material";
import avatar from "../assets/avatar.jpg";
import {CodeRounded, SelfImprovementRounded} from "@mui/icons-material";
import {DevInfo,Skills,DevWorkCount} from "../components/pages";
import {RandomReveal} from "react-random-reveal";
import {AlphabetPersian} from "../constants/alphabetPersian";
import {Helmet} from "react-helmet-async";
import {useTheme} from "@mui/material";
import {CustomAvatar,CustomDivider} from "../components/common";
import SocialMediaIcons from "../components/SocialMediaIcons";




const About = ({helmet}) => {

    const [start, setStart] = useState(false);

    const theme=useTheme();

    useEffect(()=>{
        setStart(true);

        return () => {

            setStart(false)
        }
    })

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
                            <CustomDivider
                                bColor={"primary.main"}
                                cColor={"primary"}
                                icon={<CodeRounded />}
                                align={"right"}
                                text={start && (<RandomReveal isPlaying={true} characters={"توسعه دهنده فول استک"} duration={5} characterSet={AlphabetPersian}/>)}
                            />
                            <Grid container>
                                <Grid xs={12} sm={4} md={3} lg={3}
                                      sx={{my:3,textAlign:"center"}}>
                                    <DevWorkCount />
                                    <SocialMediaIcons />
                                </Grid>

                                <Grid  xs={12} sm={8} md={9} lg={9} >

                                    <DevInfo/>

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                            <CustomAvatar avatar={avatar} size={250} fallback={"P2"} />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid sx={{width: 1, mt: 1}}>
                            <CustomDivider
                                bColor={"primary.main"}
                                cColor={"secondary"}
                                icon={<SelfImprovementRounded />}
                                align={"center"}
                                text={"  مهارت های من"}
                            />

                            <Skills />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>

    );
};

export default About;