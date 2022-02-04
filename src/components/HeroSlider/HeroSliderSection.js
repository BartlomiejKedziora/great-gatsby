import React from "react";
import HeroSlider from "./HeroSlider";
import HeroForm from "./HeroForm";
import HeroText from "./HeroText";

const HeroSliderSection = () => {

    return(
        <>
            <section id="hero-slider" className="hero-slider container-fluid px-0">
                <HeroSlider></HeroSlider>
                <HeroText></HeroText>
                <HeroForm></HeroForm>
            </section>
        </>
    );
};

export default HeroSliderSection;