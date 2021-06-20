import React from 'react'
import Header from '../Header'
import Footer from '../Footer'


const Layout = ({ children }) => {


    return (
        <div className="bg-gray-200 dark:bg-gray-700 overscroll-contain scroll-smooth xl:px-36 lg:px-24 md:px-20 px-5">
            <Header/>
            {children}
            <Footer />
        </div>
    )
}

export default Layout