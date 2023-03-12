import {useEffect, useState} from "react";
import {Skill} from "./index";
import {devSkills} from "../../constants/Skills";
import {useTheme} from "@mui/material";

const Skills = ()=>{

    const [javascript, setJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [nodeJs, setNodeJs] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [git, setGit] = useState(0);
    const [php, setPhp] = useState(0);
    const [Laravel, setLaravel] = useState(0);

    const theme=useTheme();

    useEffect(() => {
        const timer = setInterval(() => {

            setHtml(oldProgress => {
                return Math.min(oldProgress + 1, 95);
            });

            setCss(oldProgress => {
                return Math.min(oldProgress + 1, 90);
            });

            setJavascript(oldProgress => {
                return Math.min(oldProgress + 1, 85);
            });

            setNodeJs(oldProgress => {
                return Math.min(oldProgress + 1, 40);
            });

            setReactJs(oldProgress => {
                return Math.min(oldProgress + 1, 80);
            });

            setGit(oldProgress => {
                return Math.min(oldProgress + 1, 60);
            });

            setPhp(oldProgress => {
                return Math.min(oldProgress + 1, 95);
            });

            setLaravel(oldProgress => {
                return Math.min(oldProgress + 1, 80);
            });

        }, 15);



        return () => {
            clearInterval(timer);

        }
    }, []);

    const {htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill, phpSkill, laravelSkill} = devSkills;

    return(
        <>
            <Skill name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color} value={html} theme={theme} />
            <Skill name={cssSkill.name} icon={cssSkill.icon} color={cssSkill.color} value={css} theme={theme} />
            <Skill name={jsSkill.name} icon={jsSkill.icon} color={jsSkill.color} value={javascript} theme={theme} />
            <Skill name={reactSkill.name} icon={reactSkill.icon} color={reactSkill.color} value={reactJs} theme={theme} />
            <Skill name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color} value={nodeJs} theme={theme} />
            <Skill name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color} value={git} theme={theme} />
            <Skill name={phpSkill.name} icon={phpSkill.icon} color={phpSkill.color} value={php} theme={theme} />
            <Skill name={laravelSkill.name} icon={laravelSkill.icon} color={laravelSkill.color} value={Laravel} theme={theme}/>
        </>
    )
}

export default Skills;