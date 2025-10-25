import { cn } from "@/lib/utils";
import React from "react";

const CircleIcon = ({ icon: Icon, className, bg }) => {
  return (
    <div
      className={cn(
        "w-12 h-12 relative bg-primary rounded-full text-neutral flex items-center justify-center",
        className
      )}
      style={{backgroundColor: bg}}
    >
      <Icon
        className="scale-90 absolute"
        color="white"
      />
    </div>
  );
};

export default CircleIcon;
