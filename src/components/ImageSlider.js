import React, { useState } from 'react';
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";


const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const len = slides.length;

    const nextSlide = () => {
        setCurrent( current === len-1 ? 0 : current +1 );
    }
    
    const prevSlide = () => {
        setCurrent( current===0 ? len-1 : current-1);
    }
    //console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slider, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    { index === current && (
                      <img src={slider.image} alt="black_white" className="image" />)}
              </div>
            );                         
        })}
      </section>
    );
};

export default ImageSlider
