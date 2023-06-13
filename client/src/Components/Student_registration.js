import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import name from "../res/name.jpg";
import Mail from "../res/email.jpg";

import company from "../res/company.jpg";
import branch from "../res/branch.jpg";
import year from "../res/year.jpg";
import role from "../res/role.jpg";
import username from "../res/username.jpg";
import password from "../res/password.jpg";
export const Student_registration = () => {
  const {
    register,
    formState:{errors},
    handleSubmit,
   
  } = useForm({
    mode:"all",
  });
  console.log("error is: ",errors);
  const [isalumni, setisalumni] = useState(false);

  const handleCheckboxChange = (event) => {
    setisalumni(event.target.checked);
  };
  const [ischecked, setischecked] = useState(false);
  const formdata=new FormData();
  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}
  const onSubmit=(data)=>
  {
    console.log(data.email);
     formdata.append("name",data.name);
     formdata.append("email",data.email);
     formdata.append("username",data.username);
     formdata.append("password",data.password);
     if(isalumni)
     {
      formdata.append("company",data.company);
      formdata.append("role",data.role);
      formdata.append("year",data.year);
      formdata.append("branch",data.branch);
      axios.post("http://localhost:3001/alumni/register",formdata,config)
      .then((response)=>{
        alert(response.data.message);
      }).catch((err)=>{
          alert("invalid");
      })
   
     }
     else
     {
      axios.post("http://localhost:3001/student/register",formdata,config)
     .then((response)=>{
       alert(response.data.message);
     }).catch((err)=>{
         alert("invalid");
     })
     }
     
    
  }
  
  // const register = () => {
  //   if (password !== c_password) {
  //     alert("Password Does Not Match");
  //   } else {
  //     if(isChecked)
  //     {
  //       Axios.post("http://localhost:3001/alumni/register", {
  //       fname: fname,
  //       lname: lname,
  //       e_add: e_add,
  //       contact_number:contact_number,
  //       isChecked:isChecked,
  //       company_name:company_name,
  //       role:role,
  //       g_year:g_year,
  //       branch:branch,
  //       password:password

  //     }).then((response) => {
  //       alert(response.data.message);
  //     });
  //     }
  //     else{
  //       Axios.post("http://localhost:3001/student/register", {
  //           fname: fname,
  //           lname: lname,
  //           e_add: e_add,
  //           contact_number:contact_number,
  //           isChecked:isChecked,
  //           password:password

  //         }).then((response) => {
  //           alert(response.data.message);
  //         });
  //     }

  //   }
  // };

//   handleSubmit=(data)=>{
//     console.log(data);
//  }
  return (

    <div
      style={{
        marginTop: "15px",
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
        <div className="student_container" >
          <div
            style={{
              display: "flex",
              alignSelf: "center",
              width: "100%",
             
            }}
          >
              <div style={{width:"45%",marginRight:"28px" }} className="checker">
            <div
              className="registration_input"
            

            >
              <img src={name} className="registartion_image" />
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
                  {...register("name",{
                    required:"This field is required"
                  })}
                  
                  autoComplete="off"
                />

              </div>
            </div>
            <p>{errors.name?.message}</p>
            </div>
            <div style={{width:"45%" }} className="checker">
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
                  {...register("email",{
                    required:"This field is required",
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
              marginBottom: "20px",
            }}
          >
            <div>Alumni</div>
            <div className="checkbox-wrapper-6" style={{ marginLeft: "10px" }}>
              <input
                className="tgl tgl-light"
                id="cb1-6"
                type="checkbox"
                onChange={handleCheckboxChange}
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
                 <div style={{width:"45%" , marginRight:"28px" }} className="checker">
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
                        {...register("company",{
                          required:"This field is required"
                        })}
                        autoComplete="off"
                      />
                  
                  </div>
                  </div>
                  <p>{errors.company?.message}</p>
                </div>
                <div style={{width:"45%" }} className="checker">
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
                       {...register("role",{
                        required:"This field is required"
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
                  <div style={{width:"45%" ,marginRight:"28px"}} className="checker">
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
                        {...register("year",{
                          required:"This field is required"
                        })}
                        autoComplete="off"
                      />
                   
                  </div>
                  </div>
                  <p>{errors.year?.message}</p>
                </div>
                <div style={{width:"45%" }} className="checker">
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
                        {...register("branch",{
                          required:"This field is required"
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
             
            }}
          >
            <div style={{width:"45%", marginRight: "28px" }}className="checker">
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
                      required:"This field is required",
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
            
             <div style={{width:"45%" }} className="checker">
            <div
              className="registration_input"
              // style={{ width: "100%" }}
             
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
                      required:"This field is required",
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
                {...register("terms",{
                  required:"You must agree to the terms and conditions"
                })}
                onClick={() => {
                  setischecked(!ischecked);
                }}
              />

              <p style={{ fontSize: "12px"  ,fontFamily:"sans-serif",fontSize:"13.5px"}}>
                I hereby by agree to terms and conditions and whatever
                information is asked for i have provided the right information
              </p>
              
              
              
          
          </div>
          <p style={{margin:"0",padding:"0",color:"red",fontSize:"12px"}}>{errors.terms?.message}</p>
          
        
        {ischecked ? (<><button id="registration_button" onClick={handleSubmit(onSubmit)}>Next</button></>) : (<button  id="registration_button" style={{ backgroundColor:"#f7f7f7",color:" #767c80" }}onClick={handleSubmit(onSubmit)}>Next</button>)}


        </div>
    
    </div>



  )
}
