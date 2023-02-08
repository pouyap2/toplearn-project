import {grey} from "@mui/material/colors";
import {Grid} from "@mui/material";

const SidebarContainer = ({children})=>{

    return(
        <Grid xs={"0"} sm={0} md={3} lg={2} xl={2} sx={{backgroundColor:grey[900]}}>
            {children}
        </Grid>
    )

}

export default SidebarContainer;