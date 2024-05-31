import React from "react";

const Programmes = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 bg-custom-image bg-fixed bg-cover bg-center bg-no-repeat h-screen justify-center items-center text-center">
      <div className="mt-[20rem] ">
        <h1 className="text-[4rem] text-white">Join Our Training Programs</h1>
        <h3 className="text-[2rem] text-green-600 mt-8">
          Come learn from the very best in any of our specialized fields;
        </h3>
      </div>
      <div className="flex flex-cols-4 text-[1.6rem] list-none text-white justify-center items-center gap-10 mt-[25rem] mb-80">
        <li>
          <h3 className="bg-green-900 border-solid border-2 border-green-900 rounded-xl w-[20rem] px-2 py-5 text-center">
            WEB PROGRAMMING
          </h3>
        </li>
        <li>
          <h3 className="bg-green-900 border-solid border-2 border-green-900 rounded-xl w-[20rem] px-2 py-5 text-center">
            HTML & CSS
          </h3>
        </li>
        <li>
          <h3 className="bg-green-900 border-solid border-2 border-green-900 rounded-xl w-[20rem] px-2 py-5 text-center">
            JAVASCRIPT
          </h3>
        </li>
        <li>
          <h3 className="bg-green-900 border-solid border-2 border-green-900 rounded-xl w-[20rem] px-2 py-5 text-center">
            NODE.JS/EXPRESS.JS
          </h3>
        </li>
      </div>
      <div className="flex flex-cols-3 text-[1.6rem] list-none text-white justify-center items-center gap-10 mt-[25rem] mb-[36rem]">
        <li>
          <h3 className="bg-green-900 border-solid border-2 border-green-900 rounded-xl w-[20rem] px-2 py-5 text-center">
            UI/UX DESIGN
          </h3>
        </li>
        <li>
          <h3 className="bg-green-900 border-solid border-2 border-green-900 rounded-xl w-[20rem] px-2 py-5 text-center">
            REACT
          </h3>
        </li>
        <li>
          <h3 className="bg-green-900 border-solid border-2 border-green-900 rounded-xl w-[20rem] px-2 py-5 text-center">
            PYTHON
          </h3>
        </li>
      </div>
    </div>
  );
};

export default Programmes;

