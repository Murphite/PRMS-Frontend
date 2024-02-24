import React from 'react';
import image from '../../assets/frame.png';

const ForgotPassword = () => {
  return (
    <section className='w-full h-screen grid grid-cols-[60%_40%]'>
      <div className='bg-[#009688] flex flex-col justify-center items-center'>
        <div className='text-[#ffffff] text-center w-[400px]'>
          <h2 className='text-3xl font-bold'>Forgot Your Password?</h2>
          <p className='text-xs my-6'>No worries! Enter your email address, and we'll send you a link to reset your password. Regain access to your account and continue your wellness journey with us.</p>
        </div>
        <div>
          <img className='h-[350px]' src={image} alt="frame"/>
        </div>
      </div>
      <div className='flex flex-col items-center mt-16'>
        <h2 className='text-3xl font-bold'>Forgot Password</h2>
        <form className='mt-4'>
          <div className='flex flex-col relative mt-4'>
            <label className='mx-3 absolute text-xs text-[#009688] font-bold' for="email">Email</label>
            <input className='bg-[#009688]/[.08] h-[30px] w-[400px] py-5 px-3 text-xs font-bold border border-[#009688] focus:outline-none rounded-md' type="email"/>
          </div>
          <br/>
          <span className='flex justify-center mt-6'>
            <button className='bg-[#009688] text-[#ffffff] w-[250px] py-2 px-10 rounded-[15px]'>
              CONTINUE
            </button>
          </span>
        </form>
      </div>
    </section>
  )
}

export default ForgotPassword