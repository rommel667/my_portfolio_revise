import React, { useState } from 'react'

const Icon = ({ icons, stack }) => {

    const [ showLabel, setShowLabel ] = useState(false)

    return (
        <div key={stack} className="flex flex-col items-center relative mb-5">
            <div
                onMouseEnter={() => setShowLabel(true)}
                onMouseLeave={() => setShowLabel(false)}
                className={`${icons(25)[stack].color} flex border-2 rounded-md p-1 border-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}>
                {icons(25)[stack].component}
            </div>
            <p className={`${showLabel ? "text-gray-800 dark:text-gray-200" : "text-gray-200 dark:text-gray-800"} text-xs absolute top-full`}>{showLabel ? stack: ""}</p>
        </div>
    )
}

export default Icon