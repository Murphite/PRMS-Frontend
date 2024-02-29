import React from 'react';
import DoctorSidebar from '../../components/DoctorSidebar';
import Header from '../../components/Header';
import PlusImg from '../../assets/images/plus.png';
import UserImg from '../../assets/images/user.png';
import CalImg from '../../assets/images/calendar-tick.png';

let data = [
  {
    id: 1,
    date: "February 5, 2023, 2:30 PM - 3:30 PM",
    image: UserImg,
    name: "John Doe",
    email: "johndoe@email.com",
    hasVisited: true,
    visitNo: 5,
  },
  {
    id: 2,
    date: "February 5, 2023, 2:30 PM - 3:30 PM",
    image: UserImg,
    name: "John Doe",
    email: "johndoe@email.com",
    hasVisited: false,
    visitNo: 0,
  },
  {
    id: 3,
    date: "February 5, 2023, 2:30 PM - 3:30 PM",
    image: UserImg,
    name: "John Doe",
    email: "johndoe@email.com",
    hasVisited: true,
    visitNo: 5,
  },
  {
    id: 4,
    date: "February 5, 2023, 2:30 PM - 3:30 PM",
    image: UserImg,
    name: "John Doe",
    email: "johndoe@email.com",
    hasVisited: true,
    visitNo: 5,
  },
  {
    id: 5,
    date: "February 5, 2023, 2:30 PM - 3:30 PM",
    image: UserImg,
    name: "John Doe",
    email: "johndoe@email.com",
    hasVisited: true,
    visitNo: 5,
  },
  {
    id: 6,
    date: "February 5, 2023, 2:30 PM - 3:30 PM",
    image: UserImg,
    name: "John Doe",
    email: "johndoe@email.com",
    hasVisited: true,
    visitNo: 5,
  },
]

const PatientsList = () => {
  return (
    <section className='grid grid-cols-[20%_80%]'>
      <DoctorSidebar/>
      <div className='py-6 px-10'>
        <Header/>
        <div className='w-11/12 flex justify-end mt-8'>
          <button className='w-36 bg-[#009688] py-3 px-4 flex justify-between rounded-3xl'>
            <img className='h-5' src={PlusImg} alt="plus" />
            <p className='text-sm text-white'>Add Patient</p>
          </button>
        </div>
        <div className='w-10/12 mt-4 grid grid-cols-3 gap-y-6'>
          {data.map((user)=>{
            const {id, date, image, name, email, hasVisited, visitNo} = user;
            return (
              <div
              key={id}
              className='h-48 w-60 flex flex-col shadow-md rounded-2xl'
              >
                <div className='flex flex-row pt-2 px-2'>
                  <img src={CalImg} alt="calender" />
                  <p className='text-xs font-light text-gray-400 ml-2'>{date}</p>
                </div>
                <div className='w-40 mx-auto flex justify-center mt-1'>
                  <img className='object-cover h-20 w-20 rounded-full border-2 border-[#009688]' src={image} alt="" />
                </div>
                <div className='text-center mt-1'>
                  <h3 className='text-sm mb-1'>{name}</h3>
                  <p className='text-xs font-light'>{email}</p>
                </div>
                <div className={`bg-${hasVisited ? "[#009688]/[.25]" : "[#53B1FD]/[.70]"} h-8 pt-1 mt-2 text-center text-xs rounded-b-2xl`}>
                  {
                    hasVisited ? (
                      <p>{`Visit: ${visitNo} Times`}</p>
                    ) : (
                      <p>New User</p>
                    )
                  }
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PatientsList