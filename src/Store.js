import React, { createContext, useState } from 'react'

let Data=createContext()

const Store = (props) => {

    let [mode,setMode]=useState(false)


  return (
    <>
        <Data.Provider value={{mode,setMode}}>
            {props.children}
        </Data.Provider>
    </>
  )
}

export default Store
export {Data}