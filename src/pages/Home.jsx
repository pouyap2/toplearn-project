import {useEffect, useRef,useCallback} from "react";
import {Box, Typography} from "@mui/material";
import bg02 from "../assets/bg02.jpeg";
import Typed from "typed.js"
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import {hexagon,links} from '../constants/particles'


const Home = () => {
    const nameEl = useRef(null);
    const infoEl = useRef(null);

    const strings = [
        "من یک توسعه دهنده فول استک هستم",
        "من یک مدرس برنامه نویسی هستم",
        "من یک فریلنسر هستم",
        "من یک سئو کار هستم",
    ];

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ["[[ پویا پورداد ]]"],
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 10,
            showCursor: false,
        });

        const typedInfo = new Typed(infoEl.current, {
            strings: strings,
            startDelay: 1500,
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 50,
            loop: true,
            showCursor: false,
        });

        return () => {
            typedName.destroy();
            typedInfo.destroy();
        }
    }, []);

    const particlesInit=useCallback(async engine=>{
        await loadFull(engine);
    },[]);

    const particlesLoaded=useCallback(async container=>{
       await console.log(container);
    },[]);
    return (
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
            <Particles  id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={links} />
            <Typography ref={nameEl} variant={"h3"} sx={{color: "tomato"}}>

            </Typography>
            <Typography ref={infoEl} variant={"h4"} sx={{color: "whitesmoke"}}>

            </Typography>
        </Box>
    )
}

export default Home;