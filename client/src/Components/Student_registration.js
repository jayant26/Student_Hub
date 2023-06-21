import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import phone from "../res/phone.jpg";
import name from "../res/name.jpg";
import Mail from "../res/email.jpg";
import company from "../res/company.jpg";
import branch from "../res/branch.jpg";
import year from "../res/year.jpg";
import role from "../res/role.jpg";
import username from "../res/username.jpg";
import password from "../res/password.jpg";
import OtpInput from './OtpInput';
import Axios from "axios";
import emailjs from '@emailjs/browser';
import club from "../res/club.jpg";

export const Student_registration = () => {
  


  const [otp,setotp]=useState(-1);
  const [otpValue, setOtpValue] = useState(-1);

  const handleOtpChange = (otp) => {
    setOtpValue(otp);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,

  } = useForm({
    mode: "all",
  });

  //console.log("error is: ", errors);
  const [isalumni, setisalumni] = useState(false);
  const [isclub, setisclub] = useState(false);
  const [isok, setisok] = useState(false);

  const handleAlumni = (event) => {
    setisalumni(event.target.checked);
    if (isclub) {
      setisclub(!event.target.checked);
    }

  };
  const handleClub = (event) => {
    setisclub(event.target.checked);
    if (isalumni) {
      setisalumni(!event.target.checked);
    }

  }
  const [ischecked, setischecked] = useState(false);
  


  const email_checker = (email) => {
    const part = email.split('@')[1];
    if (part === "iiitdmj.ac.in") {
      return true;
    }
    else {
      return false;
    }
  }
  function generateRandomNumber() {
    const min = 100000; // Minimum 6-digit number
    const max = 999999; // Maximum 6-digit number
  
    // Generate a random number between min and max (inclusive)
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    // Ensure the generated number doesn't start with 0
    while (randomNumber.toString()[0] === '0') {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    return randomNumber;
  }

 
  const [mydata,setmydata]=useState({});

  const onSubmit = async (data) => {
    setmydata({...data,isclub:isclub,isalumni:isalumni});
    await exist(data.email, data.username);  
  };
  
  const exist = async (email, username) => {
    try {
      const response = await Axios.post("http://localhost:3001/user/register/check", { email: email, username: username });
      console.log(response.data);
  
      if (response.data.message === "No entries found") {
        setisok(true);
        setotp(generateRandomNumber());
        console.log(otp);
  
      
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleotpverify = () => {
    console.log(otp);
    console.log(otpValue);
    if(otp==otpValue)
    {
      Axios.post("http://localhost:3001/user/register",mydata).then((response)=>{
          alert(response.data.message);
        })
    }
    else{
      alert("Invalid Otp , Please Enter again");
    }
  };
  








    // if (email_checker(data.email)) {
      

    //   // exist_usernmae(data.username);
    // }
    // else {
    //   alert("Enter a valid email address provided by your institute");
    // }
   


  





  return (
    <>

      {!isok ? (<>
        <div
          style={{
            // marginTop: "px",
            display: "flex",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

          <div className="student_container" >
            <div
              style={{
                display: "flex",
                alignSelf: "center",
                width: "100%",

              }}
            >
              <div style={{ width: "45%", marginRight: "28px" }} className="checker">
                <div
                  className="registration_input"


                >
                  <img src={club} className="registartion_image" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <label for="name">Name</label>
                    </div>

                    <input
                      type="text"
                      id="name"
                      style={{ width: "100%" }}
                      {...register("name", {
                        required: "This field is required"
                      })}

                      autoComplete="off"
                    />

                  </div>
                </div>
                <p>{errors.name?.message}</p>
              </div>
              <div style={{ width: "45%" }} className="checker">
                <div
                  className="registration_input"

                >
                  <img src={Mail} className="registartion_image" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <label for="email">Institute Email Address</label>
                    </div>

                    <input
                      type="text"
                      id="email"
                      style={{ width: "70%" }}
                      {...register("email", {
                        required: "This field is required",
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Invalid Email Address",
                        },
                      })}
                      autoComplete="off"
                    />

                  </div>
                </div>
                <p>{errors.email?.message}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignSelf: "center",
                width: "100%",
                marginBottom: "15px",
              }}
            >
              <div>
                Alumni
              </div>
              <div className="checkbox-wrapper-6" style={{ marginLeft: "10px" }}>
                <input
                  className="tgl tgl-light"
                  id="cb1-6"
                  type="checkbox"
                  onChange={handleAlumni}
                  checked={isalumni}
                />
                <label className="tgl-btn" htmlFor="cb1-6"></label>
              </div>
            </div>
            {isalumni ? (
              <>
                <div
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ width: "45%", marginRight: "28px" }} className="checker">
                    <div
                      className="registration_input"


                    >
                      <img src={company} className="registartion_image" />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <div>
                          <label for="company">Company</label>
                        </div>

                        <input
                          type="text"
                          id="company"
                          style={{ width: "100%" }}
                          {...register("company", {
                            required: "This field is required"
                          })}
                          autoComplete="off"
                        />

                      </div>
                    </div>
                    <p>{errors.company?.message}</p>
                  </div>
                  <div style={{ width: "45%" }} className="checker">
                    <div
                      className="registration_input"

                    >
                      <img src={role} className="registartion_image" />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <div>
                          <label for="role">Role</label>
                        </div>

                        <input
                          type="text"
                          id="role"
                          style={{ width: "70%" }}
                          {...register("role", {
                            required: "This field is required"
                          })}
                          autoComplete="off"
                        />

                      </div>
                    </div>
                    <p>{errors.role?.message}</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ width: "45%", marginRight: "28px" }} className="checker">
                    <div
                      className="registration_input"


                    >
                      <img src={year} className="registartion_image" />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <div>
                          <label for="year">Graduation Year</label>
                        </div>

                        <input
                          type="text"
                          id="year"
                          style={{ width: "100%" }}
                          {...register("year", {
                            required: "This field is required"
                          })}
                          autoComplete="off"
                        />

                      </div>
                    </div>
                    <p>{errors.year?.message}</p>
                  </div>
                  <div style={{ width: "45%" }} className="checker">
                    <div
                      className="registration_input"


                    >
                      <img src={branch} className="registartion_image" />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <div>
                          <label for="branch">Branch</label>
                        </div>

                        <input
                          type="text"
                          id="branch"
                          style={{ width: "70%" }}
                          {...register("branch", {
                            required: "This field is required"
                          })}
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <p>{errors.branch?.message}</p>
                  </div>
                </div>
              </>
            ) : null}
            <div
              style={{
                display: "flex",
                alignSelf: "center",
                width: "100%",
                // marginBottom: "20px",
              }}
            >

              <div>
                Club&nbsp;&nbsp;&nbsp;
              </div>
              <div className="checkbox-wrapper-6" style={{ marginLeft: "10px" }}>
                <input
                  className="tgl tgl-light"
                  id="cb1-7"
                  type="checkbox"
                  onChange={handleClub}
                  checked={isclub}
                />
                <label className="tgl-btn" htmlFor="cb1-7"></label>
              </div>
            </div>
            {isclub?(<>  <div
            style={{
              display: "flex",
              alignSelf: "center",
              width: "100%",
             marginTop:"20px"
             
            }}
          >
             <div style={{width:"45%", marginRight: "32px" }}className="checker">
            <div className="registration_input">
              <img src={name} className="registartion_image" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div>
                  <label for="name">Coordinator Name</label>
                </div>

                <input
                  type="text"
                  id="name"
                  style={{ width: "70%" }}
                  {...register("c_name",{
                    required:"This field is required"
                  })}
                  autoComplete="off"
                />

              </div>
              </div>
              <p>{errors.c_name?.message}</p>
            </div>
            <div style={{width:"45%" }} className="checker">
            <div
              className="registration_input"
          

            >
              <img src={phone} className="registartion_image" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                  
                <div>
                  <label for="number">Coordinator Contact Number</label>
                </div>

                <input
                  type="text"
                  id="number"
                  style={{ width: "100%" }}
                  {...register("number",{
                    required:"This field is required"
                  })}
                  autoComplete="off"
                />

              </div>
            </div>
            <p>{errors.number?.message}</p>
            </div>
          </div>
        <textarea placeholder="Description" class="description" 
        {...register("detail",{
          required:"This field is required"
        })}
            ></textarea>
            <p style={{margin:"0",padding:"0",color:"red",fontSize:"12px"}}>{errors.detail?.message}</p></>):null}


            <div
              style={{
                display: "flex",
                alignSelf: "center",
                width: "100%",
                marginTop:"20px"

              }}
            >
              <div style={{ width: "45%", marginRight: "28px" }} className="checker">
                <div
                  className="registration_input"


                >
                  <img src={username} className="registartion_image" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <label for="username">Username</label>
                    </div>

                    <>
                      <input
                        type="text"
                        id="username"
                        style={{ width: "100%" }}
                        {...register("username", {
                          required: "This field is required",
                          minLength: {
                            value: 3,
                            message: "Username must be atleast 3 characters long...",
                          },
                          maxLength: {
                            value: 30,
                            message: "Username must be atmost 30 characters long...",
                          },
                        })}
                        autoComplete="off"
                      />

                    </>

                  </div>

                </div>
                <p>{errors.username?.message}</p>
              </div>

              <div style={{ width: "45%" }} className="checker">
                <div
                  className="registration_input"


                >
                  <img src={password} className="registartion_image" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <label for="password">Password</label>
                    </div>

                    <input
                      type="password"
                      id="password"
                      style={{ width: "70%" }}
                      {...register("password", {
                        required: "This field is required",
                        pattern: {
                          value:
                            /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                          message:
                            "Password Must Contain Atleast 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
                        },
                      })}
                      autoComplete="off"
                    />

                  </div>
                </div>
                <p>{errors.password?.message}</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignSelf: "center",
                width: "100%",

              }}
            >

              <input
                type="checkbox"
                style={{
                  width: "20px",
                  marginRight: "15px",
                }}
                {...register("terms", {
                  required: "You must agree to the terms and conditions"
                })}
                onClick={() => {
                  setischecked(!ischecked);
                }}
              />

              <p style={{ fontSize: "12px", fontFamily: "sans-serif", fontSize: "13.5px" }}>
                I hereby by agree to terms and conditions and whatever
                information is asked for i have provided the right information
              </p>




            </div>
            <p style={{ margin: "0", padding: "0", color: "red", fontSize: "12px" }}>{errors.terms?.message}</p>


            {ischecked ? (<><button id="registration_button" onClick={handleSubmit(onSubmit)}>Next</button></>) : (<button id="registration_button" style={{ backgroundColor: "#f7f7f7", color: " #767c80" }} onClick={handleSubmit(onSubmit)}>Next</button>)}


          </div>

        </div>

      </>) : (<div id="big-box">
    
        <h3 class="otp-message">Enter the 6 digit OTP sent to your email to complete the registration</h3> <div id="small-box">
          <OtpInput length={6} onChange={handleOtpChange} />
          <button className="resend-button" onClick={handleotpverify}>
        Verify
      </button>
        </div>
      </div>)}


    </>

  )
}

