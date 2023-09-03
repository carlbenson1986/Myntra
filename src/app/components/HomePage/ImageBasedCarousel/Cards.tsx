import Image from "next/image";
import React from "react";
import m1 from "./../../../../../public/img/cards/k22.jpg";
import m2 from "./../../../../../public/img/cards/k21.jpg";
import m28 from "./../../../../../public/img/cards/k20.jpg";
import m3 from "./../../../../../public/img/cards/k19.jpg";
import m38 from "./../../../../../public/img/cards/k18.jpg";
import m4 from "./../../../../../public/img/cards/k17.jpg";
import m5 from "./../../../../../public/img/cards/k16.jpg";
import m6 from "./../../../../../public/img/cards/k15.jpg";
import m7 from "./../../../../../public/img/cards/k14.jpg";
import m8 from "./../../../../../public/img/cards/k13.jpg";
import m9 from "./../../../../../public/img/cards/k12.jpg";
import m10 from "./../../../../../public/img/cards/k11.jpg";
import m11 from "./../../../../../public/img/cards/k10.jpg";
import m12 from "./../../../../../public/img/cards/k9.jpg";
import m13 from "./../../../../../public/img/cards/k8.jpg";
import m14 from "./../../../../../public/img/cards/k6.jpg";

import m15 from "./../../../../../public/img/cards/k5.jpg";
import m16 from "./../../../../../public/img/cards/k4.jpg";

function Cards() {
  return (
    <div>
      <h1
        className="uppercase
        text-zinc-700	sm:mt-16 sm:ml-12 mt-10 ml-5
        text-2xl sm:text-3xl sm:mb-12 tracking-widest
         	  font-bold "
      >
        shop by category
      </h1>

      <div className="my-7">
        <div className="flex flex-row md:mx-14 mx-2">
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3  basis-1/2" src={m1} alt="m" />
          <Image  objectFit="contain"  className="md:basis-1/5  md:w-5 w-3 basis-1/2 " src={m2} alt="m" />
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3  basis-1/2" src={m28} alt="m" />
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3  basis-1/2" src={m3} alt="m" />
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3 max-sm:hidden  basis-1/2" src={m38} alt="m" />
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3 max-sm:hidden basis-1/2" src={m4} alt="m" />
        </div>
        <div className="flex flex-row md:mx-14 mx-2">
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3  basis-1/2" src={m5} alt="m" />
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3  basis-1/2" src={m6} alt="m" />
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3  basis-1/2" src={m7} alt="m" />
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3  basis-1/2" src={m8} alt="m" />
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3 max-sm:hidden  basis-1/2" src={m9} alt="m" />
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3 max-sm:hidden  basis-1/2" src={m10} alt="m" />
        </div>
        <div className="flex flex-row md:mx-14 mx-2">
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3  basis-1/2"  src={m11} alt="m" />
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3  basis-1/2" src={m12} alt="m" />
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3  basis-1/2" src={m13} alt="m" />
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3  basis-1/2" src={m14} alt="m" />
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3 max-sm:hidden  basis-1/2" src={m15} alt="m" />
          <Image  objectFit="contain"  className="md:basis-1/5 md:w-5 w-3  max-sm:hidden basis-1/2" src={m16} alt="m" />
        </div>
        {/* <div className="flex flex-row mx-16"> */}
        {/* <Image className="basis-1/4 w-9 " src={m20} alt="m" />
          <Image  objectFit="contain"  className="basis-1/4 w-9 " src={m19} alt="m" />
          <Image  objectFit="contain"  className="basis-1/4 w-9 " src={m18} alt="m" />
        </div> */}
      </div>
    </div>
  );
}

export default Cards;
