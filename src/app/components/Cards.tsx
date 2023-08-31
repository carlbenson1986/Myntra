import Image from "next/image";
import React from "react";
import m1 from "./../../../public/img/cards/k (22).jpg";
import m2 from "./../../../public/img/cards/k (21).jpg";
import k from "./../../images/m2.jpg";
import m28 from "./../../../public/img/cards/k (20).jpg";
import m3 from "./../../../public/img/cards/k (19).jpg";
import m38 from "./../../../public/img/cards/k (18).jpg";
import m4 from "./../../../public/img/cards/k (17).jpg";
import m5 from "./../../../public/img/cards/k (16).jpg";
import m6 from "./../../../public/img/cards/k (15).jpg";
import m7 from "./../../../public/img/cards/k (14).jpg";
import m8 from "./../../../public/img/cards/k (13).jpg";
import m9 from "./../../../public/img/cards/k (12).jpg";
import m10 from "./../../../public/img/cards/k (11).jpg";
import m11 from "./../../../public/img/cards/k (10).jpg";
import m12 from "./../../../public/img/cards/k (9).jpg";
import m13 from "./../../../public/img/cards/k (8).jpg";
import m14 from "./../../../public/img/cards/k (6).jpg";
import m15 from "./../../../public/img/cards/k (5).jpg";
import m16 from "./../../../public/img/cards/k (4).jpg";

function Cards() {
  return (
    <div>
      <h1
        className="uppercase
        text-zinc-700	mt-16 ml-12
         text-3xl mb-12 tracking-widest
         	  font-bold "
      >
        shop by category
      </h1>

      <div className="my-7">
        <div className="flex flex-row mx-16">
          <Image className="basis-1/5 w-5 " src={k} alt="m" />
          <Image className="basis-1/5 w-5 " src={k} alt="m" />
          <Image className="basis-1/5 w-5 " src={k} alt="m" />
          <Image className="basis-1/5 w-5 " src={k} alt="m" />
          <Image className="basis-1/5 w-5 " src={k} alt="m" />
          <Image className="basis-1/5 w-5 " src={m4} alt="m" />
        </div>
        <div className="flex flex-row mx-16">
          <Image className="basis-1/5 w-5 " src={m5} alt="m" />
          <Image className="basis-1/5 w-5 " src={m6} alt="m" />
          <Image className="basis-1/5 w-5 " src={m7} alt="m" />
          <Image className="basis-1/5 w-5 " src={m8} alt="m" />
          <Image className="basis-1/5 w-5 " src={m9} alt="m" />
          <Image className="basis-1/5 w-5 " src={m10} alt="m" />
        </div>
        <div className="flex flex-row mx-16">
          <Image className="basis-1/5 w-5 "  src={m11} alt="m" />
          <Image className="basis-1/5 w-5 " src={m12} alt="m" />
          <Image className="basis-1/5 w-5 " src={m13} alt="m" />
          <Image className="basis-1/5 w-5 " src={m14} alt="m" />
          <Image className="basis-1/5 w-5 " src={m15} alt="m" />
          <Image className="basis-1/5 w-5 " src={m16} alt="m" />
        </div>
        {/* <div className="flex flex-row mx-16"> */}
        {/* <Image className="basis-1/4 w-9 " src={m20} alt="m" />
          <Image className="basis-1/4 w-9 " src={m19} alt="m" />
          <Image className="basis-1/4 w-9 " src={m18} alt="m" />
        </div> */}
      </div>
    </div>
  );
}

export default Cards;
