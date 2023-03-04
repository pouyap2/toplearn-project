import {Box, Typography} from "@mui/material";
import {CopyrightRounded, FavoriteBorderRounded} from "@mui/icons-material";
import {useTheme} from "@mui/material";


const SidebarFooter = ()=>{

    const theme=useTheme();

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
            <Typography variant={"subtitle2"} color={theme.palette.mode === "dark" ? "whitesmoke" : "black"}>
                <a style={{color: theme.palette.mode === "dark" ? "whitesmoke" : "black", textDecoration: "none"}} href="https://karedigital.ir">طراحی شده
                    توسط کار دیجیتال</a>
                <FavoriteBorderRounded sx={{verticalAlign: "middle", color: "tomato", height: 20}}/>
            </Typography>
            <Typography variant={"caption"} color={theme.palette.mode === "dark" ? "whitesmoke" : "black"} sx={{mt: 1}}>
                <CopyrightRounded sx={{verticalAlign: "middle"}}/>{" "}
                کپی رایت 1401
            </Typography>
        </Box>
    )
}

export default SidebarFooter;