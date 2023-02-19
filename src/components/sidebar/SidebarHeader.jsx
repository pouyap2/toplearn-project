import {useState}  from "react";
import {Avatar, Typography} from "@mui/material";
import avatar from "../../assets/avatar.jpg";
import {RandomReveal} from 'react-random-reveal';
import {AlphabetPersian} from '../../constants/alphabetPersian';

const SidebarHeader = () => {

    const [start,setStart]=useState(false);

    return(
        <>
            <Avatar src={avatar} variant={"rounded"}
                    sx={{
                        height: 120,
                        width: 120,
                        margin: "0 auto",
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


            <Typography variant={"h6"} color={"whitesmoke"}>
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
        </>
    );
}

export default SidebarHeader;