import React, { useState } from 'react'
import "../index.css";
import adminimage from '../../../Images/adminpng.png';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


export const AdminLogin = () => {
    const[passwordType, setPasswordType]= useState("password")
    const HospitalList = ["Olad Hospital", "LifeCare Hospital", "Nuradeen Hospital", "Rockville Hospital"]
    const [hospitalDropDown, setHospitalDropDown]=useState(false)
    const [hospital, setHospital]=useState("")
  return (
    <div className='AdminPage'>
    <div className='Admin'>
        <div className="Intro">
           <p className='Words'>
            WELCOME BACK!
           </p>
           <p className='WordsTwo'>
               Sign in to your account and continue your wellness journey. Your health <br/>and happiness are just a click away.
            </p>
       </div>
        
          <img className='images-design' src={adminimage}/>
        
</div>

<div className='AdminLogin'>
    <p className='sign-in'>
        Sign In
    </p>
    
    
<div className="container">

   <div className='cred px-[24px] py-[8px] w-full my-[20px] rounded-[8px] relative'>
    <label className='text-[#009688] block pb-1'>Hospital</label>
    <div className="flex items-center justify-between ">
        <input  type="text" placeholder='Olad Hospital' value={hospital} required />
        <MdKeyboardArrowDown cursor={"pointer"}  fontSize={"20px"} onClick={()=>setHospitalDropDown(!hospitalDropDown)}/> 
{hospitalDropDown &&
<div className="absolute bg-white p-5 w-[120%] left-0 top-[72px] ">
    {
        HospitalList.map(hospital=>(
            <p className="cursor-pointer my-2" onClick={()=>{
                setHospital(hospital)
                setHospitalDropDown(false)
            }}>{hospital}</p>
        ))
    }
</div>

}
    </div>
 
   </div>
   <div className='cred px-[24px] py-[8px] w-full my-[20px] rounded-[8px]'>
    <label className='text-[#009688] block pb-1'>Email</label>
     <input type="email" placeholder='Dianapana@gmail.com' required />
   </div>
   <div className='cred px-[24px] py-[8px] w-full my-[20px] rounded-[8px]'>
    <label className='text-[#009688] block pb-1'>Password</label>
    <div className="flex items-center justify-between">
    <input type={passwordType} placeholder='***************' required />
    {passwordType !=="text"? <FaEyeSlash  cursor={"pointer"}  fontSize={"20px"} onClick={()=>setPasswordType("text")}/>:<FaEye  cursor={"pointer"}  fontSize={"20px"} onClick={()=>setPasswordType("password")}/>}

   
   
    </div>
   </div>

   <p className='text-[#009688] text-[16px] font-[600] cursor-pointer'  >
    Forgot password?
   </p>
<div className='text-center w-[70%] mx-auto mt-10'>
   <button className='bg-[#009688] py-2 px-[20px] w-full text-white rounded-full'>
    
    Sign in
    </button>
    
</div>
    
 

</div>
    
</div>

</div>
  )
}
