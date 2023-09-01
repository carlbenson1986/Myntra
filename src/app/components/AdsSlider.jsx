import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import r1 from "./../../images/rakshabandhan/24329cef-087e-441e-acd6-bc7e05eefc891691045352279-Ethnic_Wear.png"
import r2 from "./../../images/rakshabandhan/38f1add0-b7b9-4764-8156-625b026049a41691045352290-Handbags.png"
import r3 from "./../../images/rakshabandhan/728be17b-8a33-4cd6-95b1-4c612048d7961691045352269-Ethnic.png"
import r6 from "./../../images/rakshabandhan/f5.png"
import r4 from "./../../images/rakshabandhan/a4d4675c-0bfc-4250-8a7a-bfbdd62073f01691045352399-Watches_.png"
import Image from "next/image";

function AdsSlider() {
  // const swiper = new Swiper();    (window.innerWidth < 768) ? 5 : 4,   (window.innerWidth < 768) ? 1 : 1,

  const [slidesToShow,setSlidesToShow] = useState(4);
  const [slidesToScroll,setSlidesToScroll] = useState(1);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setSlidesToShow(window.innerWidth < 768 ? 4 : 5)
       setSlidesToScroll(window.innerWidth < 768 ? 1 : 1)
      
      // Use the slidesToShow and slidesToScroll values as needed
      // (e.g., update state or any other logic)
    };

    // Call the function initially
    updateWindowDimensions();

    // Attach the function to the "resize" event to update on window size changes
    window.addEventListener('resize', updateWindowDimensions);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);
  const settings = {
    dots: true,
  
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll
  };
  return (
    <div className=" indent-1 max-sm:w-11/12 ">
      
      <h1 className="uppercase text-zinc-700
       mt-12 ml-3	sm:mt-16 sm:ml-7 
       sm:text-3xl text-xl mb-10 tracking-widest  font-bold ">
      RAKSHABANNDHAN GIFTS THIS WAY
      </h1>

      <Slider   className="max-sm:ml-3"
      {...settings} autoplay={true}
      >
        <Image src={r1} alt="d"/>
        <Image src={r2} alt="d"/>
        <Image src={r3} alt="d"/>
        <Image src={r4} alt="d"/>
        {/* <Image src={r5} alt="d"/> */}
        <Image src={r6} alt="d"/>
          
        </Slider>
    </div>
  );
}

export default AdsSlider;
