import CircleIcon from "@/components/svg/CircleIcon";
import React from "react";

const TrustCard = ({ trust }) => {
  const { bgColor, iconColor, iconBgColor, icon, title, subtitle, details } =
    trust;
  return (
    <div
      className="p-8 text-center rounded-2xl hover:shadow-2xl transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: bgColor || "white",
        border: `0.5px solid ${iconColor || "gray"}`,
      }}
    >
      <div className="max-w-max mx-auto mb-10">
        <CircleIcon icon={icon} bg={iconBgColor} iconColor={iconColor} />
      </div>
      <h1 className="text-color-primary font-semibold text-2xl">{title}</h1>
      <p className="mt-2 mb-6 text-lg font-medium text-neutral500">
        {subtitle}
      </p>
      <p className="text-color-secondary">{details}</p>
    </div>
  );
};

export default TrustCard;
