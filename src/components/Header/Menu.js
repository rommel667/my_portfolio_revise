import React from 'react'
import { links } from './links'



const Menu = () => {
    return (
        <ul className="flex space-x-6 text-lg font-semibold text-gray-700 dark:text-gray-300">
            {links.map(link => {
                return (
                    <li key={link}>
                        <a href={link} className="hover:text-gray-400">Projects</a>
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu