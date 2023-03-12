import {ArrowLeftRounded} from "@mui/icons-material";
import {Typography, useTheme} from "@mui/material";

const Info = ({children,color})=>{

    return(
        <Typography variant={"body1"} color={color} textAlign={"left"} >
            {children}
            <ArrowLeftRounded sx={{verticalAlign:"middle",color:"primary.main",width:40,height:40}}/>
        </Typography>
    )
}

const DevInfo = () =>{
    const theme=useTheme();
    return(
        <>
            <Info color={theme.palette.mode === "light" ? "black" : "white"}>نام و نام خانوادگی پویا پورداد </Info>
            <Info>سن : 33</Info>
            <Info>شهر : مشهد</Info>
            <Info>شهر : مشهد</Info>
            <Info> pouya.prd2@gmail.com : آدرس ایمیل </Info>
            <Info>شماره موبایل : 09335554226</Info>
        </>
    )
}

export default DevInfo;