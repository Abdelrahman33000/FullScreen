import { useEffect } from "react";
import { HeroSection } from "../../components";
import { Packages } from "./components";
import { useState } from "react";
// import logo from "./logo.svg";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import RangeSlider from "./components/Components/RangeSlider/RangeSlider";
import SlidersPage from "./components/Components/SlidersPage";
import designIcon from "./components/Components/Images/design-icon.png";
import graphicIcon from "./components/Components/Images/graphic-icon.png";
import productsPhotographyIcon from "./components/Components/Images/products-photography-icon.png";
import videoPhotographyIcon from "./components/Components/Images/video-photography-icon.png";
import { useTranslation } from "react-i18next";

import instagramIcon from "./components/Components/Images/instagram-icon.png";
import snapchatIcon from "./components/Components/Images/snapchat-icon.png";
import xIcon from "./components/Components/Images/x-icon.png";
import tiktokIcon from "./components/Components/Images/tiktok-icon.png";

export const PackagesWrapper = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const contentWrittingList = [
    {
      title: "التصاميم",
      name: "design",
      icon: designIcon,
    },
    {
      title: "الموشن جرافيك",
      name: "graphic",
      icon: graphicIcon,
      minValue: 1,
      maxValue: 11,
      stepValue: 1,
    },
    {
      title: "تصوير المنتجات",
      name: "products_photography",
      icon: productsPhotographyIcon,
    },
    {
      title: "التصوير فيديو كروما",
      name: "video_photography",
      icon: videoPhotographyIcon,
    },
  ];

  const socialMediaList = [
    {
      // title: "التصاميم",
      name: "instgram",
      icon: instagramIcon,
    },
    {
      // title: "الموشن جرافيك",
      name: "snapchat",
      icon: snapchatIcon,
      // minValue: 1,
      // maxValue: 11,
      // stepValue: 1,
    },
    {
      // title: "تصوير المنتجات",
      name: "twitter",
      icon: xIcon,
    },
    {
      // title: "التصوير فيديو كروما",
      name: "tiktok",
      icon: tiktokIcon,
    },
  ];

  const [totalPriceValues, setTotalPriceValues] = useState({
    design: 0,
    graphic: 0,
    products_photography: 0,
    video_photography: 0,
    // instgram: 0,
    // snapchat: 0,
    // twitter: 0,
    // tiktok: 0,
  });

  useEffect(() => {
    console.log(totalPriceValues, "total");
  }, [totalPriceValues]);

  const getTotalValue = () => {
    const pricesList = [
      225,
      450,
      675,
      900,
      1125,
      1350,
      1575,
      1800,
      2025,
      2250,
      2475,
    ];
    const data = Object.entries(totalPriceValues).map(
      (item) => pricesList[Number(item[1])]
    );
    console.log(data, "data");
    const sum = data.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
  };


  return (
    <>
      <HeroSection type="package" />

       {/* الباقات  */}
 
       <div className="flex flex-col items-center justify-center min-h-screen text-white">
  <SlidersPage
    dataList={contentWrittingList}
    setTotalPriceValues={setTotalPriceValues}
  />
  {/* <SlidersPage
    dataList={socialMediaList}
    setTotalPriceValues={setTotalPriceValues}
  /> */}
  <div className="container flex justify-center gap-2 py-3 my-3 text-black bg-white" dir="rtl">
    <span>{getTotalValue()}</span>
    <span>:Total</span>
  </div>
    <button  style={{backgroundColor:"#9c27b0" , color:"#fff ", padding:"5px 30px" , marginBottom:"20px" , borderRadius:"10px"}}> {t("Order now")} </button>
</div>

      
      <Packages />
      
   
    </>
  );
};
export default PackagesWrapper;
