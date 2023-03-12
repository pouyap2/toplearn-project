import {Tab, Tabs} from "@mui/material";
import {grey} from "@mui/material/colors";
import {useContext} from "react";
import MainContext from "../../context";
import {tabsData} from '../../constants/TabsData';
import {useTheme} from "@mui/material";

const SidebarTabs = ()=>{

    const {pageNumber,handlePageNumber,setDrawerOpen} = useContext(MainContext);

    const theme=useTheme();

    const data=tabsData();

    return(
        <Tabs
            orientation={"vertical"}
            variant={"scrollable"}
            scrollButtons={"auto"}
            allowScrollButtonsMobile
            value={pageNumber}
            onChange={handlePageNumber}
            TabIndicatorProps={{
                style:{
                    backgroundColor:"blue"
                }
            }}
            sx={{width: "100%"}}
            indicatorColor={"secondary"}
            textColor={"primary"}
        >
            {data.length > 0 && data.map((tab,index) => (
                <Tab key={index} sx={{"&.MuiTab-root":{margin: "4px 0", padding: "0 2px", minHeight: "50px",backgroundColor:theme.palette.mode === "dark" ? grey[800] : grey[300]}}}  label={tab.label}
                     icon={tab.icon} iconPosition="start" onClick={()=>setDrawerOpen(false)}  {...tab} />
            ))}

        </Tabs>
    )
}
export default SidebarTabs;