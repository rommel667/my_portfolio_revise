import React from 'react'
import { Link } from 'react-scroll'

const Logo = () => {
    return (
        <div className="">
            <Link
                className="text-gray-600 text-lg font-bold dark:text-gray-400 cursor-pointer"
                activeClass="active"
                to={"home"}
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
            >Rommel V.</Link>

        </div>
    )
}

export default Logo