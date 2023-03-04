import {useState, useEffect} from "react";
import {Helmet} from "react-helmet-async"
import {Typography, Avatar, Card, CardContent, Divider, Chip, Slide, Box} from "@mui/material";
import {grey} from "@mui/material/colors";
import {ForumRounded} from "@mui/icons-material";
import {userComments} from '../constants/details';
import Slider from "react-slick";
import {useTheme} from "@mui/material";

const Comments = ({helmet}) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, []);

    const options = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: "linear",
    }

    const theme=useTheme();

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
                    <Slide direction={"down"} in={loading} style={{
                        transitionDelay:loading ? "500ms" : "0ms",
                    }}>
                        <Divider textAlign={"center"} sx={{
                            "&::before,&::after": {
                                borderColor: "success.main"
                            },
                            mb: 3
                        }}>
                            <Chip
                                icon={<ForumRounded/>}
                                color={"success"}
                                label={
                                    <Typography variant={"body1"} color={"black"}
                                                sx={{textAlign: "center", color: "#fff"}}>
                                        نظرات کارفرمایان
                                    </Typography>
                                }
                                sx={{p: 3}}
                            />

                        </Divider>
                    </Slide>

                    <Box component={"div"} sx={{mt: 10, justifyContent: "center", alignItems: "center"}}>
                        <Slider {...options} >
                            {
                                userComments.map((user, index) => (
                                    <Box key={index} component={"div"} sx={{justifyContent: "center"}}>
                                        <Avatar src={user.avatar} variant={"circular"}
                                                sx={{height: 100, width: 100, margin: "0 auto"}}/>
                                        <Typography variant={"body1"} textAlign={"center"} color={theme.palette.mode === "light" ? "dark" : "whitesmoke"}>
                                            {user.fullname}
                                        </Typography>
                                        <Typography variant={"body2"} textAlign={"center"} color={theme.palette.mode === "light" ? "dark" : "whitesmoke"} sx={{mb: 2}}>
                                            {user.jobTitle}
                                        </Typography>
                                        <Card sx={{
                                            backgroundColor: "lightsalmon",
                                            width: 1 / 2,
                                            margin: "0 auto",
                                            borderRadius: 5
                                        }}>
                                            <CardContent>
                                                <Typography variant={"body2"} textAlign={"center"}>
                                                    {user.comment}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                ))
                            }
                        </Slider>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default Comments;