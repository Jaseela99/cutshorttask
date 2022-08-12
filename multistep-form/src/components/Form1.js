import React from 'react'

const Form1 = () => {
    
  return (
    <div className='p-2 m-4 '>
        <h1 className='text-2xl font-semibold p-1'>Welcome! First things first...</h1>
        <h3 className='text-sm text-gray-500 p-1 pb-4'>You can always change them later.</h3>
        <div className=' px-64 pt-4 pb-4'><label className='block text-gray-500 text-sm font-bold mb-2'><span>Full Name</span></label>
        <input type="text" placeholder='Steve Jobs'  className='appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/> <br/></div>
        <div className='px-64 pt-4 '><label className='block text-gray-500 text-sm font-bold mb-2'><span>Display Name</span></label>
        <input type="text" placeholder='Steve' className='appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/> <br/></div>

    </div>
  )
}

export default Form1