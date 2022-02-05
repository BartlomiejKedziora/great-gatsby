import * as React from "react";

import img1 from './../../images/home/Component16.png'
import img2 from './../../images/home/shutterstock_579651031.png'
import img3 from './../../images/home/shutterstock_1187833249.png'
import img4 from './../../images/home/shutterstock_763511722.png'
import img5 from './../../images/home/shutterstock_763511701.png'
import img6 from './../../images/home/shutterstock_610938071.png'

// TODO: draggable gallery for desktop

const Gallery = () => {

  return(
    <>
        <section className="gallery">
            <div className="gallery__arrows__wrapper">
                <div className="container-fluid">
                    <div className="gallery__arrows gallery__arrows--prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="77" height="94" viewBox="0 0 77 94"><g><g><g><path fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="20" stroke-width="3" d="M68.268 46.812H31.763"/></g><g><path fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="20" stroke-width="3" d="M46.812 63.624v0L30 46.812v0L46.812 30v0"/></g></g></g></svg>
                    </div>
                    <div className="gallery__arrows gallery__arrows--next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="94" viewBox="0 0 78 94"><g><g transform="rotate(-180 28.5 47)"><g><path fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="20" stroke-width="3" d="M47.268 46.812H10.763"/></g><g><path fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="20" stroke-width="3" d="M25.812 30v0L9 46.812v0l16.812 16.812v0"/></g></g></g></svg>
                    </div>
                </div>    
            </div>
            <div className="gallery__wrapper">
                <img className="gallery__img1" src={img1} alt="" />
                <img className="gallery__img2" src={img2} alt="" />
                <img className="gallery__img3" src={img3} alt="" />
                <img className="gallery__img4" src={img4} alt="" />
                <img className="gallery__img5" src={img5} alt="" />
                <img className="gallery__img6" src={img6} alt="" />
                <div className="gallery__title__wrapper">
                    <div className="container">
                        <div className="gallery__title">Galeria</div>
                        <div className="gallery__title__line"></div>
                    </div>    
                </div>
            </div>
        </section>
    </>
  );
};

export default Gallery;