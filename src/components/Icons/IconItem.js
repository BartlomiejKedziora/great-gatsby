import * as React from "react";

const IconItem = (props) => {

  return(
    <>
        <div className="col-lg-3 col-sm-6 col-12">
            <div className="icon-block">
                <div className="icon-block__img">
                    <img src={props.img} alt="" />
                </div>
                <div className="icon-block__text">{props.text}</div>
            </div>
        </div>
    </>
  );
};

export default IconItem;