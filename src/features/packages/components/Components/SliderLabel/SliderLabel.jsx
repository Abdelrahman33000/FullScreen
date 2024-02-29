import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { fontSize } from "@mui/system";
import { useTranslation } from "react-i18next";

const SliderLabel = ({ title, isEmpty }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div
    className={`h-full flex flex-col items-start justify-center ${isEmpty ? 'w-32' : 'w-48'}`}
  >
       {[1, 2, 3].map((item) =>
        item == 2 ? (
          <Divider key={""}
            sx={{
              backgroundColor: isEmpty ? "rgba(0,0,0,0.1)" : "#9c27b0",
              height: 4,
              opacity: 1,
              border: "none",
            }}
            flexItem
          />
        ) : (
          !isEmpty && (
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                paddingY: "7px",
                // paddingX: 1,
              }}
            >
              {item == 1 ? title : t("Price")}
            </Typography>
          )
        )
      )}
  </div>
  
  );
};

export default SliderLabel;
