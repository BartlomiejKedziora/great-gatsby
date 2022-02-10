import * as React from "react";

const SingleArticle = (props) => {

  return(
    <>
        <div className="col-lg-4 col-12 article__col">
            <article className="article__box">
                <div className="article__image">
                    <img src={props.img} alt="" />
                </div>
                <div className="article__date">{props.date}</div>
                <p className="article__text">{props.text}</p>
                <a href="/" className="article__btn">Więcej</a>
            </article>            
        </div>
    </>
  );
};

export default SingleArticle;