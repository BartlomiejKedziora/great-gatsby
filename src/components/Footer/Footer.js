import * as React from "react";

import FooterMenu from "./FooterMenu";
import CopyRights from "./CopyRights";

import stripes from './../../images/home/stripes_footer.png'

const Footer = () => {

  return(
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__logo">Logo</div>
                <FooterMenu></FooterMenu>
                <CopyRights></CopyRights>
          </div>
        </div>
        <div className="footer__image__wrapper">
            <div className="container">
                <div className="footer__image">
                    <img src={stripes} alt="" />
                </div>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;