import Image from "next/image";
import React from "react";

const ActionCard = ({ action }) => {
  const { image, tag, title, details, views } = action;

  return (
    <div className="group bg-neutral rounded-3xl overflow-hidden">
      {/* Image container */}
      <div className="w-full aspect-video relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        {/* tag */}
        <span className="absolute top-4 left-4 text-neutral font-semibold text-lg bg-black/20 rounded-full px-4 py-1 ">{tag}</span>
      </div>

      {/* Text content */}
      <div className="p-5 text-secondary bg-neutral group-hover:bg-primary group-hover:text-neutral transition-colors duration-300 ease-in-out">
        <h2 className="text-[20px] font-semibold">{title}</h2>
        <p className="text-neutral100 font-medium mt-1 group-hover:text-neutral/80 transition-colors duration-300 ease-in-out">{details}</p>
        <p className="text-lg font-medium mt-2">{views}</p>
      </div>
    </div>
  );
};

export default ActionCard;
