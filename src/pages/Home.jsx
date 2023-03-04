import {useEffect, useRef, useCallback, useState} from "react";
import {Box, Typography} from "@mui/material";
import bg02 from "../assets/bg02.jpeg";
import Typed from "typed.js"
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import {links} from '../constants/particles'
import TextTransition, {presets} from "react-text-transition";
import {Helmet} from "react-helmet-async";

const Home = ({helmet}) => {
    const nameEl = useRef(null);
    const [index, setIndex] = useState(0);

    const strings = [
        "توسعه دهنده فول استک هستم",
        "فریلنسر هستم",
        "سئو کار هستم",
    ];

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: [" پویا پورداد "],
            typeSpeed: 200,
            backSpeed: 200,
            backDelay: 200,
            showCursor: false,
        });

        const stringsTransition = setInterval(() => {
            setIndex((index) => index + 1);
        }, 5000);

        return () => {
            typedName.destroy();
            clearInterval(stringsTransition);
        }
    }, []);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <>
            <Helmet>
                <title>{helmet}</title>
            </Helmet>
            <Box sx={{
                backgroundImage: `url(${bg02})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={links}/>
                <Box component="div" sx={{display: "flex"}}>
                    <Typography variant="h3" color="#fff">
                        {" <code> "}
                    </Typography>
                    <Typography
                        ref={nameEl}
                        variant="h3"
                        color="#fff"
                    />

                    <Typography variant="h3" color="#fff">
                        {" </code> "}
                    </Typography>
                </Box>


                <Box component={"div"} sx={{display: "flex"}}>
                    <TextTransition springConfig={presets.wobbly}>
                        <Typography variant={"h4"} sx={{color: "whitesmoke", mt: 4}}>
                            {strings[index % strings.length]}
                        </Typography>
                    </TextTransition>
                    <Typography variant={"h4"} sx={{color: "whitesmoke", mt: 4, mr: 1}}>
                        من یک {" "}
                    </Typography>
                </Box>
            </Box>
        </>

    )
}

export default Home;