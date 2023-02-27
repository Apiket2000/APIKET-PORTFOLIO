import React, { useContext, useEffect } from 'react'
import { Data } from '../Store'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    let { mode } = useContext(Data)

    let info = [
        {
            id: 1,
            title: "Name",
            data: "Apiket Chatrapati Mojankar"
        },
        {
            id: 2,
            title: "DOB",
            data: "05 sep 2000"
        },
        {
            id: 3,
            title: "Email",
            data: "apiketmojankar@gmail.com"
        },
        {
            id: 4,
            title: "Phone",
            data: "+91-8080448251"
        },
    ]

    return (
        <>
            <div id="About">
                <div className={`container-fluid bg-${mode ? 'dark' : 'light'} text-${mode ? 'light' : 'dark'} pt-5 pt-lg-0`}>
                    <div className="row justify-content-center about align-items-center">
                        <h1 className='text-danger' style={{ textAlign: 'center', fontFamily: 'serif' }}><strong style={{ webkitTextStroke: ' 1px green' }}>About</strong></h1>
                        <div className="col-lg-5" data-aos="flip-right">
                            <img src="Images/about.jpg" alt="" width="100%" />
                        </div>

                        <div className="col-lg-6" data-aos="zoom-in">
                            <h1 style={{ color: "green", fontFamily: "serif" }}>Hello,I am Apiket Mojankar</h1>
                            <p style={{ color: "green", fontFamily: "serif" }}>A Fresher Innovative Front End Developer with  Knowledge in building and maintaining responsive websites in the recruiting industry. Proficient in HTML, CSS, React, JavaScript; plus modern libraries and frameworks. Passionate about usability and possess working knowledge of basic coding language i.e C And C++.</p>
                            <table className={`table text-${mode ? 'light' : 'dark'}`}>
                                {
                                    info.map((e) => {
                                        return (
                                            <tbody key={e.id}>
                                                <tr>
                                                    <th style={{ color: "green", fontFamily: "serif" }}>{e.title}</th>
                                                    <td style={{ color: "green", fontFamily: "serif" }}>{e.data}</td>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                }
                            </table>
                            <button className='btn btn-outline-success'><a className={`text-${mode ? 'light' : 'success'}`} style={{ fontFamily: "serif" }} href="Images/APIKET RESUME .pdf" download>Download CV</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About