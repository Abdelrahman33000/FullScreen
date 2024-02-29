import React from "react";
import RangeSlider from "./RangeSlider/RangeSlider";

const SlidersPage = ({ dataList, setTotalPriceValues }) => {
  const handleSliderChange = (e, key) => {
    console.log(e.target);
    setTotalPriceValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value * -1,
    }));
  };

  return (
    <div className="container flex flex-col w-full gap-3 py-3 ">
    <div className="flex flex-col gap-3">
      {dataList.map((item) => (
        <RangeSlider
          key={item.name}
          title={item.title ? item.title : 'الظهور'}
          name={item.name}
          minValue={item.minValue ? item.minValue : 5}
          maxValue={item.maxValue ? item.maxValue : 55}
          stepValue={item.stepValue ? item.stepValue : 5}
          handleChange={(value) => handleSliderChange(value, item.name)}
          iconImage={item.icon}
        />
      ))}
    </div>
  </div>
  
  );
};

export default SlidersPage;
