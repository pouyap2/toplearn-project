import {Avatar, Typography} from "@mui/material";
import avatar from "../../assets/avatar.jpg";

const SidebarHeader = () => {

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

            <Typography variant={"h6"} color={"whitesmoke"}>پویا پورداد</Typography>
            <Typography variant={"caption"} color={"whitesmoke"}>برنامه نویس فول استک </Typography>
        </>
    );
}

export default SidebarHeader;