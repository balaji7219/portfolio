import React from "react";
// import FileSaver from "file-saver";
export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            BTS web
          </a>
        </a>

        <a
          href="#contact"
          className=" m-2 bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 j"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
