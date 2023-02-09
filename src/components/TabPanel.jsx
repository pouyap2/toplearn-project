import {Box, Typography} from "@mui/material";

const TabPanel = (props)=>{
    const {children,pageNumber,index,...others}=props;

    return (
        <div
        role={"tabpanel"}
        hidden={pageNumber !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`sidebar-tab-${index}`}
        {...others}
        >
            {pageNumber === index && (
                <Box sx={{p:3}}>
                    <Typography>
                        {children}
                    </Typography>
                </Box>
            )}
        </div>
    )
}

export default TabPanel;