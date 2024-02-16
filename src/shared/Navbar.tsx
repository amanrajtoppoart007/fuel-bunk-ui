import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <div className='bg-white p-3'>
        <div className='flex justify-end items-center gap-2'>
            <div className='rounded-full bg-blue-400 p-1 text-white w-fit h-fit'>
                <PersonIcon/>
            </div>
            <div className='text-gray-500'>
                <p className='text-sm font-bold -mb-2'>Preston Bradford</p>
                <div className='flex items-center'>
                    <p className='text-xs'>Preston Bradford</p>
                    <KeyboardArrowDownIcon/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar