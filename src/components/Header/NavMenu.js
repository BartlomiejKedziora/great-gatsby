import * as React from "react";
import { Link } from "gatsby";

const NavMenu = () => {

  return(
    <>
      <nav className="nav-menu d-none d-lg-block">
        <ul>
            <li className="nav-menu__item"><Link to="/">Poznaj przestrzeń</Link></li>
            <li className="nav-menu__item"><Link to="/">Oferta</Link></li>
            <li className="nav-menu__item"><Link to="/">Lokalizacja</Link></li>
            <li className="nav-menu__item"><Link to="/">Własne biuro</Link></li>
            <li className="nav-menu__item"><Link to="/">Kontakt</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;