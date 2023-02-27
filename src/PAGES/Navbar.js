import React, { useContext } from 'react'
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";
import { SiAcm } from "react-icons/si";
import Links from '../REUSE/Link';

import { Data } from '../Store';

const Navbar = () => {

    let {mode,setMode}=useContext(Data)

    return (
        <>
            <nav className={`fixed-top navbar navbar-expand-lg bg-${mode?'dark':'light'} `} >
                <div className="container-fluid">
                    <SiAcm style={{fontSize:'50px',color:'green',border:"2px solid green"}} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav text-center mx-auto me-auto mb-2 mb-lg-0" >
                            <Links  name="Home" link="#Home" />
                            <Links name="About" link="#About" />
                            <Links name="Skills" link="#Skills" />
                            <Links name="Contact" link="#Contact" />
                        
                        </ul>
                        <div className="d-flex justify-content-center" role="search">
                            <button style={{border:'none',background:'none'}} onClick={()=>setMode(!mode)}>{mode?<BsFillSunFill style={{fontSize:'25px'}} className="text-warning" />:<BsFillMoonFill style={{fontSize:'25px'}} />}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

