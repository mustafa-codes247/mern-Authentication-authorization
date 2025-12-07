import React, { useContext } from 'react'
import { IoMdMoon } from "react-icons/io";
import { ThemeContext } from '../context/ThemeContextPRovider';
import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = () => {
  const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <div className='flex p-4 justify-between items-center border border-bottom-black dark:bg-gray-800 dark:text-white dark:border-b-gray-700'>
      <h1 className='font-bold'>Welcome !</h1>
      <button className='text-2xl text-gray-800 dark:text-yellow-400' onClick={toggleTheme}> 
        {theme === 'light'?<IoMdMoon />:<MdOutlineWbSunny />}
      </button>
    </div>
  )
}

export default Navbar
