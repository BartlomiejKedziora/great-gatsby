import * as React from "react";

import IconItem from "./IconItem";

import icon1 from './../../images/home/icon1.png';
import icon2 from './../../images/home/icon2.png';
import icon3 from './../../images/home/icon3.png';
import icon4 from './../../images/home/icon4.png';
import icon5 from './../../images/home/icon5.png';
import icon6 from './../../images/home/icon6.png';
import icon7 from './../../images/home/icon7.png';


const IconsSection = () => {

  return(
    <>
        <section className="icons">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <div className="icons__title">Lorem ipsum dolor sit amet, conse </div>
                        <div className="icons__line"></div>
                    </div>
                    <IconItem
                    img={icon1}
                    text='Lorem ipsum'
                    ></IconItem>
                    <IconItem
                    img={icon2}
                    text='Lorem ipsum 
                    dolor sit amet conse'
                    ></IconItem>
                    <IconItem
                    img={icon3}
                    text='Lorem ipsum 
                    dolor sit amet'
                    ></IconItem>
                    <IconItem
                    img={icon4}
                    text='Lorem ipsum 
                    dolor sit amet,'
                    ></IconItem>
                    <IconItem
                    img={icon5}
                    text='Lorem ipsum dolor sit amet, conse lorem ipsum lorem ipsum'
                    ></IconItem>
                    <IconItem
                    img={icon6}
                    text='Lorem ipsum dolor sit amet, conse lorem ipsum lorem'
                    ></IconItem>
                    <IconItem
                    img={icon7}
                    text='Lorem ipsum dolor sit amet, conse lorem ipsum'
                    ></IconItem>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <a className="icons__btn">
                            <div className="icons__cta">dowiedz się więcej</div>
                            <div className="icons__arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="82" viewBox="0 0 72 82"><g><g transform="rotate(-180 29.5 41)"><g><path fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="20" stroke-width="3" d="M41.616 40.769H18.134"/></g><g><path fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="20" stroke-width="3" d="M27.815 30v0L17 40.769v0l10.815 10.769v0"/></g></g></g></svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default IconsSection;