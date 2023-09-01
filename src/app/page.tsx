"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ImageCaro from "./components/ImageCaro";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import AdsSlider from "./components/AdsSlider";
import AdsCaro from "./components/AdsCaro";
import { Footer } from "./components/Footer";



export default function Home() {
  // const router = useRouter();
  const  h= "medal worthy brands to bag";
  
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
