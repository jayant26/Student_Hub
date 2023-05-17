import React from 'react';
import { useState } from 'react';
import Axios from "axios";
export const Student_registration = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [e_add, sete_add] = useState('');
  const [contact_number, setcontact_number] = useState('');
  const [company_name, setcompany_name] = useState('');
  const [role, setrole] = useState('');
  const [g_year, setg_year] = useState('');
  const [branch, setbrnch] = useState('');
  const [password, setpassword] = useState('');
  const [c_password, setc_password] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    setc_password(confirmPassword);
    setPasswordMatch(password === confirmPassword);
  };


  const register = () => {
    if (password !== c_password) {
      alert("Password Does Not Match");
    } else {
      if(isChecked)
      {
        Axios.post("http://localhost:3001/register", {
        fname: fname,
        lname: lname,
        e_add: e_add,
        isChecked:isChecked,
        contact_number:contact_number,
        company_name:company_name,
        role:role,
        g_year:g_year,
        branch:branch,
        password:password
        
      }).then((response) => {
        alert(response.data.message);
      });
      }
      else{
        Axios.post("http://localhost:3001/register", {
            fname: fname,
            lname: lname,
            e_add: e_add,
            isChecked:isChecked,
            branch:branch,
            password:password
            
          }).then((response) => {
            alert(response.data.message);
          });
      }  
      
    }
  };


  return (
    <div
      style={{
        marginTop: '5px',
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className="Student_container">
        <div className="necessary_details">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              setfname(e.target.value);
            }}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => {
              setlname(e.target.value);
            }}
          />
        </div>
        <div className="necessary_details">
          <input
            type="email"
            placeholder="Institute Email Address"
            onChange={(e) => {
              sete_add(e.target.value);
            }}
            required
          />
          <input
            type="text"
            placeholder="Contact Number"
            onChange={(e) => {
              setcontact_number(e.target.value);
            }}
            required
          />
        </div>
        <div style={{ display: 'flex' }}>
          <div>Alumni</div>
          <div className="checkbox-wrapper-6" style={{ marginLeft: '10px' }}>
            <input
              className="tgl tgl-light"
              id="cb1-6"
              type="checkbox"
              onChange={handleCheckboxChange}
            />
            <label className="tgl-btn" htmlFor="cb1-6"></label>
          </div>
        </div>
        {isChecked ? (
          <>
            <div className="necessary_details">
              <input
                type="text"
                placeholder="Company Name"
                onChange={(e) => {
                  setcompany_name(e.target.value);
                }}
                required
              />
              <input
                type="text"
                placeholder="Role"
                onChange={(e) => {
                  setrole(e.target.value);
                }}
                required
              />
            </div>
            <div className="necessary_details">
              <input
                type="text"
                placeholder="Graduation Year"
                onChange={(e) => {
                  setg_year(e.target.value);
                }}
                required
              />
              <input
                type="text"
                placeholder="Major/Field of Study"
                onChange={(e) => {
                  setbrnch(e.target.value);
                }}
                required
              />
            </div>
          </>
        ) : null}

        <div className="necessary_details">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleConfirmPasswordChange}
            required
            style={{
              border: passwordMatch ? '1px solid #ccc' : '1px solid red',
            }}
          />
         
        </div>
        {!passwordMatch &&password.length!=0 && (
            <div style={{ color: 'red' }}>Passwords do not match</div>
          )}
      </div>
      <div>
        <button
          type="submit"
          style={{ cursor: 'pointer' }}
          className="register_button"
          onClick={register}
        >
          Register
        </button>
      </div>
    </div>
  );
};
