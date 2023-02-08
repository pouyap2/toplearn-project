import {useState} from "react";
import MainLayout from "../layouts/MainLayout";
import {Sidebar} from "../components/sidebar";
import ContentContainer from "./ContentContainer";
import TabPanel from "../components/TabPanel";
import {Typography} from "@mui/material";
import SidebarContainer from "./SidebarContainer";

function AppContainer() {
    const [value, setValue] = useState(0);

    const [drawerOpen,setDrawerOpen]=useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <MainLayout>
            <SidebarContainer>
                <Sidebar value={value} handleChange={handleChange} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
            </SidebarContainer>

            <ContentContainer>
                <TabPanel value={value} index={0}>
                    <Typography variant={"h5"} sx={{textAlign: "center"}}>
                        صفحه اصلی
                    </Typography>
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <Typography variant={"h5"} sx={{textAlign: "center"}}>
                       درباره من
                    </Typography>
                </TabPanel>

                <TabPanel value={value} index={2}>
                    <Typography variant={"h5"} sx={{textAlign: "center"}}>
                        رزومه من
                    </Typography>
                </TabPanel>

                <TabPanel value={value} index={3}>
                    <Typography variant={"h5"} sx={{textAlign: "center"}}>
                        نمونه کارها
                    </Typography>
                </TabPanel>

                <TabPanel value={value} index={4}>
                    <Typography variant={"h5"} sx={{textAlign: "center"}}>
                        نظرات دانشجویان
                    </Typography>
                </TabPanel>

                <TabPanel value={value} index={5}>
                    <Typography variant={"h5"} sx={{textAlign: "center"}}>
                        ارتباط با من
                    </Typography>
                </TabPanel>
            </ContentContainer>
        </MainLayout>
    );
}

export default AppContainer;