import {useState}  from "react";
import { Box, Typography} from "@mui/material";
import avatar from "../../assets/avatar.jpg";
import {RandomReveal} from 'react-random-reveal';
import {AlphabetPersian} from '../../constants/alphabetPersian';
import ThemeActionButton from "../ThemeActionButton";
import {useTheme} from "@mui/material";
import {CustomAvatar} from "../common";
import SocialMediaIcons from "../SocialMediaIcons";

const SidebarHeader = () => {

    const [start,setStart]=useState(false);

    const theme=useTheme();

    return(
        <>
            <Box sx={{textAlign:"center",width:"100%"}}><ThemeActionButton/></Box>
            <CustomAvatar avatar={avatar} size={120} fallback={"PP"} />

            <Typography variant={"h6"} color={theme.palette.mode === "dark" ? "whitesmoke" : "black"}>
                <Typography variant={"caption"} color={"tomato"}>
                    {"{{ "}
                </Typography>
                <RandomReveal isPlaying={true} characters={"پویا پورداد"} duration={5} characterSet={AlphabetPersian} onComplete={()=>setStart(true)} />
                <Typography variant={"caption"} color={"tomato"}>
                    {" }}"}
                </Typography>
            </Typography>
            {start && (
            <Typography variant={"caption"} color={"gray"}>
                <Typography variant={"caption"} color={"tomato"}>
                    {"[[ "}
                </Typography>
            <RandomReveal isPlaying={true} characterSet={AlphabetPersian} characters={"برنامه نویس فول استک"} duration={5} />
                <Typography variant={"caption"} color={"tomato"}>
                    {" ]]"}
                </Typography>
            </Typography>
            )}
            <SocialMediaIcons />
        </>
    );
}

export default SidebarHeader;