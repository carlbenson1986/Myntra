"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ImageCaro from "./components/ImageCaro";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import AdsSlider from "./components/AdsSlider";
import AdsCaro from "./components/AdsCaro";



const Footer = () => {
  return (
    <>
      <div className="bg-slate-100 grid grid-cols-5 py-4 px-16">
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
        </div>

        <div className="pl-14">
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
    </>
  );
};

export default function Home() {
  // const router = useRouter();
  return (
    <>
      <Navbar />
      <ImageCaro />
      <AdsCaro heading=" medal worthy brands to bag" />
      <AdsSlider/>
      <Cards/>
      <Footer />
    </>
  );
}
