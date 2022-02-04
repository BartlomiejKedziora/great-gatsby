import React from "react";

const SliderItem = (props) => {

return (
    <>
        <div className="slider-item__image-wrapper">
            <img src={props.slide} alt="hero image" />
        </div>
    </>
);

}

export default SliderItem;
