import * as React from "react";
import GalleryLightBox from "./GaleryLightBox";

// TODO: draggable gallery for desktop

const Gallery = () => {

  return(
    <>
        <section className="gallery">
            <div className="gallery__title__wrapper--mobile d-xxl-none">
                <div className="container">
                    <div className="gallery__title">Galeria</div>
                    <div className="gallery__title__line"></div>
                </div>    
            </div>
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
            <GalleryLightBox></GalleryLightBox>
        </section>
    </>
  );
};

export default Gallery;