"use client";
import ImageCaro from "./components/HomePage/ImageBasedCarousel/ImageCaro";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/HomePage/ImageBasedCarousel/Cards";
import AdsSlider from "@/app/components/HomePage/ImageBasedCarousel/AdsSlider";
import AdsCaro from "@/app/components/HomePage/ImageBasedCarousel/AdsCaro";
import { Footer } from "./components/HomePage/Footer/Footer";



export default function Home() {

  return (
    <>
    
      <Navbar />
      <ImageCaro />
      <AdsCaro heading={"medal worthy brands to bag"}/>
      <AdsSlider/>
      <Cards/>
      <Footer />
    </>
  );
}
