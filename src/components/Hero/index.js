import React from 'react'
import Introduction from './Introduction'
import BackgroundAnimation from './BackgroundAnimation'

const Hero = () => {
    return (
        <section id="home" className="grid md:grid-cols-5 pt-36 md:pt-30 lg:10">
            <Introduction />
            <BackgroundAnimation />
        </section>
    )
}

export default Hero