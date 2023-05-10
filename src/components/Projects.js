import React from "react";

const Projects = () => {
  return (
    <div name="skills" className="pt-2 pb-2 mb-2 bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full">
        <div className=" w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center ">
            Projects
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">chat messanger</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">Form validation</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">e-commerce</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">Ract Todo app</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">Weather App</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">Admin panel</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">institute management App</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
