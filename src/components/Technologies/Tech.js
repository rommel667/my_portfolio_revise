import React from 'react'
import { icons } from '../../icons/icons'

const Tech = ({ stack }) => {
    return (
        <div className="border-2 p-2 rounded-md shadow-md flex items-center gap-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <div
                className={`${icons(50)[stack].color} flex `}
            >
                {icons(50)[stack].component}
            </div>
            <div className="text-sm lg:text-base text-gray-700 dark:text-gray-300">{stack}</div>

        </div>
    )
}

export default Tech