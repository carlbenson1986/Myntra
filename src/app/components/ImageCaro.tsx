import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import m1 from "./../../images/handbags.jpg";
import m2 from "./../../images/m.jpg";
import m3 from "./../../images/m1.jpg";
import m4 from "./../../images/m2.jpg";
import m5 from "./../../images/m3.jpg";
import m6 from "./../../images/m4.jpg";
import m7 from "./../../images/m5.jpg";
import m8 from "./../../images/m6.jpg";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';


const ImageCaro = () => {
  
  return (
    <Carousel showThumbs={false} showArrows={false}   showStatus={false}
     autoPlay infiniteLoop className='relative md:mt-[7rem] max-sm:mt-[6rem]'>
      <div>
       <Image src={m1} alt='handbags'/>
      </div>
      
      <div>
       <Image src={m2} alt='handbags'/>
      </div>
      
      <div>
       <Image src={m3} alt='handbags'/>
      </div>
      
      <div>
       <Image src={m4} alt='handbags'/>
      </div>
      
      <div>
       <Image src={m5} alt='handbags'/>
      </div>
      <div>
       <Image src={m6} alt='handbags'/>
      </div>
      <div>
       <Image src={m7} alt='handbags'/>
      </div>
      <div>
       <Image src={m8} alt='handbags'/>
      </div>
      
     
    </Carousel>
  );
};

export default ImageCaro;
