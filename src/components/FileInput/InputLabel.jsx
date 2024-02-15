import IconButton from "../IconButton";
import filesize from "../../lib/filesize";
import { ArrowUpTrayIconMini, XMarkIconMini } from "../../lib/@heroicons";

export const FileInputLabel = ({ label, fileList, resetFileInput }) => {
  return fileList?.length ? (
    <span className="flex justify-between items-center">
      <span className="flex items-center">
        <span>
          <ArrowUpTrayIconMini className="w-5 h-5  " />
        </span>
        <span>
          {fileList[0].name}{" "}
          <span className="text-xs">({filesize(fileList?.[0].size)} size)</span>
        </span>
      </span>
      <IconButton onClick={resetFileInput} className="!p-0 hover:!bg-gray  ">
        <XMarkIconMini />
      </IconButton>
    </span>
  ) : (
    <span className="flex justify-center items-center">
      <ArrowUpTrayIconMini className="w-6 h-6 ml-2" />
      {label}
    </span>
  );
};

export default FileInputLabel;
