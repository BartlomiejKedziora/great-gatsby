import * as React from "react";

import OfficeBlock from "./OfficeBlock";

import banner1 from './../../images/home/shutterstock_1877634640.png';
import banner2 from './../../images/home/shutterstock_1723055614.png';
import banner3 from './../../images/home/shutterstock_1677941275.png';
import banner4 from './../../images/home/shutterstock_1433594243.png';

const OfficeSection = () => {

  return(
    <>
      <section className="office">
        <div className="container">
          <div className="row">
              <OfficeBlock
              img={banner1}
              text='Biuro' 
              price='od 1000 zł/msc' 
              boxStyle={{ width:'223px', height:'159px', top: '29px'}}
              ></OfficeBlock>
              <OfficeBlock
              img={banner2}
              text='Lorem ipsum' 
              price='od 500 zł/msc' 
              boxStyle={{ width:'241px', height:'195px', top: '29px'}}
              ></OfficeBlock>
              <OfficeBlock
              img={banner3}
              text='Biuro lorem' 
              price='od 100 zł/h' 
              boxStyle={{ width:'223px', height:'195px', bottom: '29px'}}
              ></OfficeBlock>
              <OfficeBlock
              img={banner4}
              text='Biuro lorem ipsum
              Lorem ' 
              price='od 100 zł/h' 
              boxStyle={{ width:'324px', height:'195px', bottom: '29px'}}
              ></OfficeBlock>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfficeSection;