import React, { useEffect, useState } from 'react';
import productImg1 from '../../images/slider-images/slider1.jpg';
import productImg2 from '../../images/slider-images/slider2.jpg';
import productImg3 from '../../images/slider-images/slider3.jpg';
import productImg4 from '../../images/slider-images/slider4.jpg';
import productImg5 from '../../images/slider-images/slider5.jpg';

export default function ProductImageSlider() {

    // Array of objects for images in slider.
    const slides = [
        {
            image: productImg1
        },
        {
            image: productImg2
        },
        {
            image: productImg3
        },
        {
            image: productImg4
        },
        {
            image: productImg5
        },
    ];

    // State for index of current image in slider.
    const [currentIndex, setCurrentIndex] = useState(0);

    // This function sets the current index for previous image.
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // This function sets the current index for next image.
    const nextSlide = () => {
        const isLastIndex = currentIndex === slides.length - 1;
        const newIndex = isLastIndex ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Interval for changing the images in slider automatically after every 4 seconds.
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);

        // Cleanup the interval on component unmount.
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div>
            <div
                className="w-fit h-[780px] max-h-[40vh] md:max-h-[80vh] m-auto mb-4 relative group overflow-hidden flex items-center duration-1000"
                style={{ marginLeft: `-${currentIndex * 100}vw` }}
            >
                {
                    slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-[100vw] flex-shrink-0 h-full bg-center bg-cover duration-500"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />
                    ))
                }
            </div>
            <div className="flex flex-row items-center justify-center gap-2 w-fit mx-auto">
                {
                    Array(slides.length).fill().map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 mt-2 rounded-full cursor-pointer duration-1000 ${currentIndex === index ? "bg-slate-900" : "bg-slate-300"}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))
                }
            </div>
        </div>
    );
};
