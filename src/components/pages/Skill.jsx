import {Chip, Box, Typography, LinearProgress, linearProgressClasses,Badge} from "@mui/material";
import styled from "@emotion/styled";



const Skill = ({icon, color, name, value,theme}) => {

    const BorderLinearProgress = styled(LinearProgress)(() => ({
        height: 10,
        borderRadius: 5,
        boxShadow:"0 0 4px 2px #cbcbcb",
        border:"1px solid #ccc",

        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: "white",
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: color,
        },
    }));


    return (
        <>
            <Box sx={{display: "flex", alignItems: "center",mt:5,mb:5}}>
                <Box sx={{minWidth: 35}}>
                    <Typography variant={"body2"} color={"white"}>
                        <Badge sx={{minWidth:35,mr:1,ml:0}}  badgeContent={`${value}%`} variant={"standard"} color={"info"}/>
                    </Typography>
                </Box>
                <Box sx={{width:"100%",mr:1,position:"relative"}}>
                    <Chip icon={<Box component={"img"} src={icon} sx={{height: 30}}/>} label={name} sx={{fontSize:"18px",color:theme.palette.mode === "light" ? "#000" : "#fff" , p: 3,position:"absolute",top:"-42px",left:"-3px",zIndex:999,backgroundColor:"transparent"}}/>

                    <BorderLinearProgress variant={"determinate"} value={value} />
                </Box>
            </Box>
        </>
    )
}

export default Skill;