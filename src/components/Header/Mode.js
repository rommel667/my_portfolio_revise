import React, { useContext } from 'react'
import { BsFillBrightnessHighFill, BsMoon } from "react-icons/bs";
import { ThemeContext } from '../Theme';



const Mode = () => {

    const [ darkMode, toggleMode ] = useContext(ThemeContext)

    const onSetDarkMode = () => {
        toggleMode()
        if(darkMode) {
            localStorage.removeItem("dark")
        } else {
            localStorage.setItem("dark", true)
        }
    }

    return (
        <div className="text-gray-300 cursor-pointer">
            {darkMode ?
                <BsFillBrightnessHighFill
                    className="w-6 h-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    onClick={onSetDarkMode}
                /> :
                <BsMoon
                    className="text-gray-700 w-6 h-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    onClick={onSetDarkMode}
                />}
        </div>
    )
}

export default Mode