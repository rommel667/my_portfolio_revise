import React, { useContext, useState } from 'react'
import Modal from './Modal'
import ImagesCarousel from './ImagesCarousel'
import Icons from './Icons'
import Button from './Button'
import { ThemeContext } from '../Theme'
import LinkButtons from './LinkButtons'

const Project = ({ title, description, images, stacks, github, website }) => {

    const [showButton, setShowButton] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [ darkMode, toggleMode ] = useContext(ThemeContext)

    return (
        <div className="w-full dark:bg-gray-600  shadow-md mt-8 rounded-md transition duration-500 ease-in-out transform  hover:scale-105">
            <div className="relative" onMouseEnter={() => setShowButton(true)} onMouseLeave={() => setShowButton(false)} >
                <img
                    className="rounded-t-md"
                    src={images[0]}
                    alt=""
                    width={800}
                    height={450}
                    layout="responsive"
                    quality={65}
                />

                <Button onClick={() => setShowModal(true)} showButton={showButton} />

                
                <Modal
                    open={showModal}
                    cancel={() => setShowModal(false)}
                    closeModal={() => setShowModal(false)}
                    modalTitle={title}
                    darkMode={darkMode}
                >
                    <ImagesCarousel images={images} />
                </Modal>
            </div>
            <div className="my-5 flex flex-col items-center px-5">
            <h3 className="text-2xl text-gray-800 dark:text-gray-200">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-justify">{description}</p>
            
            </div>
            
            <Icons stacks={stacks} />

            <LinkButtons github={github} website={website} />

        </div>
    )
}

export default Project