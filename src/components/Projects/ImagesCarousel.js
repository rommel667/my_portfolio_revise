import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImagesCarousel = ({ images }) => {
    const [intervals, setIntervals] = useState(3000)

    const onChange = (index, item) => {
        setIntervals(item.props["data-interval"]);
    };

    return (
        <Carousel
            onChange={onChange}
            autoPlay
            interval={intervals}
            infiniteLoop={true}
            showThumbs={false}
        >

            {images.map(image => {
                return (

                    <img
                        key="image"
                        src={image}
                        alt=""
                        width={800}
                        height={450}
                        layout="responsive"
                        quality={65}
                    />

                )
            })}

        </Carousel>
    )
}

export default ImagesCarousel