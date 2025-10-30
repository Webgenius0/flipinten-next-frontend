import React from "react";

export default function WhiteBox({ children, className }) {
  return (
    <div className={`w-full p-8 rounded-2xl bg-white ${className}`}>
      {children}
    </div>
  );
}
