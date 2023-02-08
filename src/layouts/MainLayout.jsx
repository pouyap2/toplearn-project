import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/material/styles";
import {index} from "./theme";
import {Helmet, HelmetProvider} from "react-helmet-async";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {Grid} from "@mui/material";



//NOTE Create RTL Cache
const CacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
});


const MainLayout =({children}) =>{
    return(
        <CacheProvider value={CacheRTL}>
            <ThemeProvider theme={index}>
                <HelmetProvider>
                    <Helmet>
                        <title>وب سایت شخصی پویا پورداد</title>
                    </Helmet>
                    {/* Grid System */}
                    <Grid container sx={{height:"100vh"}}>
                        {children}
                    </Grid>

                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainLayout;