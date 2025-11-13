import React from "react";

export default function TradeUpSvg({className, fillColor}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className && className}`}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M15 9.75V6H11.25"
        stroke={fillColor || "#1CCC62"}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 6L11.25 9.75C10.5877 10.4123 10.257 10.743 9.85125 10.7798C9.78375 10.7858 9.71625 10.7858 9.64875 10.7798C9.243 10.7423 8.91225 10.4123 8.25 9.75C7.58775 9.08775 7.257 8.757 6.85125 8.72025C6.78389 8.71416 6.71611 8.71416 6.64875 8.72025C6.243 8.75775 5.91225 9.08775 5.25 9.75L3 12"
        stroke={fillColor || "#1CCC62"}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
