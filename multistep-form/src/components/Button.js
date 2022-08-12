import React from 'react'

const Button = ({ handleClick, steps, currentStep }) => {
  return (
    <div onClick={()=>handleClick()} className=''><button className="px-24 pt-2 pb-2 mt-2 mb-10 text-white rounded-md shadow-md bg-indigo-600 ">
    {currentStep === steps.length ? "Launch Eden" : "Create Workspace"}
  </button></div>
  )
}

export default Button