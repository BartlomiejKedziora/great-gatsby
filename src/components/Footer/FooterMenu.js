import * as React from "react";

const FooterMenu = () => {

  return(
    <>
      <div className="footer-menu">
        <div className="row">
            <div className="col-lg-4 col-12">
                <div className="footer-menu__text">ul. Towarowa 5/6</div>
                <div className="footer-menu__text">31-000 Kraków</div>
                <div className="footer-menu__text__contact">
                    <div className="footer-menu__text footer-menu__text--bold"><a href="callto:0048999999999">+48 999 999 999</a></div>
                    <div className="footer-menu__text footer-menu__text--bold"><a href="mailto:email@email.com">email@email.com</a></div>
                </div>
            </div>
            <div className="col-lg-4 col-12">
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li className="footer-menu__text"><a href="/">Strona główna</a></li>
                            <li className="footer-menu__text"><a href="/">Poznaj przestrzeń</a></li>
                            <li className="footer-menu__text"><a href="/">Oferta</a></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li className="footer-menu__text"><a href="/">Lokalizacja</a></li>
                            <li className="footer-menu__text"><a href="/">Własne biuro</a></li>
                            <li className="footer-menu__text"><a href="/">Kontakt</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-12"></div>
        </div>
      </div>
    </>
  );
};

export default FooterMenu;