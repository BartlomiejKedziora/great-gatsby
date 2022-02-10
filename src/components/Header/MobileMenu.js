import * as React from "react";
import { Link } from "gatsby";
import { slide as Menu } from 'react-burger-menu';

const MobileMenu = () => {


    return(
      <>
        <Menu right>
            <ul className="menu-mobile">
                <li className="menu-item"><Link to="/">Poznaj przestrzeń</Link></li>
                <li className="menu-item"><Link to="/">Oferta</Link></li>
                <li className="menu-item"><Link to="/">Lokalizacja</Link></li>
                <li className="menu-item"><Link to="/">Własne biuro</Link></li>
                <li className="menu-item"><Link to="/">Kontakt</Link></li>
                <div className="header-social">
                    <a className="header-social__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18"><g><g><path d="M9.26 9.941l.47-3.061H6.793V4.894c0-.838.41-1.654 1.726-1.654h1.335V.634S8.642.427 7.484.427c-2.419 0-4 1.466-4 4.12V6.88H.795V9.94h2.689v7.4h3.31v-7.4z"/></g></g></svg>
                    </a>
                    <a className="header-social__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"><g><g><g><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="20" stroke-width="2" d="M5.476 1.617h7.95a3.975 3.975 0 0 1 3.975 3.975v7.95a3.975 3.975 0 0 1-3.975 3.975h-7.95A3.975 3.975 0 0 1 1.5 13.542v-7.95a3.975 3.975 0 0 1 3.976-3.975z"/></g><g><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="20" stroke-width="2" d="M12.63 9.066A3.18 3.18 0 1 1 6.34 10a3.18 3.18 0 0 1 6.29-.933z"/></g><g><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="20" stroke-width="2" d="M13.823 5.194v0"/></g></g></g></svg>
                    </a>
                </div>
            </ul>
        </Menu>
      </>
    );
  };
  
  export default MobileMenu;