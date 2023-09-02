"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ImageCaro from "./components/ImageCaro";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import AdsSlider from "./components/AdsSlider";
import AdsCaro from "./components/AdsCaro";
import { Footer } from "./components/Footer";
import {useSelector} from "react-redux";



export default function Home() {
  // const router = useRouter();
  const  h= "medal worthy brands to bag";
      const items = useSelector((state:any) => state.bag);
console.log(items);

  return (
    <>
    
      <Navbar />
      <ImageCaro />
      <AdsCaro heading={h}/>
      <AdsSlider/>
      <Cards/>
      <Footer />
    </>
  );
}
