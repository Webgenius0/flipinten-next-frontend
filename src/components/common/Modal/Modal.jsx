"use client";
import React from "react";

export default function Modal({ isOpen, setIsOpen, children, className }) {
  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/30 w-full h-screen overflow-hidden backdrop-blur-[3px] flex items-center justify-center  z-99 isolate"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-card w-[760px] h-[700px] overflow-auto mx-auto p-12 rounded-2xl ${className}`}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}
