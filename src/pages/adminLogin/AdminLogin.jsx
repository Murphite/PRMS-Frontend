import React, { useState } from 'react'
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
    <div className='AdminPage flex overflow-y-hidden gap-x-40px'>
    <div className='Admin w-3/5 h-screen p-[151px 149px 187px 149px] bg-teal-600'>
        <div className="Intro w-[516px]   pt-[99px] mx-auto gap-x-4">
           <p className='Words font-[roboto] font-medium text-4xl tracking-normal text-center leading-[60px] text-white '>
            WELCOME BACK!
           </p>
           <p className='WordsTwo font-[roboto] text-base font-normal leading-6 tracking-normal text-center text-white '>
               Sign in to your account and continue your wellness journey. Your health <br/>and happiness are just a click away.
            </p>
       </div>
        
          <img className='images-design  bg-teal-600  p-24 w-3/5 mx-auto ' src={adminimage}/>
        
</div>

<div className='AdminLogin w-[40%] bg-white'>
    <p className='sign-in font-[roboto] text-4xl font-medium leading-15 tracking-normal text-center text-black pt-24 '>
        Sign In
    </p>
    
    
<div className="container p-5">

   <div className='cred px-[24px] border border-solid border-teal-600 py-[8px] w-full my-[20px] rounded-[8px] relative bg-teal-100 bg-opacity-50'>
    <label className='text-[#009688] block pb-1'>Hospital</label>
    <div className="flex items-center justify-between ">
        <input  type="text"  placeholder='Olad Hospital'  value={hospital} required class=" placeholder:text-black  font-[roboto] p-[8px 24px] rounded-[8px] bg-transparent outline-none w-full"  />
        <MdKeyboardArrowDown cursor={"pointer"}  fontSize={"20px"} onClick={()=>setHospitalDropDown(!hospitalDropDown)}/> 
{hospitalDropDown &&
<div className="absolute bg-white p-5 w-[100%] left-0 top-[72px]  ">
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
   <div className='cred px-[24px] py-[8px]  border border-solid border-teal-600 w-full my-[20px] rounded-[8px] bg-teal-100 bg-opacity-50'>
    <label className='text-[#009688] block pb-1'>Email</label>
     <input type="email" placeholder='Dianapana@gmail.com' class="bg-transparent font-[roboto] focus:outline-none w-full  placeholder:text-black"  required />
   </div>
   <div className='cred px-[24px] border border-solid border-teal-600 bg-teal-100 bg-opacity-50 py-[8px] w-full my-[20px] rounded-[8px]'>
    <label className='text-[#009688] block pb-1'>Password</label>
    <div className="flex items-center justify-between">
    <input type={passwordType} placeholder='***************'  required class="bg-transparent font-[roboto] focus:outline-none w-full placeholder:text-black" />
    {passwordType !=="text"? <FaEyeSlash  cursor={"pointer"}  fontSize={"20px"} onClick={()=>setPasswordType("text")}/>:<FaEye  cursor={"pointer"}  fontSize={"20px"} onClick={()=>setPasswordType("password")}/>}

   
   
    </div>
   </div>

   <p className='text-[#009688] text-[16px] font-[600] cursor-pointer'  >
    Forgot password?
   </p>
<div className='text-center w-[70%] mx-auto mt-10'>
   <button className='bg-[#009688] py-2 px-[20px] w-full text-white rounded-full font-[roboto]'>
    
    Sign in
    </button>
    
</div>
    
 

</div>
    
</div>

</div>
  )
}


