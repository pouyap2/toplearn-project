import {useState, useEffect} from "react";
import {Helmet} from "react-helmet-async"
import EllipsisText from "react-ellipsis-text";
import {
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardActions,
    Button,
    CardContent,
    Divider,
    Chip,
    Grid,
    Slide
} from "@mui/material";
import {Laptop} from "@mui/icons-material";
import {portfolio} from "../constants/portfolio";
import {useTheme} from "@mui/material";


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
                    <Slide direction={"down"} in={loading} style={{
                        transitionDelay:loading ? "500ms" : "0ms",
                    }}>
                        <Divider textAlign={"center"} sx={{"&::before,&::after": {borderColor: "primary.main"}, mb: 3}}>
                            <Chip icon={<Laptop/>} color={"primary"}
                                  label={<Typography variant={"body1"} color={"black"} sx={{textAlign: "center"}}>نمونه
                                      کارهای من</Typography>} sx={{p: 3}}/>
                        </Divider>
                    </Slide>
                    <Grid container sx={{margin:"0 auto"}}>
                        {
                            portfolio.map((item, index) => (
                                <Grid key={index} xs={12} sm={6} md={6} lg={4} xl={4} sx={{px: 2, mb: 2}}>
                                    <Slide direction={"up"} in={loading}
                                           style={{transitionDelay: loading ? `${index + 3}99ms` : "0ms"}}>
                                    <Card sx={{maxWidth:345,backgroundColor:theme.palette.mode === "light" ? "whitesmoke" : "#444",boxShadow:"0 0 5px 5px #ccc"}}>
                                        <CardActionArea sx={{margin:0}}>
                                            <CardMedia component={"img"} style={{height:200,width:"100%"}} image={item.image} alt={item.title} />
                                            <CardContent>
                                                <Typography variant={"body1"} textAlign={"left"} gutterBottom>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant={"body2"} color={"text.secondary"} textAlign={"left"} gutterBottom sx={{direction:"ltr"}}>
                                                    <EllipsisText text={item.info} length={100} />
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button href={item.link} size={"small"} sx={{backgroundColor:"rebeccapurple",color:theme.palette.mode === "light" ? "white" : "whitesmoke"}} color={"inherit"} target={"_blank"}>
                                                مشاهده نمونه کار
                                            </Button>
                                        </CardActions>
                                    </Card>
                                    </Slide>
                                </Grid>
                            ))
                        }
                    </Grid>
                </CardContent>
            </Card>

        </>
    )
}

export default Portfolio;