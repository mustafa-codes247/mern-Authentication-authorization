import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiStickyNote } from "react-icons/ci";
import { RiStickyNoteAddLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  // sidebar mobile view
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // custom tailwind class (note there is logic inside , means move zero % when sidebar is open {translate-x-0} and move -100% when closed {-translate-x-full} )
  const sideBarTailwindClass = `bg-blue-300 text-black h-screen px-4 fixed w-44 md:w-64 z-10 transition-transform duration-500 ease-in-out flex flex-col justify-between dark:bg-gray-700 dark:text-white  ${
    isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
  } md:block`;

  return (
    <>
        {/* button to open/close sidebar */}
        <button
          onClick={toggleOpen}
          className="fixed top-4 left-4 z-20 px-2 bg-white text-black border border-black rounded md:hidden dark:bg-gray-700 dark:text-white dark:border-gray-700s"
        >
          {isOpen ? "X" : "≣"}
        </button>

        <div className={sideBarTailwindClass}>
          <div>
          <h1 className="text-lg font-bold mt-10">Mern Notes App</h1>
          <ul className="flex flex-col mt-5 text-sm">
            <li className=" my-2 font-bold py-2 px-1 hover:text-white hover:bg-blue-500 hover:rounded-sm dark:hover:bg-blue-700">
              <Link to="/allnotes" className="flex items-center space-x-2"><CiStickyNote size={20} /><span>All Notes</span></Link>
            </li>
            <li className=" my-2 font-bold py-2 px-1 hover:text-white hover:bg-blue-500 hover:rounded-sm dark:hover:bg-blue-700">
              <Link to="/addnewnote" className="flex items-center space-x-2"><RiStickyNoteAddLine />
               <span>Add New Notes</span></Link>
            </li>
          </ul>
          
          </div>

           <ul >
          <li className=" mt-[35rem] my-2 font-bold py-2 px-1 hover:text-white hover:bg-blue-500 hover:rounded-sm dark:hover:bg-blue-700">
            <Link to="/logout" className="flex items-center space-x-2"><FiLogOut />
             <span>Log Out</span> </Link>
          </li>
        </ul>
        </div>

        {/* when sidebar is open make background gray */}
        {isOpen && (
          <div
            onClick={toggleOpen}
            className="fixed inset-0 bg-black opacity-10 z-5 md:hidden"
          ></div>
        )}
  
      
      
     
    </>
  );
};

export default Sidebar;
