import React from 'react'

export const Club_registration = () => {
  return (
    <div style={{ marginTop: "5px",  display: "flex", height: "100%" ,flexDirection:"column",alignItems:"center"}} >
    <div className='Student_container'>


        <div className='necessary_details'>
            <input type='text' placeholder='Club Name' required></input>
            <input type='text' placeholder='Coordinator Name'  ></input>
        </div>
        <div className='necessary_details'>
            <input type='text' placeholder="Institute Email Address" required ></input>
            <input type='text' placeholder="Coordinator Contact Number" required ></input>
        </div>
        <textarea placeholder="Description" class="description" required></textarea>
       
        <div className='necessary_details'>
            <input type='password' placeholder="Password" required ></input>

            <input type='password' placeholder="Confirm Password" required ></input>

        </div>



       
        {/* </form> */}
    </div>
    <div>
    <button type='submit'  style={{ cursor: "pointer" } }className="register_button" >Register</button></div>
</div>
  )
}
