import { ArrowRight } from "lucide-react";
import React from "react";

const StepCard = ({ step, index, length }) => {
  return (
    <>
      {/* card  */}
      <div className="flex-1 bg-neutral rounded-2xl flex items-center flex-col  gap-5 p-8">
        <div className="bg-secondary text-neutral w-11 h-11 flex items-center justify-center rounded-full text-3xl font-semibold">
          <p>{index + 1}</p>
        </div>
        <p className="text-color-secondary text-2xl">{step}</p>
      </div>

      {/* arrow */}
      {index !== length - 1 ? <ArrowRight size={40} /> : <></>}
    </>
  );
};

export default StepCard;
