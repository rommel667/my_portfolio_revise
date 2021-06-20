import React from 'react'

const Introduction = () => {
    return (
        <div className="row-span-full col-start-1 col-span-3 flex flex-col justify-center">
            <div className="space-y-6">
                <div className="text-gray-800 dark:text-gray-300 xl:text-6xl lg:text-4xl md:text-4xl text-3xl font-bold tracking-wider font-serif">
                    I Am <br />
                    Rommel Velasco
                </div>
                <div className="text-gray-600 dark:text-gray-400 xl:text-2xl lg:text-xl md:text-base tracking-wider leading-loose text-justify space-y-1">
                    <div>A Licensed Electronics Engineer by profession.</div>
                    <div>Learning new things and making an idea come to life is my passion.</div>
                    <div>Creating Web and Mobile application for FUN and hopefully make a living out of it.</div>
                </div>
                <button
                    type="button"
                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-2xl text-gray-300 font-semibold px-6 py-4 md:px-8 md:text-xl"
                >
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default Introduction