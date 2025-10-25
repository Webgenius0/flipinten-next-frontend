import React from "react";

const ProcessCard = ({ process }) => {
  const { icon: Icon, label, feature, details } = process;
  return (
    <div className=" group text-center p-6 shadow-[0_0_16px_0_rgba(134,134,134,0.15)] rounded-2xl border-b-2 hover:bg-primary hover:border-neutral hover:scale-105 hoer:border-neutral transition-all duration-200 border-primary">
      <div className="mx-auto group-hover:bg-white/20 group-hover:text-neutral text-primary bg-primary/20 w-14 h-14 flex items-center justify-center rounded-full  transition-colors duration-200">
        <Icon />
      </div>
      <h2 className="mt-6 mb-2 text-2xl font-semibold text-color-primary  group-hover:text-neutral transition-colors duration-200 ">
        {label}
      </h2>
      <p className="group-hover:text-neutral font-semibold text-color-primary mb-4  transition-colors duration-200">{feature}</p>
      <p className="text-sm text-neutral500 group-hover:text-neutral transition-colors duration-200 ">
        {details}
      </p>
    </div>
  );
};

export default ProcessCard;
