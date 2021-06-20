import React from 'react'
import { AiFillPhone } from "react-icons/ai";

const Mobile = () => {
    return (

        <div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <AiFillPhone />
                <p>Phone Number</p>
            </div>
            <div className="text-gray-600 dark:text-gray-300">
                <p>+63-9062669122</p>
                <p>+63-9993061118</p>
            </div>
        </div>

    )
}

export default Mobile