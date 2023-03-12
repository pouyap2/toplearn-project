import {useState, useEffect} from "react";
import {Helmet} from "react-helmet-async"
import { Card, CardContent, Grid} from "@mui/material";
import {Laptop} from "@mui/icons-material";
import {useTheme} from "@mui/material";
import {CustomDivider} from "../components/common";
import {PortfolioItems} from "../components/pages";

const Portfolio = ({helmet}) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, []);

    const theme=useTheme();

    return (
        <>
            <Helmet>
                <title>{helmet}</title>
            </Helmet>
            <Card sx={{height: "100vh", backgroundColor: theme.palette.mode === "light" ? "whitesmoke" : "dark" , overflowY: "auto", overflowX: "hidden"}}>
                <CardContent>
                    <CustomDivider bColor={"primary.main"} cColor={"primary"} align={"center"} icon={<Laptop/>} text={" کارهای من"} />
                    <Grid container sx={{margin:"0 auto"}}>
                       <PortfolioItems loading={loading} theme={theme} />
                    </Grid>
                </CardContent>
            </Card>

        </>
    )
}

export default Portfolio;