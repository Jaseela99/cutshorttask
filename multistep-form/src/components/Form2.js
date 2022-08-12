import React from 'react'
const Form2 = () => {
  return (
    <div className='p-4 m-4 '>
        <h1 className='text-2xl font-semibold p-1'>Let's set up a home for all your work </h1>
        <h3 className='text-sm text-gray-500 p-1 pb-4'>You can always create another workspace later.</h3>
        <div className=' px-64 pt-4 pb-4'><label className='block text-gray-500 text-sm font-bold mb-2'><span>Workspace Name</span></label>
        <input type="text" placeholder='Eden' className='appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/> <br/></div>
        <div className='px-64 pt-4'><label className='block text-gray-500 text-sm font-bold mb-2'>Workspace URL<span className='text-gray-400'>(optional)</span></label>
        <div className='rounded-md'>
        <input type="text" placeholder="www.eden.com" className='appearance-none border bg-gray-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
        <input type="text" placeholder='Example' className='appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
        </div>
      
        </div>
        

    </div>
  )
}

export default Form2