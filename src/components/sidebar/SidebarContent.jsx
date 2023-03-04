import { Box, Divider} from "@mui/material";
import {SidebarHeader,SidebarFooter,SidebarTabs} from ".";


const SidebarContent = () => {


    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mt: 2,}}>

            <SidebarHeader />


            <Divider variant={"middle"} sx={{height: "1%", width: "90%", mb: 1}}/>


            <SidebarTabs />

            <Divider variant={"middle"} sx={{height: "1%", width: "90%", mt: 1}}/>


            <SidebarFooter/>
        </Box>
    )
}

export default SidebarContent;
