import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextPRovider = ({children}) => {
    const [theme,setTheme]=useState('light')

    useEffect(()=>{
        if (theme==='dark'){
            document.documentElement.classList.add("dark")
        }
        else{
            document.documentElement.classList.remove('dark')
        }

    },[theme])



    const toggleTheme=()=>{
        setTheme(prev=>(prev=== "light"?'dark':'light') )
    }

    // const themeClass = theme === 'dark'? 'dark': 'light'
  return (

  
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>

  )
}

export default ThemeContextPRovider
