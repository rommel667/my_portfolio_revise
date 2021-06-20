import React, { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

  const [ darkMode, setDarkMode ] = useState(false)

  useEffect(() => {
      if(localStorage.getItem("dark")) {
          setDarkMode(true)
      }
  }, [])

  const toggleMode = () => {
    setDarkMode(!darkMode)
  }

  const data = [darkMode, toggleMode]

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider