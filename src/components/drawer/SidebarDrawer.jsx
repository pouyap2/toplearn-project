import {Drawer} from "@mui/material";
import {SidebarContent} from "../sidebar";

const SidebarDrawer = ({drawerOpen,setDrawerOpen,handleChange,value})=>{

    return (
        <Drawer
            open={drawerOpen}
            variant={"temporary"}
            onClose={()=>setDrawerOpen(false)}
            sx={{
                '& .MuiDrawer-paper':{width:260},
                display:{
                    sx:"block",
                    sm:"block",
                    md:"none",
                    lg:"none",
                    xl:"none"
                }
            }}
        >
            <SidebarContent value={value} handleChange={handleChange} setDrawerOpen={setDrawerOpen}/>
        </Drawer>
    )
}

export default SidebarDrawer;