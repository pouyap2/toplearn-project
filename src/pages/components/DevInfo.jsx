import {ArrowLeftRounded} from "@mui/icons-material";
import {Typography} from "@mui/material";

const DevInfo = ({children,color})=>{

    return(
        <Typography variant={"body1"} color={color} textAlign={"left"} >
            {children}
            <ArrowLeftRounded sx={{verticalAlign:"middle",color:"primary.main",width:40,height:40}}/>
        </Typography>
    )
}

export default DevInfo;