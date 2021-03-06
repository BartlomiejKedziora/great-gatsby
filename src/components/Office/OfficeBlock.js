import * as React from "react";

const OfficeBlock = (props) => {

  return(
    <>
        <div className="col-lg-6 col-12 office-block--padding">
            <div className="office-block">
                <img src={props.img} alt="office job" />
                <div className="office-block__box" style={props.boxStyle}>
                    <div className="office-block__box-title">{props.text}</div>
                    <div className="office-block__box-price">{props.price}</div>
                </div>
                <a className="office-block__btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="82" viewBox="0 0 72 82"><g><g transform="rotate(-180 29.5 41)"><g><path fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="20" stroke-width="3" d="M41.616 40.769H18.134"/></g><g><path fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="20" stroke-width="3" d="M27.815 30v0L17 40.769v0l10.815 10.769v0"/></g></g></g></svg>
                </a>
            </div>
        </div>
    </>
  );
};

export default OfficeBlock;