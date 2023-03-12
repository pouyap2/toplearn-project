import {useState, useEffect} from "react";
import {Helmet} from "react-helmet-async"
import {Card, CardContent, Box} from "@mui/material";
import {ForumRounded} from "@mui/icons-material";
import {useTheme} from "@mui/material";
import {CustomDivider} from "../components/common";
import {SliderItem} from "../components/pages"


const Comments = ({helmet}) => {

    const options = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: "linear",
    }

    const theme = useTheme();

    return (
        <>
            <Helmet>
                <title>{helmet}</title>
            </Helmet>
            <Card sx={{
                height: "100vh",
                backgroundColor: theme.palette.mode === "light" ? "whitesmoke" : "dark",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column"
            }}
            >
                <CardContent>
                    <CustomDivider bColor={"success.main"} cColor={"success"} text={"نظرات مشتریان"} icon={<ForumRounded/>} align={"center"}/>

                    <Box component={"div"} sx={{mt: 10, justifyContent: "center", alignItems: "center"}}>
                        <SliderItem oprions={options} theme={theme}/>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default Comments;