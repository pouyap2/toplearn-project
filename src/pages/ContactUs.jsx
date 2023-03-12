import {useState, useEffect} from "react";
import {Helmet} from "react-helmet-async";
import {useTheme} from "@mui/material/styles";
import {Typography, Card, CardContent, Slide, Grid, TextField, InputAdornment, CardActions, Button, Divider, Chip} from "@mui/material";
import {AccountCircle, FaceRounded, SubjectRounded, EmailRounded, SettingsEthernetRounded, Face6Rounded} from "@mui/icons-material"
import worldMap from "../assets/map.svg";
import {CustomDivider} from "../components/common";
import {Form} from  "../components/pages"

const ContactUs = ({helmet}) => {
    const [loading, setLoading] = useState(false);

    const theme = useTheme();



    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, []);



    return (
        <>
            <Helmet>
                <title>{helmet}</title>
            </Helmet>
            <Card sx={{height: "100vh", backgroundColor: theme.palette.mode === "light" ? "whitesmoke" : "dark", overflowY: "auto", overflowX: "hidden", display: "flex", flexDirection: "column",}}>
                <CardContent>
                    <CustomDivider bColor={"primary.info"} cColor={"warning"} icon={<AccountCircle/>} align={"center"} text={"ارتباط با من"} />

                    <Grid container sx={{mt:5}}>
                        <Slide direction={"up"} in={loading} style={{
                            transitionDelay : loading ? "200ms" : "0ms"
                        }}>
                            <Grid xs={12} sm={12} md={8}>
                                <Card sx={{justifyContent:"center",alignItems:"center",backgroundColor: theme.palette.mode === "light" ? "#d5d5d5" : "#2a2a2a"}} >
                                    <Form theme={theme} />
                                </Card>
                            </Grid>
                        </Slide>
                        <Slide direction={"up"} in={loading} style={{
                            transitionDelay:loading ? "200ms" : "0ms"
                        }}>
                            <Grid xs={0} sm={0} md={4} sx={{textAlign:"center",background:`url(${worldMap})`,backgroundRepeat:"no-repeat",backgroundPosition:"center top",display:{sm:"none",xs:"none",md:"block"}}}>
                                <Typography variant={"h6"} color={theme.palette.mode === "light" ? "black" : "whitesmoke"} sx={{fontFamily:"IRANSansX",mt:4,display:{sm:"none",xs:"none",md:"block"}}}>
                                    بیا در مورد همه چیز با هم صحبت کنیم
                                </Typography>
                                <Typography variant={"body2"} color={theme.palette.mode === "light" ? "black" : "whitesmoke"} sx={{mt:2,display:{sm:"none",md:"block"}}}>
                                    <a href={"mailto:pouya.prd2@gmail.com"} style={{color:"tomato"}}>
                                        ایمیل
                                    </a>
                                    {" "}
                                </Typography>
                            </Grid>

                        </Slide>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )

}

export default ContactUs;