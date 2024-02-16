import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='bg-blue-500 h-screen w-screen flex justify-center items-center'>
        <RegisterBox/>
    </div>
  )
}

export default Register


const RegisterBox = () => {
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
        }} className='bg-white flex flex-col items-center px-10 py-20 gap-y-1 rounded-lg'>
           <h1 className='text-xl font-bold mb-10'>Register</h1>
           <input type="text" placeholder='Enter your Name' className='outline-none rounded-md p-1 border border-black  mt-4' />
           <input type="number" placeholder='Enter your phone number' className='outline-none rounded-md p-1 border border-black  mt-4' />
           <input type="text" placeholder='Enter your email' className='outline-none rounded-md p-1 border border-black  mt-4' />
           <input type="password" placeholder='Enter password' className='outline-none rounded-md p-1 border border-black  mt-4' />
           <input type="password" placeholder='Re-enter password' className='outline-none rounded-md p-1 border border-black  mt-4' />
           <input type="text" placeholder='Outlet Name' className='outline-none rounded-md p-1 border border-black  mt-4' />
           <input type="text" placeholder='Sap Code' className='outline-none rounded-md p-1 border border-black  mt-4' />           
           <button className='bg-blue-500 px-6 py-1.5 rounded-lg mt-4 text-white text-sm font-bold' type='submit'>Register</button>
           <Link to={'/'}>
           <button className='bg-blue-500 px-6 py-1.5 rounded-lg mt-4  text-white text-sm font-bold' type='submit'>Login</button>
           </Link>
        </form>
    )
}