import React from 'react'
import Layout from '../shared/Layout'

const Tanks = () => {
  return (
    <Layout>
     <div className='p-20'>
     <div className='p-10 bg-white shadow-lg  flex flex-col gap-y-10'>
          <h1 className='text-xl font-semibold'>Tank Details</h1>
          <LabelAndInput label='Tank Name' placeholder='Enter Your Tank Name' />
          <LabelAndInput label='Product Name' placeholder='Select Product' />
          <LabelAndInput label='Current Stock' placeholder='Current Stock' />
          <LabelAndInput label='Dip Reading ' placeholder='Dip Reading' />
          <LabelAndInput label='Product Density' placeholder='Product Density' />
          <button className="py-3 px-7 mt-5 ml-52 w-fit bg-green-500 rounded-md text-white font-semibold">
          Submit
          </button>
        </div>
        
     </div>
    </Layout>
  )
}

export default Tanks

interface LabelAndInputProps {
  label:string;
  placeholder:string;
}

const LabelAndInput : React.FC<LabelAndInputProps> = ({label,placeholder}) => {
  return (
    <div className='flex items-center justify-between w-full'>
        <p className="text-xs w-60 text-gray-600 font-semibold min-w-max mb-1">{label}</p>
        <input
          type="text"
          className="bg-gray-100 px-3 py-2 rounded-md w-full  outline-none"
          placeholder={placeholder}
        />
      </div>
  )
}