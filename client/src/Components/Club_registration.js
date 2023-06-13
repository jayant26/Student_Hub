import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import name from "../res/name.jpg";
import Mail from "../res/email.jpg";
import phone from "../res/phone.jpg";
import club from "../res/club.jpg";
import username from "../res/username.jpg";
import password from "../res/password.jpg";
export const Club_registration = () => {
  const [ischecked, setischecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  const formdata=new FormData();
  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}
  

  const onSubmit=(data)=>
  {
    console.log(data.email);
     formdata.append("club",data.club);
     formdata.append("email",data.email);
     formdata.append("name",data.c_name);
     formdata.append("number",data.number);
     formdata.append("detail",data.detail);
     formdata.append("username",data.username);
     formdata.append("password",data.password);
      axios.post("http://localhost:3001/club/register",formdata,config)
      .then((response)=>{
        alert(response.data.message);
      }).catch((err)=>{
          alert("invalid");
      })
   
     
     
    
  }
  return (
    <div style={{ marginTop: "10px",  display: "flex", height: "100%" ,flexDirection:"column",alignItems:"center"}} >
    <div className='student_container'>

    <div
            style={{
              display: "flex",
              alignSelf: "center",
              width: "100%",
             
            }}
          >
             <div style={{width:"45%", marginRight: "32px" }}className="checker">
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
                  <label for="club">Club Name</label>
                </div>

                <input
                  type="text"
                  id="club"
                  style={{ width: "70%" }}
                  {...register("club",{
                    required:"This field is required"
                  })}
                  autoComplete="off"
                />

              </div>
              </div>
              <p>{errors.club?.message}</p>
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
                  style={{ width: "100%" }}
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
             
            }}
          >
             <div style={{width:"45%", marginRight: "32px" }}className="checker">
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
            <p style={{margin:"0",padding:"0",color:"red",fontSize:"12px"}}>{errors.detail?.message}</p>
        <div
            style={{
              display: "flex",
              alignSelf: "center",
              width: "100%",
              marginTop:"20px"
             
            }}
          >
            <div style={{width:"45%", marginRight: "32px" }}className="checker">
            <div
              className="registration_input"
              // style={{ width: "100%" }}
              
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
                    style={{ width: "100%" }}
                    
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

              <p style={{ fontSize: "12px"  ,fontFamily:"sans-serif",fontSize:"13.5px" ,width:"90%"}}>
                I hereby by agree to terms and conditions and whatever
                information is asked for i have provided the right information
              </p>
            
          </div>
          <p style={{margin:"0",padding:"0",color:"red",fontSize:"12px"}}>{errors.terms?.message}</p>
        
          {ischecked ? (<><button id="registration_button" onClick={handleSubmit(onSubmit)}>Next</button></>) : (<button  id="registration_button" style={{ backgroundColor:"#f7f7f7",color:" #767c80" }}onClick={handleSubmit(onSubmit)}>Next</button>)}

       



       
        {/* </form> */}
    </div>
  
   
</div>
  )
}
