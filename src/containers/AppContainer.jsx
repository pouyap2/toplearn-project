import {useState} from "react";
import MainLayout from "../layouts/MainLayout";
import {Sidebar} from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import {Typography} from "@mui/material";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import {DrawerActionButton} from "../components/drawer";
import SwipeableViews from 'react-swipeable-views';

import {Home,About} from "../pages";

function AppContainer() {
    const [pageNumber, setPageNumber] = useState(0);

    const [drawerOpen,setDrawerOpen]=useState(false);

    const handlePageNumber = (event, newValue) => {
        setPageNumber(newValue);
    }

    return (
        <MainContext.Provider
        value={{
            pageNumber:pageNumber,
            handlePageNumber:handlePageNumber,
            drawerOpen:drawerOpen,
            setDrawerOpen:setDrawerOpen,
        }}
        >
            <MainLayout>
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
                          <Home/>
                        </Page>

                        <Page pageNumber={pageNumber} index={1}>
                          <About/>
                        </Page>

                        <Page pageNumber={pageNumber} index={2}>
                            <Typography variant={"h5"} sx={{textAlign: "center"}}>
                                رزومه من
                            </Typography>
                        </Page>

                        <Page pageNumber={pageNumber} index={3}>
                            <Typography variant={"h5"} sx={{textAlign: "center"}}>
                                نمونه کارها
                            </Typography>
                        </Page>

                        <Page pageNumber={pageNumber} index={4}>
                            <Typography variant={"h5"} sx={{textAlign: "center"}}>
                                نظرات دانشجویان
                            </Typography>
                        </Page>

                        <Page pageNumber={pageNumber} index={5}>
                            <Typography variant={"h5"} sx={{textAlign: "center"}}>
                                ارتباط با من
                            </Typography>
                        </Page>
                    </SwipeableViews>
                </PagesContainer>
            </MainLayout>
        </MainContext.Provider>

    );
}

export default AppContainer;