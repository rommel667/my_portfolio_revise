import React from 'react'
import Email from './Email'
import Mobile from './Mobile'
import Socials from './Socials'

const Footer = () => {
    return (
        <div id="contacts" className="pb-20">
            <div className="text-4xl pt-20 font-semibold text-gray-800 dark:text-gray-200 mb-5">Contacts</div>
            <div className="border-2 p-5 rounded-md shadow-md">

                <div className="hidden md:flex flex-row justify-between">
                    <Email/>
                    <Mobile/>
                    <Socials />
                </div>
                <div className="md:hidden flex flex-row justify-between">
                    <div className="flex flex-col gap-3">
                        <Email />
                        <Mobile />
                    </div>
                    <Socials />

                </div>

            </div>

        </div>
    )
}

export default Footer