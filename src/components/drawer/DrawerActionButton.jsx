import {Box, Fab} from "@mui/material";
import {red} from "@mui/material/colors";
import {MenuRounded} from "@mui/icons-material";

const DrawerActionButton = ({setDrawerOpen})=>{

    return (
        <Box sx={{display:{xs:"block", sm:"block", md:"none", lg:"none", xl:"none"}}}>
            <Fab aria-label={"Sidebar"} size={"small"} sx={{m:2,backgroundColor:red[500]}} onClick={()=>setDrawerOpen(true)}>
                <MenuRounded />
            </Fab>
        </Box>
    )
}

export default DrawerActionButton;