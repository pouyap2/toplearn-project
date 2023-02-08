import {SidebarContent} from ".";
import {SidebarDrawer,DrawerActionButton} from "../drawer/";

const Sidebar =({value,handleChange,drawerOpen,setDrawerOpen})=>{

    return(
        <>
            <DrawerActionButton setDrawerOpen={setDrawerOpen} />

            <SidebarContent value={value} handleChange={handleChange}/>


            <SidebarDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} handleChange={handleChange} value={value} />

        </>
    )
}

export default Sidebar;
