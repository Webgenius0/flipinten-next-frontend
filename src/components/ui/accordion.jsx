"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon, Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

function Accordion({ ...props }) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "px-8 py-4 data-[state=open]:py-8 transition-all duration-300 rounded-3xl data-[state=open]:shadow-[0_8px_24px_0_rgba(0,66,153,0.08)]",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 text-[20px] text-neutral200 data-[state=open]:text-secondary",
          className
        )}
        {...props}
      >
        {children}

        <Button
          size={"icon"}
          className={"!p-4 btn bg-nuetral text-neutral200 border-neutral200"}
        >
          <Plus className="absolute accordion-icon1 transition-all duration-300 ease-in-out" />
          <Minus className="accordion-icon2 transition-all duration-300 ease-in-out" />
        </Button>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-neutral200"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
