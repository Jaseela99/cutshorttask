import React from 'react'

const Form4 = () => {
  return (
    <div className=''>
      <div className='flex justify-center p-5'>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 fill-indigo-500"
          viewBox="0 0 20 20"
          fill="indigo"
          fontSize="large"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="font-bold flex justify-center text-2xl">
        <h2>Congratulations, Eren!</h2>
      </div>
      <div className="p-4 flex justify-center text-md text-gray-500 ">
        <p>you have completed onboarding, you can start using the Eden!</p>
      </div>
      </div>
    
  )
}

export default Form4