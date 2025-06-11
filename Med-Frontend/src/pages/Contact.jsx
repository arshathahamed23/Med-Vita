import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
          <img className='w-full md:max-w-[350px]' src={assets.contact_image} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
            <p className='text-gray-500'>Achariya College Of Engineering Technology <br /> Villianur, Pondicherry</p>
            <p className='text-gray-500'>Tel: (+91) 9150431518 <br /> coder4al@gmail.com</p>
            <p className='font-semibold text-lg text-gray-600'>Careers at MEDVITA</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='border border-gray-400  rounded-lg px-8 py-4 text-sm hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
          </div>
        </div>
    </div>
  )
}

export default Contact