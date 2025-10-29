import { cn } from "@/lib/utils";
import React from "react";

const Badge = ({ children, className, variant, ...props }) => {
  let secondaryClassname;
  if (variant === "secondary") {
    secondaryClassname = 'max-w-max text-primary flex items-center gap-2 text-xs rounded-[8px] font-normal px-2 py-1'
  }

  return (
    <div
      className={cn(
        "text-neutral text-lg border border-primary bg-primary/20 px-4 py-1 rounded-full ",
        secondaryClassname,
        className,       
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
