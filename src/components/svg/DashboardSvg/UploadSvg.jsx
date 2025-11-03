import React from "react";

export default function UploadSvg({fillColor}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M10.1234 24.7533C-0.00161928 25.8783 1.12338 13.5033 10.1234 14.6283C6.74838 2.25329 25.8734 2.25329 24.7484 11.2533C35.9984 7.87829 35.9984 25.8783 25.8734 24.7533M12.3734 20.2533L17.9984 15.7533M17.9984 15.7533L23.6234 20.2533M17.9984 15.7533V32.6283"
        stroke={fillColor || "#404A60"}
        stroke-width="2.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
