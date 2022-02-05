import * as React from "react";
import { SRLWrapper } from "simple-react-lightbox";

import img1 from './../../images/home/Component16.png'
import img2 from './../../images/home/shutterstock_579651031.png'
import img3 from './../../images/home/shutterstock_1187833249.png'
import img4 from './../../images/home/shutterstock_763511722.png'
import img5 from './../../images/home/shutterstock_763511701.png'
import img6 from './../../images/home/shutterstock_610938071.png'

const GalleryLightBox = () => {

  return(
    <>
        <SRLWrapper>
        <div className="gallery__wrapper">
            <div className="gallery__img gallery__img1">
                <img className="gallery__image" src={img1} alt="" />
            </div>
            <div className="gallery__img gallery__img2">
                <img className="gallery__image" src={img2} alt="" />
            </div>
            <div className="gallery__img gallery__img3">
                <img className="gallery__image" src={img3} alt="" />
            </div>
            <div className="gallery__img gallery__img4">
                <img className="gallery__image" src={img4} alt="" />
            </div>
            <div className="gallery__img gallery__img5">
                <img className="gallery__image" src={img5} alt="" />
            </div>
            <div className="gallery__img gallery__img6">
                <img className="gallery__image" src={img6} alt="" />
            </div>
            <div className="gallery__title__wrapper">
                <div className="container">
                    <div className="gallery__title">Galeria</div>
                    <div className="gallery__title__line"></div>
                </div>    
            </div>
        </div>
        </SRLWrapper>
    </>
  );
};

export default GalleryLightBox;