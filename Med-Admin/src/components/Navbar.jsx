import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Navbar = () => {

  const {aToken, setAToken} = useContext(AdminContext)
  const {dToken, setDToken} = useContext(DoctorContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    aToken && setAToken('')
    dToken && setDToken('')
    aToken && sessionStorage.removeItem('aToken')
    dToken && sessionStorage.removeItem('dToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b border-gray-300 bg-white'>
        <div className='flex items-center gap-2 text-xs'>
          <img className='w-30 sm:w-39 cursor-pointer' src={assets.admin_logo} alt="" />
          <p className='border px-2.5 py-0.5 mt-1.5 rounded-full text-gray-600 border-gray-500'>{aToken ? 'Admin' : 'Doctor'}</p>
        </div>
        <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full cursor-pointer'>Logout</button>
    </div>
  )
}

export default Navbar