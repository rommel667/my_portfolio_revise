import React from 'react'
import Tech from './Tech'

const TechGroup = ({ stacks, title }) => {
    return (
        <div className="border-2 rounded-md p-1 w-full shadow-md">
            <div className="text-2xl flex justify-center border-2 rounded-md dark:text-gray-300 mb-5 bg-gray-200 dark:bg-gray-800">{title}</div>
            <div className=" flex flex-col items-center">
            <div className="flex flex-wrap gap-5 space-y-3 mx-auto px-3 pb-5 justify-evenly">
                {stacks.map(stack => {
                    return (
                        <Tech key={stack} stack={stack} />
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default TechGroup