import {useEffect, useState} from "react";
import MainLayout from "../layouts/MainLayout";
import {Sidebar} from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import {Page} from "../components/pages";
import {useMediaQuery} from "@mui/material";
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
    const [bgColor,setBgColor]=useState("#1e1e1e");

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

    const handlePageChange=index =>{
        setPageNumber(index);
    }

    const handleThemeChange = ()=>{
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        setBgColor((prevBgColor)=>(prevBgColor === '#1e1e1e' ? "whitesmoke" : "#1e1e1e"))
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
                        onChangeIndex={handlePageChange}
                        style={{background:bgColor}}
                    >
                        <Page pageNumber={pageNumber} index={0}>
                          <Home helmet={"???? ???????? ???????? - ???????? ????????"}/>
                        </Page>

                        <Page pageNumber={pageNumber} index={1}>
                          <About helmet={"???? ???????? ???????? - ???????????? ????"}/>
                        </Page>

                        <Page pageNumber={pageNumber} index={2}>
                           <Resume helmet={"???? ???????? ???????? - ?????????? ????"} />
                        </Page>

                        <Page pageNumber={pageNumber} index={3}>
                            <Portfolio helmet={"???? ???????? ???????? - ?????????? ???????????? ????"} />
                        </Page>

                        <Page pageNumber={pageNumber} index={4}>
                           <Comments helmet={"???? ???????? ???????? - ?????????? ????????????????????"} />
                        </Page>

                        <Page pageNumber={pageNumber} index={5}>
                            <ContactUs helmet={"???? ???????? ???????? - ???????????? ???? ????"} />
                        </Page>
                    </SwipeableViews>
                </PagesContainer>
            </MainLayout>
        </MainContext.Provider>
    );
}

export default AppContainer;