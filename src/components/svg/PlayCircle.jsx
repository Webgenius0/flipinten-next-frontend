import { cn } from "@/lib/utils";
import { Triangle } from "lucide-react";
import React from "react";

const PlayCircle = ({ className }) => {
  return (
    <div
      className={cn(
        "w-12 h-12 relative bg-primary rounded-full text-neutral flex items-center justify-center",
        className
      )}
    >
      <Triangle
        fill={"white"}
        className="scale-90 rotate-90 absolute translate-x-[2px]"
        color="white"
      />
    </div>
  );
};

export default PlayCircle;
