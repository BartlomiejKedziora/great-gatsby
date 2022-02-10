import * as React from "react";

import NavMenu from "./NavMenu";
import Social from "./Social";
import MobileMenu from "./MobileMenu";

const Header = () => {

  return(
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__logo">Logo</div>
            <MobileMenu></MobileMenu>
            <NavMenu></NavMenu>
            <Social></Social>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
