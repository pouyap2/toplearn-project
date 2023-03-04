import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/material/styles";
import {lightTheme, darkTheme} from "./theme";
import {HelmetProvider} from "react-helmet-async";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {Grid} from "@mui/material";


//NOTE Create RTL Cache
const CacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
});


const MainLayout = ({children, mode}) => {

    const theme = mode === "dark" ? darkTheme : lightTheme;

    return (
        <CacheProvider value={CacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    {/* Grid System */}
                    <Grid container sx={{height: "100vh"}}>
                        {children}
                    </Grid>

                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainLayout;