import React, { useState } from 'react'

import background from '../res/Home.jpg';
import logo from '../res/logo.jpg';
//import "bootstrap/dist/css/bootstrap.css";
//import { Registration } from '../Components/Registration';
export const Home = () => {
    const [b, setb] = useState(false);
    const [y, sety] = useState(true);

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
                                    <input type='text' placeholder='Email or username' className='login_input_fields'></input>
                                    <input type='text' placeholder='Password' className='login_input_fields'></input>
                                    <h3 style={{ alignSelf: "flex-end", fontSize: "15px", color: "#617dcc" ,cursor:"pointer"}}>Forogt password?</h3>
                                    <button type='submit' style={{cursor:"pointer"}}>SIGN IN</button>
                                    <h3 style={{ fontSize: "15px", marginTop: "5px", fontWeight: "initial" }}>Not a member?<span style={{ color: "#617dcc", fontWeight: "500",cursor:"pointer" }} onClick={(b) => { setb(true) }}> Register</span></h3>
                                </div>



                            </div>
                        </>) : ("")}

                {b ? (<>
                    <div className='registration_container'>
                        <div className='registration_menu' style={{ alignSelf: "flex-start", justifySelf: "flex-start" }}>
                            <div className='backArrow' onClick={(b) => { setb(false) }}><span style={{fontWeight:"800"}}>&#8592;</span></div>
                            {y?(<><button className='button1' onClick={(y)=>sety(true)}>Student/Alumni</button></>):(<><button className='button1' style={{ backgroundColor: "#e7e7e7" }} onClick={(y)=>{sety(true)}}>Student/Alumni</button></>)}
                            {y?(<><button className='button2' style={{ backgroundColor: "#e7e7e7" ,borderRadius:"0px 10px 0px 0px"}} onClick={(y)=>{sety(false)}}>Club</button></>):(<><button className='button2' >Club</button></>)}
                        </div>
                    </div>
                </>) : ("")}


            </div>
        </div>
    )
}

// onClick={setb(true)}
