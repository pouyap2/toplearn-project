import {useState,useEffect}  from "react";
import {Helmet} from "react-helmet-async"
import {Typography, Card, CardContent, Divider, Chip, Grid,Slide} from "@mui/material";
import {Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector} from "@mui/lab";
import {devEdu} from "../constants/details";
import {
    SettingsEthernetRounded,
    HomeRepairServiceRounded,
    SchoolRounded,
} from "@mui/icons-material";
import {useTheme} from "@mui/material";
import {CustomDivider} from "../components/common";
import {DevExpTimeline,DevEduTimeline} from "../components/pages";

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
                    <CustomDivider
                        bColor={"primary.main"}
                        cColor={"primary"}
                        icon={<SettingsEthernetRounded />}
                        align={"center"}
                        text={"رزومه من"}
                    />
                    <Grid container sx={{mt: 4}}>
                        <Grid xs={6}>
                            <CustomDivider
                                bColor={"warning.main"}
                                cColor={"warning"}
                                icon={<HomeRepairServiceRounded />}
                                align={"center"}
                                text={"تجربیات"}
                            />

                           <DevExpTimeline loading={loading} theme={theme} />
                        </Grid>

                        <Grid xs={6}>
                            <CustomDivider
                                bColor={"error.main"}
                                cColor={"error"}
                                icon={<SchoolRounded />}
                                align={"center"}
                                text={" تحصیلات"}
                            />

                           <DevEduTimeline loading={loading} theme={theme} />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}

export default Resume;