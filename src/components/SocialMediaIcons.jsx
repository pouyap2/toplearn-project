import {Box, IconButton} from "@mui/material";
import {GitHub, Instagram, Telegram, WhatsApp} from "@mui/icons-material";

const SocialMediaIcons = ()=>{

    return(
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
    )
}

export default SocialMediaIcons;