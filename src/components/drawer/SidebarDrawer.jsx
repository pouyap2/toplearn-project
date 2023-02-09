import {Drawer} from "@mui/material";
import {SidebarContent} from "../sidebar";

import  {useContext} from "react";
import MainContext from '../../context';

const SidebarDrawer = ()=>{

    const {drawerOpen,setDrawerOpen} =useContext(MainContext);

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
            <SidebarContent />
        </Drawer>
    )
}

export default SidebarDrawer;