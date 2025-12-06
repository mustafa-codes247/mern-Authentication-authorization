import React, { useContext } from 'react'
import { IoMdMoon } from "react-icons/io";
import { ThemeContext } from '../context/ThemeContextPRovider';
import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = () => {
  const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <div className='flex p-4 justify-between items-center border border-bottom-black'>
      <h1 className='font-bold'>Welcome !</h1>
      <button className='text-2xl text-dark' onClick={toggleTheme}> 
        {theme === 'light'?<MdOutlineWbSunny />:<IoMdMoon />}

      </button>
    </div>
  )
}

export default Navbar
