"use client";
import ImageCaro from "./components/HomePage/ImageCaro";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/HomePage/Cards";
import AdsSlider from "@/app/components/HomePage/AdsSlider";
import AdsCaro from "@/app/components/HomePage/AdsCaro";
import { Footer } from "./components/HomePage/Footer";



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
