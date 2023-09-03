import { AiFillFacebook,AiOutlineTwitter,AiFillInstagram,AiFillYoutube,
  } from "react-icons/ai";
export  const Footer = () => {
  return (
    < >
      <div className="bg-slate-50 grid grid-cols-3 py-2 px-10 md:grid-cols-5 md:py-4 md:px-28">
        <div>
          <h3 className="text-sm font-semibold uppercase py-2 p-1"> online shopping</h3>
          <ol
            className=" font-light 
          text-xs p-1"
          >
            <li>Men</li>
            <li>Women</li>
            <li>kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Gift Cards</li>
            <li>Myntra Insider</li>
          </ol>
          <h3 className="text-sm uppercase py-2 font-semibold p-1">useful links</h3>
          <ol className="text-xs font-light p-1">
            <li>Blog</li>
            <li>Careers</li>
            <li>site Map</li>
            <li>Whitehat</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold py-2 uppercase p-1">Customer Policies</h3>
          <ul className="text-xs p-1 font-light">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy policy</li>
            <li>Grievance Officer</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold py-2 uppercase p-1">
            Experience Myntra App on Mobile
          </h3>

          <h3 className="text-sm font-semibold uppercase p-1">Keep in Touch</h3>
          <div className="flex text-3xl text-stone-500 py-1">

          <AiFillFacebook />
          <AiOutlineTwitter/>
          <AiFillInstagram/>
          <AiFillYoutube/>
          </div>
        </div>

        <div className="pl-14 max-sm:hidden ">
          <div className="text-sm "> 
           <strong> 100% ORIGINAL </strong> guarantee for all products at myntra.com
         </div>
          <div className="text-xs flex my-2">
          <img className="h-14 mr-2 " src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" alt="" />
          <div>
            <strong> Return within 14days</strong> of receiving your order
            </div>
            </div>
        </div>

      </div>
        <div className="h-[1px] bg-slate-200 mx-28"></div>
        <div className="bg-slate-100  md:px-28 max-sm:px-10">
            <h3 className="text-sm font-semibold uppercase py-2 p-1">popular searches</h3>
            <p className="text-xs  font-light p-1 uppercase inset-8">Makeup | Dresses | For Girls  | T-Shirts  | Sandals  | Headphones  | Babydolls  | Blazers |
             For Men | Handbags  | Ladies Watches  | Bags  | Sport Shoes  | Reebok Shoes  | Puma Shoes  | Boxers  | Wallets  | Tops  | Earrings  | 
             Fastrack Watches  | Kurtis  | Nike  | Smart | Watches  | Titan | Watches  | Designer | Blouse  | Gowns  | Rings  | Cricket | Shoes  | Forever | 21  | Eye | Makeup  | Photo | Frames  | Punjabi | | Suits  | Bikini  | Myntra Fashion Show  Lipstick  Saree  Watches  Dresses  Lehenga  Nike Shoes  Goggles  Bras  Suit  Chinos  Shoes  Adidas Shoes  Woodland Shoes  Jewellery  Designers Sarees</p>

        </div>
        <div className="h-[1px] bg-slate-200 mx-28"></div>

    </>
  );
};
