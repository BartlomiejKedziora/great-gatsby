import * as React from "react";

import banner from './../../images/home/Group 258.png'
import stripes from './../../images/home/stripes_ok.png'

const Banner = () => {

  return(
    <>
        <section className="banner">
            <div className="banner__wrapper container-fluid px-0">
                <div className="banner__image">
                    <img src={banner} alt="" />
                </div>
                <div className="banner__text__wrapper container">
                    <div className="banner__text__content">
                        Lorem ipsum<br></br>vs własne biuro
                    </div>
                    <div className="banner__text__line"></div>
                </div>
                <div className="banner__stripes__wrapper container">
                    <div className="banner__stripes">
                        <img src={stripes} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Banner;