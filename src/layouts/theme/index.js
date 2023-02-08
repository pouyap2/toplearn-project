import {createTheme} from "@mui/material/styles";
import {blue,red} from "@mui/material/colors";

export const index = createTheme({
    direction: "rtl",
    palette: {
        mode: "dark",
        primary: {
            main: "#8be9fd"
        },
        secondary: {
            main: "#bd93f9",
        }
    },
    typography: {
        fontFamily: "IRANSansX,roboto",
    },
    components:{
        MuiButtonBase:{
            defaultProps:{
                disableRipple:false,
            },
            styleOverrides:{
                root:{
                    margin:"10px",
                }
            },
        },
        MuiButton:{
            variants: [
                {
                    props: { variant: 'dashed' },
                    style: {
                        textTransform: 'none',
                        border: `4px dashed ${blue[500]}`,
                    },
                },
                {
                    props: { variant: 'dashed', color: 'secondary' },
                    style: {
                        border: `4px dashed ${red[600]}`,
                    },
                },
            ],
        },
    },
});