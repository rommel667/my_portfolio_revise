import React from 'react'
import { links } from './links'
import { Link } from 'react-scroll'



const Menu = () => {
    return (
        <ul className="flex space-x-6 text-lg font-semibold text-gray-700 dark:text-gray-300">

            {links.map(item => {
                return (
                   
                        <Link
                        className="cursor-pointer"
                            activeClass="active"
                            to={item.link}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >{item.name}</Link>
                   
                )
            })}
        </ul>
    )
}

export default Menu