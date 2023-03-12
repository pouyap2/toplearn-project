import {portfolio} from "../../constants/portfolio";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Slide,
    Typography
} from "@mui/material";
import EllipsisText from "react-ellipsis-text";

const PortfolioItems = ({loading,theme})=>{

    return(
       <>
           {
               portfolio.map((item, index) => (
                   <Grid key={index} xs={12} sm={6} md={6} lg={4} xl={4} sx={{px: 2, my: 3}}>
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
       </>
    )
}

export default PortfolioItems;