import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="container-fluid bg-dark">
            <div className="row justify-content-evenly py-5">
                <div className="col-md-5 text-light">
                    <h5 style={{ fontFamily: 'serif', color: "green" }}>Copyright@2022 Portfolio. All Rights Reserved.</h5>
                </div>
                <div className="col-md-5 text-light">
                    <h5 style={{ fontFamily: 'serif', color: "green" }}>Designed By <span className='text-warning'>APIKET C. MOJANKAR</span> </h5>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer