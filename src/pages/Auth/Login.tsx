import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-blue-500 h-screen w-screen flex justify-center items-center'>
        <LoginBox/>
    </div>
  )
}

export default Login


const LoginBox = () => {
    const handleSubmit = () => {
        localStorage.setItem('loggedIn','yes')
    }
    return (
        <form onSubmit={()=>{
            handleSubmit()
        }} className='bg-white flex flex-col items-center px-10 py-20 gap-y-5 rounded-lg'>
           <h1 className='text-xl font-bold'>Login to account</h1>
           <input type="text" placeholder='Enter Email' className='outline-none mt-4' />
           <input type="password" placeholder='Enter password' className='outline-none' />
           <input type="text" placeholder='Sap Code' className='outline-none' />
           <button  className='bg-blue-500 px-6 py-1.5 rounded-lg  text-white text-sm font-bold' type='submit'>Login</button>
           <Link to={'/register'}>
           <h3 className='text-sm font-bold cursor-pointer'>Register new account</h3>
           </Link>
        </form>
    )
}