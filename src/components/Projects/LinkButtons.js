import React from 'react'

const LinkButtons = ({ github, website }) => {
    return (
        <div className="px-5 my-5 flex justify-between">
        <div>
        <p className="text-gray-700 dark:text-gray-300 text-sm">Github Link:</p>
            <div className="flex md:flex-wrap gap-2">
                {github.map((g, i) => {
                    return (
                        <a key={i} target="_blank" href={g.link} rel="noopener noreferrer" >
                            <button className="bg-green-600 px-2 py-1 rounded-md text-gray-200 focus:outline-none transition duration-500 ease-in-out transform  hover:scale-110">
                                {g.name}
                            </button>
                        </a>
                    )
                })}
            </div>
        </div>
            

            {website &&
                <div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Visit Website:</p>

                    <a target="_blank" href={website.link} rel="noopener noreferrer">
                        <button className="bg-green-600 px-2 py-1 rounded-md text-gray-200 focus:outline-none transition duration-500 ease-in-out transform  hover:scale-110">
                            {website.name}
                        </button>
                    </a>
                </div>}
        </div>
    )
}

export default LinkButtons