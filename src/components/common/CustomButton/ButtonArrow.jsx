import React from "react";
import { Button } from "../../ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ButtonArrow = ({ variant, children, className, ...props }) => {
  if (variant === "secondary") {
    return (
      <Button
        variant={"icon"}
        className={cn(
          "bg-neutral rounded-2xl text-neutral-secondary border-border ",
          className
        )}
        {...props}
      >
        {children}
        <ArrowRight className="transition-transform duration-300 -translate-x-1 group-hover:translate-x-0" />
      </Button>
    );
  }

  return (
    <Button
      variant={"icon"}
      className={cn(" rounded-2xl  ", className)}
      {...props}
    >
      {children}
      <ArrowRight className="transition-transform duration-300 -translate-x-1 group-hover:translate-x-2" />
    </Button>
  );
};

export default ButtonArrow;
