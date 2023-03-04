import {useState}  from "react";
import {Avatar, Box, Typography, IconButton, Fab} from "@mui/material";
import avatar from "../../assets/avatar.jpg";
import {RandomReveal} from 'react-random-reveal';
import {AlphabetPersian} from '../../constants/alphabetPersian';
import {GitHub,Instagram,Telegram,WhatsApp} from "@mui/icons-material"
import ThemeActionButton from "../ThemeActionButton";
import {useTheme} from "@mui/material";

const SidebarHeader = () => {

    const [start,setStart]=useState(false);

    const theme=useTheme();

    return(
        <>
            <Box sx={{textAlign:"center",width:"100%"}}><ThemeActionButton/></Box>
            <Avatar src={avatar} variant={"rounded"}
                    sx={{
                        height: 120,
                        width: 120,
                        margin: "20px auto 0",
                        display: {
                            xl: "block",
                            lg: "block",
                            md: "block",
                            sm: "none",
                            xs: "none",
                        },
                    }}>
                PP
            </Avatar>

            {/*<img src={require("../../assets/avatar.jpg")} alt={"imageUser"} style={{width:"100px"}}/>*/}

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

            <Box component={"div"} sx={{m:"0 auto",textAlign:"center"}}>
                <IconButton aria-label={"Github"} sx={{mb:0}}>
                    <a href={"https://github.com/pouyap2"} target={"_blank"} rel={"noopener noreferrer"}>
                        <GitHub sx={{color:"grey"}} />
                    </a>
                </IconButton>
                <IconButton aria-label={"Instagram"} sx={{mb:0}}>
                    <a href={"https://instagram.com/karedigital.ir"} target={"_blank"} rel={"noopener noreferrer"}>
                        <Instagram sx={{color:"red"}} />
                    </a>
                </IconButton>
                <IconButton aria-label={"telegram"} sx={{mb:0}}>
                    <a href={"#"} target={"_blank"} rel={"noopener noreferrer"}>
                        <Telegram sx={{color:"blue"}} />
                    </a>
                </IconButton>
                <IconButton aria-label={"WhatsApp"} sx={{mb:0}}>
                    <a href={"#"} target={"_blank"} rel={"noopener noreferrer"}>
                        <WhatsApp sx={{color:"yellowgreen"}} />
                    </a>
                </IconButton>
            </Box>
        </>
    );
}

export default SidebarHeader;