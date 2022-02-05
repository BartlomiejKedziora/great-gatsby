import * as React from "react";

import SingleArticle from './SingleArticle'

import img1 from './../../images/home/article1.png'
import img2 from './../../images/home/shutterstock_1187833249.png'
import img3 from './../../images/home/article3.png'

const NewsSection = () => {

  return(
    <>
        <section className="news">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="news__title">Aktualności</div>
                    </div>
                </div>
                <div className="row news__row--wide">
                    <SingleArticle
                    img={img1}
                    date='01.01.2021'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    ></SingleArticle>
                    <SingleArticle
                    img={img2}
                    date='01.01.2021'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    ></SingleArticle>
                    <SingleArticle
                    img={img3}
                    date='01.01.2021'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    ></SingleArticle>
                </div>
            </div>
        </section>
    </>
  );
};

export default NewsSection;