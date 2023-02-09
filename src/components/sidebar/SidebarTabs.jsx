import {Tab, Tabs} from "@mui/material";
import {grey} from "@mui/material/colors";
import {
    ConnectWithoutContactRounded,
    FaceRounded,
    HomeRounded,
    MessageRounded,
    TerminalRounded,
    TextSnippetRounded
} from "@mui/icons-material";
import {useContext} from "react";
import MainContext from "../../context";


const SidebarTabs = ()=>{

    const {pageNumber,handlePageNumber,setDrawerOpen} = useContext(MainContext);

    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        }
    }

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
            <Tab sx={{"&.MuiTab-root":{margin: "4px 0", padding: "0 2px", minHeight: "50px",backgroundColor:grey[800]}}}  label={"صفحه اصلی"}
                 icon={<HomeRounded/>} iconPosition="start" onClick={()=>setDrawerOpen(false)}  {...tabProps(0)} />
            <Tab sx={{"&.MuiTab-root":{margin: "4px 0", padding: "0 2px", minHeight: "50px",backgroundColor:grey[800]}}} label={"درباره من"}
                 icon={<FaceRounded/>} iconPosition="start" onClick={()=>setDrawerOpen(false)} {...tabProps(1)} />
            <Tab sx={{"&.MuiTab-root":{margin: "4px 0", padding: "0 2px", minHeight: "50px",backgroundColor:grey[800]}}} label={"رزومه من"}
                 icon={<TextSnippetRounded/>} iconPosition="start" onClick={()=>setDrawerOpen(false)} {...tabProps(2)} />
            <Tab sx={{"&.MuiTab-root":{margin: "4px 0", padding: "0 2px", minHeight: "50px",backgroundColor:grey[800]}}} label={"نمونه کارها"}
                 icon={<TerminalRounded/>} iconPosition="start" onClick={()=>setDrawerOpen(false)} {...tabProps(3)} />
            <Tab sx={{"&.MuiTab-root":{margin: "4px 0", padding: "0 2px", minHeight: "50px",backgroundColor:grey[800]}}} label={"نظرات دانشجویان"}
                 icon={<MessageRounded/>} iconPosition="start" onClick={()=>setDrawerOpen(false)} {...tabProps(4)} />
            <Tab sx={{"&.MuiTab-root":{margin: "4px 0", padding: "0 2px", minHeight: "50px",backgroundColor:grey[800]}}} label={"ارتباط با من"}
                 icon={<ConnectWithoutContactRounded/>} iconPosition="start" onClick={()=>setDrawerOpen(false)} {...tabProps(5)} />
        </Tabs>
    )
}
export default SidebarTabs;