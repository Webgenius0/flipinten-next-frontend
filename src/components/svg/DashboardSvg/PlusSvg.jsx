import React from "react";

export default function PlusSvg({className, fillColor}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className && className}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke={fillColor || "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
