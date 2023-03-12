import {devWorkInfo} from "../../constants/details";
import {Box, Chip, Tooltip, Typography} from "@mui/material";
import CountUp from "react-countup";


const DevWorkCount = ()=>{

    return(
        <>
            {
                devWorkInfo.map((item, index) => (
                    <Box key={index} component={"div"} sx={{width: 1, mb: 1}}>
                        <Tooltip title={item.tooltipTitle} placement={"top"} arrow>
                            <Chip icon={item.icon} label={
                                <Typography variant={"body1"} color={"whitesmoke"}>
                                    <CountUp end={item.total} start={0} duration={5}>
                                    </CountUp>
                                </Typography>} sx={{p:2,backgroundColor:item.color,width:1}}>
                            </Chip>
                        </Tooltip>
                    </Box>
                ))
            }
        </>
    )
}

export default DevWorkCount;