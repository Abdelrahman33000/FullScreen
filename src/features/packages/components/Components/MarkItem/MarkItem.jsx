import Divider from "@mui/material/Divider";

const MarkItem = ({ value, item, isInitialValue }) => {
  return (
    
  //   <span
  //   className={`flex justify-end relative ${item === 1 ? 'items-start' : 'items-end'}`}
  //   style={{
  //     width: 1,
  //     fontSize: "14px",
  //     fontWeight: "400",
  //   }}
  // >
  //   <span className="px-2">{value}</span>
  //   <Divider
  //     orientation="vertical"
  //     className={`bg-${isInitialValue ? 'purple-600' : 'gray-300'}`}
  //     style={{
  //       width: 2,
  //       height: 50,
  //     }}
  //     flexItem
  //   />
  //   {isInitialValue && item === 2 && (
  //     <span className="absolute px-2 whitespace-nowrap end-0">{"ريال"}</span>
  //   )}
  // </span>
  
  <span
  className={`flex justify-end relative  ${
    item == 1 ? "items-start" : "items-end"
  }`}
  style={{
    width: 1,
    fontSize: "14px",
    fontWeight: "400",
  }}
>
  <span
    className="px-2"
  >
    {value}
  </span>
  <Divider
    orientation="vertical"
    sx={{
      backgroundColor: isInitialValue ? "#9c27b0" : "rgba(0,0,0,0.1)",
      opacity: 1,
      width: 2,
      //   height: isInitialValue? 60 : 50,
      height: 50,
    }}
    flexItem
  />

  {isInitialValue && (
    <span className="absolute px-2 start-0 whitespace-nowrap" >
      {isInitialValue && item == 2 ? "ريال" : ""}
    </span>
  )}
</span>

  );
};

export default MarkItem;
