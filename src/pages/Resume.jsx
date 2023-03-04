import {useState,useEffect}  from "react";
import {Helmet} from "react-helmet-async"
import {Typography, Card, CardContent, Divider, Chip, Grid,Slide} from "@mui/material";
import {Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector} from "@mui/lab";
import {devEdu} from "../constants/details";
import {grey} from "@mui/material/colors";
import {SettingsEthernetRounded, HomeRepairServiceRounded, SchoolRounded} from "@mui/icons-material";
import {useTheme} from "@mui/material";


const Resume = ({helmet}) => {
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true)

        return ()=>{
            setLoading(false)
        }
    },[]);

    const theme=useTheme();

    return (
        <>
            <Helmet>
                <title>{helmet}</title>
            </Helmet>
            <Card sx={{
                height: "100vh",
                backgroundColor: theme.palette.mode === "light" ? "whitesmoke" : "dark" ,
                overflowY: "auto",
                overflowX: "hidden",
            }}
            >
                <CardContent>
                    <Slide direction={"down"} in={loading} style={{
                        transitionDelay:loading ? "500ms" : "0ms",
                    }}>
                        <Divider textAlign={"center"} sx={{mt: 2, "&::before, &::after": {borderColor: grey[300]}}}>
                            <Chip icon={<SettingsEthernetRounded/>} color={"primary"} label={
                                <Typography variant={"body1"} color={"black"} sx={{textAlign: "center", fontWeight: 900}}>
                                    رزومه من
                                </Typography>
                            } sx={{p: 3}}/>
                        </Divider>
                    </Slide>

                    <Grid container sx={{mt: 4}}>

                        <Grid xs={6}>
                            <Slide direction={"right"} in={loading} style={{
                                transitionDelay:loading ? "1000ms" : "0ms",
                            }}>
                                <Divider textAlign="center" sx={{"&::before, &::after": {borderColor: "warning.main",},}}>
                                    <Chip icon={<HomeRepairServiceRounded/>} color="warning" label={
                                            <Typography variant="body1" color="black" sx={{textAlign: "center"}}>
                                                تجربیات
                                            </Typography>
                                        } sx={{p: 3}}/>
                                </Divider>
                            </Slide>


                            <Timeline position={"alternate"} sx={{direction:"ltr"}}>
                                {devEdu.map((item, index) => (
                                    <Slide direction={"up"} in={loading} style={{
                                        transitionDelay:loading ? `${1500+(index*500)}ms` : "0ms",
                                    }}>
                                        <TimelineItem key={index}>
                                            <TimelineSeparator>
                                                <TimelineDot color={"warning"} variant={"outlined"}>
                                                    <HomeRepairServiceRounded color={"warning"}/>
                                                </TimelineDot>
                                                {index < devEdu.length-1 ? <TimelineConnector/> : ""}
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant={"caption"} color={theme.palette.mode === "light" ? "black" : "whitesmoke"}>
                                                    {item.year}
                                                </Typography>
                                                <Typography variant={"body1"} color={theme.palette.mode === "light" ? "black" : "whitesmoke"}>
                                                    {item.cert}
                                                </Typography>
                                                <Typography variant={"body2"} color={theme.palette.mode === "light" ? "black" : "whitesmoke"}>
                                                    {item.major}
                                                </Typography>
                                                <Typography variant={"body2"} color={theme.palette.mode === "light" ? "black" : "whitesmoke"}>
                                                    {item.place}
                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Slide>
                                ))}
                            </Timeline>


                        </Grid>


                        <Grid xs={6}>

                            <Slide direction={"right"} in={loading} style={{
                                transitionDelay:loading ? "1000ms" : "0ms"
                            }}>
                                <Divider textAlign="center" sx={{"&::before, &::after": {borderColor: "info.main",},}}>
                                    <Chip icon={<SchoolRounded/>} color="info" label={
                                        <Typography variant="body1" color="black" sx={{textAlign: "center"}}>
                                            تحصیلات
                                        </Typography>
                                    } sx={{p: 3}}/>
                                </Divider>
                            </Slide>

                            <Timeline position={"alternate"} sx={{direction:"ltr"}}>
                                {devEdu.map((item, index) => (
                                    <Slide direction={"up"} in={loading} style={{
                                        transitionDelay:loading ? `${500+(index*300)}ms` : "0ms"
                                    }}>
                                        <TimelineItem key={index}>
                                            <TimelineSeparator>
                                                <TimelineDot color={"info"} variant={"outlined"}>
                                                    <SchoolRounded color={"info"}/>
                                                </TimelineDot>
                                                {index < devEdu.length-1 ? <TimelineConnector/> : ""}
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant={"caption"} color={theme.palette.mode === "light" ? "black" : "whitesmoke"}>
                                                    {item.year}
                                                </Typography>
                                                <Typography variant={"body1"} color={theme.palette.mode === "light" ? "black" : "whitesmoke"}>
                                                    {item.cert}
                                                </Typography>
                                                <Typography variant={"body2"} color={theme.palette.mode === "light" ? "black" : "whitesmoke"}>
                                                    {item.major}
                                                </Typography>
                                                <Typography variant={"body2"} color={theme.palette.mode === "light" ? "black" : "whitesmoke"}>
                                                    {item.place}
                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Slide>
                                ))}
                            </Timeline>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}

export default Resume;