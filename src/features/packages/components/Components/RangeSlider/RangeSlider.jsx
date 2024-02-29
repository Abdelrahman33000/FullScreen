import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MarkItem from "../MarkItem/MarkItem";
import thumbImage from "../Images/logo192.png";
import SliderLabel from "../SliderLabel/SliderLabel";

export default function RangeSlider({
  // minValue,
  maxValue,
  stepValue,
  title,
  name,
  handleChange,
  iconImage
}) {
  // useEffect(() => {
  //   const slider = document.querySelector(".MuiSlider-root");
  //   if (slider) {
  //     slider.style.direction = "rtl"; // Set direction to right-to-left
  //   }
  // }, []);

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

  // const handleSliderChange = (value) => {
  //   console.log(value, "value");
  // };

  return (
    <div className="flex items-center justify-center w-full h-full overflow-x-scroll">
    <div
      dir="rtl"
      className="flex w-full bg-white"
      style={{ height: "135px", minWidth: "900px" }}
    >
      <div className="h-full text-black bg-white">
        <SliderLabel title={title} />
      </div>
  
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute flex flex-col items-center justify-center w-full h-full">
          {[1, 2].map((item) => (
            <div
              className="flex items-center justify-between w-full text-black"
              key={""}
            >
              {item === 1
                ? [
                    ...Array(maxValue / stepValue).fill(0),
                  ].map((value, index) => (
                    <MarkItem
                      key={index}
                      item={item}
                      value={(index + 1) * stepValue}
                      isInitialValue={index === 0}
                    />
                  ))
                : pricesList.map((value, index) => (
                    <MarkItem
                      key={index}
                      item={item}
                      value={value}
                      isInitialValue={index === 0}
                    />
                  ))}
            </div>
          ))}
        </div>
  
        <Slider
          order="flipped"
          track="inverted"
          name={name}
          defaultValue={1}
          onChange={handleChange}
          min={-pricesList.length + 1}
          max={0}
          scale={(x) => -x}
          size="medium"
          color="secondary"
          step={1}
          sx={{
            "& .MuiSlider-thumb": {
              width: "50px",
              height: "50px",
              borderRadius: 1,
              backgroundImage: `url(${iconImage})`,
              backgroundSize: "auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              boxShadow: "none",
            },
            "& .MuiSlider-track": {
              backgroundColor: "lightgray",
              borderColor: "lightgray",
            },
          }}
        />
      </div>
  
      <div className="h-full text-black bg-white">
        <SliderLabel isEmpty={true} />
      </div>
    </div>
  </div>
  
  );
}
