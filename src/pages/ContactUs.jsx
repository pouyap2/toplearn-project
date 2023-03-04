import {useState, useEffect} from "react";
import {Helmet} from "react-helmet-async";
import {useTheme} from "@mui/material/styles";
import {Typography, Card, CardContent, Slide, Grid, TextField, InputAdornment, CardActions, Button, Divider, Chip} from "@mui/material";
import {AccountCircle, FaceRounded, SubjectRounded, EmailRounded, SettingsEthernetRounded, Face6Rounded} from "@mui/icons-material"
import {grey} from "@mui/material/colors";
import worldMap from "../assets/map.svg";
import {useFormik} from "formik";
import {contactValidationSchema} from "./validations/contactValidation";



const ContactUs = ({helmet}) => {
    const [loading, setLoading] = useState(false);

    const theme = useTheme();

    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, []);

    const contactInputNames={
        fullname:"",
        email:"",
        subject:"",
        message:""
    }

    const formik=useFormik({
        initialValues:contactInputNames,
        onSubmit:values => {
            console.log("form values : ",values)
        },
        validationSchema:contactValidationSchema,
    });

    return (
        <>
            <Helmet>
                <title>{helmet}</title>
            </Helmet>
            <Card sx={{
                height: "100vh",
                backgroundColor: theme.palette.mode === "light" ? "whitesmoke" : "dark",
                overflowY: "auto",
                overflowX: "hidden",
                display: "flex",
                flexDirection: "column",
            }}
            >
                <CardContent>
                    <Slide direction={"down"} in={loading} style={{
                        transitionDelay: loading ? "500ms" : "0ms",
                    }}>
                        <Divider textAlign={"center"} sx={{mt: 2, "&::before, &::after": {borderColor: grey[300]}}}>
                            <Chip icon={<AccountCircle/>} color={"warning"} label={
                                <Typography variant={"body1"}
                                            color={theme.palette.mode === "light" ? "black" : "whitesmoke"}
                                            sx={{textAlign: "center", fontWeight: 900}}>
                                    ارتباط با من
                                </Typography>
                            } sx={{p: 3}}/>
                        </Divider>
                    </Slide>
                    <Grid container sx={{mt:5}}>
                        <Slide direction={"up"} in={loading} style={{
                            transitionDelay : loading ? "200ms" : "0ms"
                        }}>
                            <Grid xs={12} sm={12} md={8}>
                                <Card sx={{justifyContent:"center",alignItems:"center",backgroundColor: theme.palette.mode === "light" ? "#d5d5d5" : "#2a2a2a"}} >
                                    <form autoComplete={"off"} onSubmit={formik.handleSubmit}>
                                        <CardContent>
                                            <Grid container>
                                                <Grid xs={12} sx={{direction:"ltr"}}>
                                                    <Grid container sx={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                                                        <Grid xs={12} md={6} >
                                                            <TextField
                                                                fullWidth
                                                                size={"small"}
                                                                color={"warning"}
                                                                label={"نام و نام خانوادگی"}
                                                                name={"fullname"}
                                                                variant={"outlined"}
                                                                helperText={
                                                                    formik.touched.fullname ?
                                                                        formik.errors.fullname:
                                                                        null
                                                                }
                                                                error={Boolean(
                                                                    formik.touched.fullname && formik.errors.fullname
                                                                )}
                                                                value={formik.values ?.fullname}
                                                                onChange={formik.handleChange}
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <FaceRounded />
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                            />

                                                        </Grid>
                                                        <Grid xs={12} md={6} >
                                                            <TextField
                                                                fullWidth
                                                                size={"small"}
                                                                color={"warning"}
                                                                label={"آدرس ایمیل"}
                                                                name={"email"}
                                                                variant={"outlined"}
                                                                helperText={
                                                                    formik.touched.email ?
                                                                        formik.errors.email:
                                                                        null
                                                                }
                                                                error={Boolean(
                                                                    formik.touched.email && formik.errors.email
                                                                )}
                                                                value={formik.values ?.email}
                                                                onChange={formik.handleChange}
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment postion="end">
                                                                            <EmailRounded />
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid xs={12} md={12} sx={{mt:2}}>
                                                            <TextField
                                                                fullWidth
                                                                size={"small"}
                                                                color={"warning"}
                                                                label={"عنوان پیام"}
                                                                name={"subject"}
                                                                variant={"outlined"}
                                                                helperText={
                                                                    formik.touched.subject ?
                                                                        formik.errors.subject:
                                                                        null
                                                                }
                                                                error={Boolean(
                                                                    formik.touched.subject && formik.errors.subject
                                                                )}
                                                                value={formik.values ?.subject}
                                                                onChange={formik.handleChange}
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment postion="end">
                                                                            <SubjectRounded />
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid xs={12} md={12} sx={{mt:2}}>
                                                            <TextField
                                                                fullWidth
                                                                multiline
                                                                rows={6}
                                                                size={"small"}
                                                                color={"warning"}
                                                                label={"متن پیام"}
                                                                name={"message"}
                                                                variant={"outlined"}
                                                                helperText={
                                                                    formik.touched.message ?
                                                                        formik.errors.message:
                                                                        null
                                                                }
                                                                error={Boolean(
                                                                    formik.touched.message && formik.errors.message
                                                                )}
                                                                value={formik.values ?.message }
                                                                onChange={formik.handleChange}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions sx={{alignItems:"end",flexDirection:"column"}}>
                                            <Button type={"submit"} color={"success"} variant={"contained"} fullWidth>
                                                ارسال پیام
                                            </Button>
                                        </CardActions>
                                    </form>
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
                                    بزن به من
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