import React from "react";

const Form3 = () => {
  return (
    <div className="p-4 m-4">
      <h1 className="text-2xl font-semibold p-1">
        How are you planning to use Eden ?
      </h1>
      <h3 className="text-sm text-gray-500 p-1 pb-4">
        We'll Streamline yor setup experience accordingly.
      </h3>
      <div className=" px-64 pt-4 pb-4 flex justify-center gap-4">
        <div className="appearance-none border rounded p-4 hover:border-indigo-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5  hover:fill-indigo-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <div className="font-bold text-lg pt-2 pb-2">For myself</div>
          <div className="text-sm flex flex-col text-gray-500 ">Write better.Think 
          <span>more clearly .Stay </span>
          <span>Organized</span></div>
        </div>

        <div className="appearance-none border rounded p-4 hover:border-indigo-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 hover:fill-indigo-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          <div className="font-bold text-lg pt-2 pb-2">With my team</div>
          <div className="text-sm flex flex-col text-gray-500 ">Wikis,docs,tasks & 
          <span>projects, all in one </span>
          <span>place</span></div>
        </div>
      </div>

    </div>
  );
};

export default Form3;
