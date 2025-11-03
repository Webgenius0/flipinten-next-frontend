import React from "react";

export default function ArrowSvg({className, fillColor}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
     className={`w-full h-auto ${className}`}
      viewBox="0 0 17 15"
      fill="none"
    >
      <path
        d="M15.5 7.5H1.5M15.5 7.5L9.5 13.5M15.5 7.5L9.5 1.5"
        stroke={fillColor || "#E52621"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
