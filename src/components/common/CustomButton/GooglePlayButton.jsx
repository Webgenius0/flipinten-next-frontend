import GooglePlay from "@/components/svg/GooglePlay";
import React from "react";

const GooglePlayButton = () => {
  return (
    <button className="download-button flex items-center gap-2 border-[A6A6A6] border rounded-sm px-2 py-1 cursor-pointer hover:bg-neutral/10 transition-all duration-100 ease-in-out">
      <GooglePlay className={'scale-110'} />
      <div className="text-left">
        <p className="text-[10px]">GET IT ON</p>
        <p className="text-md font-semibold">Google Play</p>
      </div>
    </button>
  );
};

export default GooglePlayButton;
