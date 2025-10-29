import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const FreelancerCard = ({ freelancer }) => {
  const { image, name, role, rating, earning, description, projects } =
    freelancer;

  return (
    <div className="shadow-[0_0_30px_0_rgba(0,0,0,0.05)] p-5 rounded-2xl hover:scale-105 transition-ease-in-out">
      {/* image  */}
      <div className="aspect-video">
        <Image src={image} alt="name" />
      </div>

      {/* name nad rating  */}
      <div className="flex items-center justify-between mt-5 mb-2">
        <p className="text-secondary font-semibold text-lg">{name}</p>
        <div className="flex items-center gap-2">
          <Star color="#FFC700" fill={"#FFC700"} size={24} />
          <p className="text-secondary font-medium">{rating}/5</p>
        </div>
      </div>

      {/* role and number of projects  */}
      <div className="flex items-center justify-between text-neutral100 font-medium mb-2">
        <p>{role}</p>
        <p>{projects} Projects</p>
      </div>

      {/* earning  */}
      <p className="text-secondary font-semibold text-lg">
        ${earning}{" "}
        <span className="font-normal text-xs text-neutral100">
          /monthly earnings
        </span>
      </p>

      {/* description  */}
      <p className="text-sm text-neutral80 mt-4">{description}</p>
    </div>
  );
};

export default FreelancerCard;
