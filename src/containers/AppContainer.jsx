import {useEffect, useState} from "react";
import MainLayout from "../layouts/MainLayout";
import {Sidebar} from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import {Typography,useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import {DrawerActionButton} from "../components/drawer";
import SwipeableViews from 'react-swipeable-views';

import {Home,About,Resume,Portfolio,Comments,ContactUs} from "../pages";


function AppContainer() {
    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen,setDrawerOpen]=useState(false);
    const [mode,setMode]=useState();

    const theme=useTheme();
    const isMdUp=useMediaQuery(theme.breakpoints.up("md"));
    const prefersDarkMode=useMediaQuery('(prefers-color-scheme:dark)');


    useEffect(()=>{
        setMode(prefersDarkMode ? "dark" : "light");
    },[])

    useEffect(()=>{
        if (isMdUp){
            setDrawerOpen(false)
        }
    },[isMdUp])

    const handlePageNumber = (event, newValue) => {
        setPageNumber(newValue);
    };

    const handleThemeChange = ()=>{
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    }

    return (
        <MainContext.Provider
        value={{
            pageNumber:pageNumber,
            handlePageNumber:handlePageNumber,
            drawerOpen:drawerOpen,
            setDrawerOpen:setDrawerOpen,
            handleThemeChange:handleThemeChange,
        }}
        >
            <MainLayout mode={mode}>
                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>

                <DrawerActionButton />

                <PagesContainer>
                    <SwipeableViews
                        index={pageNumber}
                        onChangeIndex={handlePageNumber}
                    >
                        <Page pageNumber={pageNumber} index={0}>
                          <Home helmet={"وب سایت شخصی - صفحه اصلی"}/>
                        </Page>

                        <Page pageNumber={pageNumber} index={1}>
                          <About helmet={"وب سایت شخصی - درباره من"}/>
                        </Page>

                        <Page pageNumber={pageNumber} index={2}>
                           <Resume helmet={"وب سایت شخصی - رزومه من"} />
                        </Page>

                        <Page pageNumber={pageNumber} index={3}>
                            <Portfolio helmet={"وب سایت شخضی - نمونه کارهای من"} />
                        </Page>

                        <Page pageNumber={pageNumber} index={4}>
                           <Comments helmet={"وب سایت شخصی - نظرات کارفرمایان"} />
                        </Page>

                        <Page pageNumber={pageNumber} index={5}>
                            <ContactUs helmet={"وب سایت شخصی - ارتباط با من"} />
                        </Page>
                    </SwipeableViews>
                </PagesContainer>
            </MainLayout>
        </MainContext.Provider>

    );
}

export default AppContainer;