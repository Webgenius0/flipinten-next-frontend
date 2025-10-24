import Apple from "@/components/svg/Apple";
import React from "react";

const AppleStoreButton = () => {
  return (
    <button className="download-button flex items-center gap-2 border-[A6A6A6] border rounded-sm px-2 py-1 cursor-pointer hover:bg-neutral/10 transition-all duration-100 ease-in-out">
      <Apple className={"scale-110"} />
      <div className="text-left">
        <p className="text-[10px]">Download on the</p>
        <p className="text-md font-semibold">App Store</p>
      </div>
    </button>
  );
};

export default AppleStoreButton;
