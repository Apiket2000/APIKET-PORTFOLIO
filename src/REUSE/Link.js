import React, { useContext } from 'react'
import { Data } from '../Store'

const Links = (props) => {

    let {mode}=useContext(Data)

    return (
        <>
            <li className="nav-item">
                <a className={`nav-link active1 text-${mode?'light':'success'} fs-5`} style={{fontFamily:"serif"}} aria-current="page" href={props.link}>{props.name}</a>
            </li>
        </>
    )
}

export default Links