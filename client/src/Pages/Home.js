import React, { useState } from 'react'
import Axios from "axios";
import background from '../res/Home.jpg';
import logo from '../res/logo.jpg';
import { useForm } from "react-hook-form";
import { Student_registration } from '../Components/Student_registration';
import { json, useNavigate } from 'react-router-dom';
//import "bootstrap/dist/css/bootstrap.css";
//import { Registration } from '../Components/Registration';
export const Home = () => {
    const navigate=useNavigate();
    const [b, setb] = useState(false);
    const [y, sety] = useState(true);
    const {
        register,
        formState: { errors },
        handleSubmit,
    
      } = useForm({
        mode: "all",
      });
    const onSubmit=(data)=>{
        Axios.post('http://localhost:3001/user/login',data).then((response)=>{
           
                console.log(response.data.token);
                localStorage.setItem("jwttoken",response.data.token);
                navigate('/home',{state:{_id:response.data._id}});
            
            }).catch(error=>{
            if(error.response&&error.response.status==401)
            {
                alert("Inavlid username or password");
            }
        })
    }
    // + encodeURIComponent(JSON.stringify(response.data._id))
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="Homepage_main_container">
                <div className='Homepage_image_container'>
                    <img src={background} className='Homepage_image' ></img>

                </div>
                {!b ?
                    (
                        <>
                            <div className='Homepage_login_container'>

                                <img src={logo} className='logo'></img>
                                <h1 className='title'>Student Hub</h1>
                                <div className='login_container'>
                                    <div style={{width:"100%"}} className='login_fields'>
                                    <input type='text' placeholder='Email or username' className='login_input_fields' {...register("cred",{
                                        required:"Username or email is required"
                                    })}/>
                                    <p>{errors.cred?.message}</p>
                                    </div>
                                    <div style={{width:"100%"}} className='login_fields'>
                                    <input type='password' placeholder='Password' className='login_input_fields' {...register("password",{
                                        required:"Password is required"
                                    }
                                    )}/>
                                    <p>{errors.password?.message}</p>
                                    </div>
                                    <h3 style={{ alignSelf: "flex-end", fontSize: "15px", color: "#617dcc", cursor: "pointer" }}>Forogt password?</h3>
                                    <button type='submit' style={{ cursor: "pointer" }} onClick={handleSubmit(onSubmit)}>SIGN IN</button>
                                    <h3 style={{ fontSize: "15px", marginTop: "5px", fontWeight: "initial" }}>Not a member?<span style={{ color: "#617dcc", fontWeight: "500", cursor: "pointer" }} onClick={(b) => { setb(true) }}> Join Us</span></h3>
                                </div>



                            </div>
                        </>) : ("")}

                {b ? (<><div className='registration_container'>
                    <div className='registration_menu'>
                        <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                            <div className='backArrow' onClick={(b) => { setb(false) }} style={{ alignSelf: "flex-start" }}>
                                <span style={{ fontWeight: "800" }}>&#8592;</span>
                            </div>
                            <h1 style={{ margin: "auto" }}>Registration Form</h1>
                        </div>
                        <Student_registration />
                       

                    </div></div></>) : null}


            </div>
        </div>

    )
}

// onClick={setb(true)}
