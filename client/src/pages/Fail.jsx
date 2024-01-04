import React from "react";
import SadFace from '../assets/sad-icon.svg'

const Fail = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white py-6 px-8 md:mx-auto border-[1px] rounded-md shadow-md">
        <img className="w-16 h-16 mx-auto my-6" src={SadFace} alt="Sad Face" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Unsuccessful!
          </h3>
          <p className="text-gray-600 my-2">
            Check for any error or re-enter correct credentials.
          </p>
          <p> Try again! </p>
          <div className="py-10 text-center">
            <a
              href="/"
              className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-sm"
            >
              GO BACK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fail;
