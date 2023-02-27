import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Data } from '../Store'
import './App.css'
import { MdLocationOn,MdEmail } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    let{mode}=useContext(Data)


    let { register, handleSubmit, formState: { errors }, reset } = useForm()

    let Submit = (data, e) => {
        e.preventDefault()
        axios.post("https://portfolio-project-cc213-default-rtdb.firebaseio.com//contact.json", data)
        reset()
    }

    return (
        <>
            <div id="Contact">
                <div className={`container-fluid pt-5 pt-lg-0 bg-${mode?'dark':'light'}`}>
                    <div className="row contact align-items-center ">
                    <h1 className='text-danger' style={{ textAlign: 'center', fontFamily: 'serif' }}><strong style={{ webkitTextStroke: ' 1px green' }}>Contact</strong></h1>
                        <div className="col-lg-6" data-aos="zoom-in-right">
                            <h1 style={{ color: "green", fontFamily: "serif" }}>CONTACT INFO.</h1>
                            <p style={{ color: "green", fontFamily: "serif" }}>You are more than welcome to leave your contact info and we will be in touch shortly.</p>
                            <br />
                            <h5 style={{ fontFamily: 'serif', color: "green" }}><MdLocationOn/>H/N 759/1,Dhangarpura,Hingna,Nagpur-441110</h5>
                            <br />
                            <h5 style={{ fontFamily: 'serif', color: "green" }}><AiTwotonePhone/>+91-8080448251</h5>
                            <br />
                            <h5 style={{ fontFamily: 'serif', color: "green" }}><AiTwotonePhone/>+91-7350127256</h5>
                            <br />
                            <h5 style={{ fontFamily: 'serif', color: "green" }}><MdEmail/>apiketmojankar@gmail.com</h5>
                        </div>
                        <div className="col-lg-6" data-aos="zoom-in-right">
                            <form action="" onSubmit={handleSubmit(Submit)} className='p-3 shadow'>
                                <label htmlFor="" className='form-label fw-bolder' style={{ color: ' green',fontFamily:"serif" }}>Enter Name</label>
                                <input {...register("Name", { required: "this field is required!" })} type="text" className='form-control' />
                                <p className='fw-bolder' style={{ color: '#E11845' }}>{errors.Name?.message}</p>
                                <label htmlFor="" className='form-label fw-bolder' style={{ color: ' green',fontFamily:"serif" }}>Enter Email</label>
                                <input {...register("Email", { required: "this field is required!" })} type="email" className='form-control' />
                                <p className='fw-bolder' style={{ color: '#E11845' }}>{errors.Email?.message}</p>
                                <label htmlFor="" className='form-label fw-bolder' style={{ color: ' green',fontFamily:"serif" }}>Enter Phone</label>
                                <input {...register("Phone", { required: "this field is required!", minLength: { value: 10, message: "min 10 digits required!" }, maxLength: { value: 10, message: "max 10 digits required!" } })} type="number" className='form-control' />
                                <p className='fw-bolder' style={{ color: '#E11845' }}>{errors.Phone?.message}</p>
                                <label htmlFor="" className='form-label fw-bolder' style={{ color: ' green',fontFamily:"serif" }}>Any Query</label>
                                <input {...register("Query", { required: "this field is required!" })} type="text" className='form-control' />
                                <p className='fw-bolder' style={{ color: '#E11845' }}>{errors.Query?.message}</p>
                                <input className='btn btn-outline-success' type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact