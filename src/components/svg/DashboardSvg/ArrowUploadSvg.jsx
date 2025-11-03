import React from "react";

export default function ArrowUploadSvg({fillColor}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 20H18M12 16V4M12 4L15.5 7.5M12 4L8.5 7.5"
        stroke={fillColor || "#888E9C"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
