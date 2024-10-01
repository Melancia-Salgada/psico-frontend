import React from 'react'
import Logo from '../assets/Logo.png'
import Sidebar from '../components/Sidebar'

const Login = () => {
  return (
    <>
   
      <div className='flex flex-col place-items-center mt-pat '>
            <div className='mb-40 mt-0'>
                <img src={Logo} alt="Logo EasyPSI"/>
            </div>
            
            <div>
            <label className='place-self-start'>
                <span className='font-bold text-branco-darkmode'>EMAIL</span><br />
                <input type="email" className="w-inputW h-inputH" id="" />
            </label>
            </div>
      </div>
    
      


    </>
  )
}

export default Login