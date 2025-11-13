import React from "react";

export default function layout({ children }) {
  return (
    <div className="w-full">
      <div className="max-w-[1400px] w-full mx-auto py-5">
        <h1 className="w-fit text-5xl font-bold leading-relaxed my-8 bg-linear-to-r from-black via-gray-600 to-gray-500 bg-clip-text text-transparent capitalize">All Pages</h1>

        <div>{children}</div>
      </div>
    </div>
  );
}
