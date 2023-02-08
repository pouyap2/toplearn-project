import { Box, Divider} from "@mui/material";
import {SidebarHeader,SidebarFooter,SidebarTabs} from ".";


const SidebarContent = ({value, handleChange,setDrawerOpen}) => {


    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mt: 2,}}>

            <SidebarHeader />


            <Divider variant={"middle"} sx={{height: "1%", width: "90%", mt: 1}}/>


            <SidebarTabs value={value} handleChange={handleChange} setDrawerOpen={setDrawerOpen}/>

            <Divider variant={"middle"} sx={{height: "1%", width: "90%", mt: 1}}/>


            <SidebarFooter/>
        </Box>
    )
}

export default SidebarContent;
/*
<Tab label={
    <div>
        <Typography variant={"subtitle2"} color={"whitesmoke"}>
            <HomeRounded sx={{verticalAlign: "middle", mx: 1}}/>
            خانه
        </Typography>
    </div>
}
/>*/
