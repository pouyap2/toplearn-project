import {userComments} from "../../constants/details";
import {Avatar, Box, Card, CardContent, Typography} from "@mui/material";
import Slider from "react-slick";

const SliderItem = ({options,theme})=>{

    return(
        <>
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
        </>
    )
}

export default SliderItem;