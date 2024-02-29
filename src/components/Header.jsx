import React from 'react';
import NotImg from '../assets/images/notification.png';
import PerImg from '../assets/images/person.png';
import SearchImg from '../assets/images/search-normal.png'

const Header = () => {
  return (
    <header className='w-11/12 flex justify-between'>
      <div className='w-3/12'>
        <h3 className='font-light'>Welcome Back</h3>
        <p className='mt-2 font-medium'>Dr Smith</p>
      </div>
      <div className='w-6/12 flex justify-between'>
        <span className='relative'>
          <span className='absolute'>
            <img className='h-5 mt-2 ml-3' src={SearchImg} alt="search" />
          </span>
          <input className='bg-gray-100 h-8 w-80 text-sm pl-12 py-1 rounded-md focus:outline-none' type="text" placeholder='Search doctor, hospital, clinics...'/>
        </span>
        <span>
          <img src={NotImg} alt="notification" />
        </span>
        <span>
          <img className='object-cover h-8 w-8 rounded-full' src={PerImg} alt="" />
        </span>
      </div>
    </header>
  )
}

export default Header