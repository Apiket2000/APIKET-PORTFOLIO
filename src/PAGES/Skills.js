import React, { useContext, useEffect} from 'react'
import { SiCss3, SiBootstrap, SiJavascript, SiReact } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { Data } from '../Store';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    let {mode}=useContext(Data)


    let skills = [
        {
            id:1,
            icon: <TiHtml5 />,
            name: 'HTML',
            content: " HTML is the standard markup language for Web pages. With HTML you can create your own Website",
            column: "col-sm-6 col-md-3",
            colour:"primary"
        },
        {
            id:2,
            icon: <SiCss3 />,
            name: 'CSS',
            content: "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",
            column: "col-sm-6 col-md-3",
            colour:"danger"
        },
        {
            id:3,
            icon: <SiBootstrap />, 
            name: 'Bootstrap',
            content: "Bootstrap is a free, open source front-end development framework for the creation of websites and web apps",
            column: "col-sm-12 col-md-3",
            colour:"info"
        },
        {
            id:4,
            icon: <SiJavascript />,
            name: 'Javascript',
            content: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web",
            column: "col-sm-6 col-md-5",
            colour:"warning"
        },
        {
            id:5,
            icon: <SiReact />,
            name: 'Reactjs',
            content: "React used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript",
            column: "col-sm-6 col-md-5",
            colour:"primary"
        },
    ]

    return (
        <>
            <div id="Skills">
                <div className={`container-fluid bg-${mode?"dark":"light"} text-${mode?'light':'dark'} pt-5 pt-lg-0`} data-aos="zoom-in-right">
                    <div className="row skills align-items-center justify-content-evenly">
                    <h1 className='text-danger' style={{ textAlign: 'center', fontFamily: 'serif' }}><strong style={{ webkitTextStroke: ' 1px green' }}>Skills</strong></h1>
                        {
                            skills.map((e) => {
                                return (
                                    <div key={e.id}  className={`${e.column} shadow py-3 text-center rounded `}>
                                        <div className={`text-${e.colour}`} style={{ fontSize: '75px'}}>{e.icon}</div>
                                        <h4 style={{fontFamily:"serif",color:"green"}}>{e.name}</h4>
                                        <p style={{fontFamily:"serif",color:"green"}}>{e.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Skills