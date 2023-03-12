import {devEdu} from "../../constants/details";
import {Slide, Typography} from "@mui/material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {SchoolRounded} from "@mui/icons-material";



const DevEduTimeline = ({loading,theme})=>{


    return(
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
    )
}

export default DevEduTimeline;