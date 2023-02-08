import {Box, Typography} from "@mui/material";
import {CopyrightRounded, FavoriteBorderRounded} from "@mui/icons-material";

const SidebarFooter = ()=>{

    return(
        <Box
            sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
                height: 100,
                flexDirection: "column"
            }}
        >
            <Typography variant={"subtitle2"} color={"whitesmoke"}>
                <a style={{color: "whitesmoke", textDecoration: "none"}} href="https://karedigital.ir">طراحی شده
                    توسط کار دیجیتال</a>
                <FavoriteBorderRounded sx={{verticalAlign: "middle", color: "tomato", height: 20}}/>
            </Typography>
            <Typography variant={"caption"} color={"whitesmoke"} sx={{mt: 1}}>
                <CopyrightRounded sx={{verticalAlign: "middle"}}/>{" "}
                کپی رایت 1401
            </Typography>
        </Box>
    )
}

export default SidebarFooter;