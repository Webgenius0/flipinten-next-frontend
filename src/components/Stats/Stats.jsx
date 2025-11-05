"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

// const css = `
// .candy-bg {
//     background-color: hsl(0 0% 96%, 2%);
//     background-image: linear-gradient(
//       135deg,
//       hsl(0 0% 96%) 25%,
//       transparent 25.5%,
//       transparent 50%,
//       hsl(0 0% 96%) 50.5%,
//       hsl(0 0% 96%) 75%,
//       transparent 75.5%,
//       transparent
//     );
//     background-size: 10px 10px;
//   }`;

const css = `
.candy-bg {
    background-color: #277647;
    background-image: linear-gradient(
      135deg,
      hsl(0 0% 96%) 25%,
      transparent 25.5%,
      transparent 50%,
      hsl(0 0% 96%) 50.5%,
      hsl(0 0% 96%) 75%,
      transparent 75.5%,
      transparent
    );
    background-size: 16px 16px;
  }`;

const statInfo = [
  {
    value: 35,
    label: "May",
  },
  {
    value: 55,
    label: "June",
  },
  {
    value: 85,
    label: "July",
  },
  {
    value: 45,
    label: "August",
  },
  {
    value: 68,
    label: "Sept.",
  },
  {
    value: 18,
    label: "October",
  },
  {
    value: 49,
    label: "November",
  },
];

const Stats = () => {
  return (
    <section className="py-32">
      <style>{css}</style>
      <div className="gradient container">
        <div className="relative mx-auto mt-20 flex h-[300px] w-full items-end justify-between gap-2">
          {
            statInfo?.map((props, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  damping: 10,
                }}
                className={`w-[70px]`}
                style={{height: `${props?.value}%`}}
              >
                <BarChart {...props} />
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export { Stats };

const BarChart = ({
  value,
  label,
  className = "",
  showToolTip = false,
  delay = 0,
}) => {
  return (
    <div className="group relative h-full w-full">
      {/* for color bar */}
      <div className="candy-bg relative h-full w-full rounded-[40px] group ">
        <motion.div
          initial={{ opacity: 0, y: 100, height: 0 }}
          // animate={{ opacity: 1, y: 0, height: `${value}%` }}
          animate={{ opacity: 1, y: 0, height: `100%` }}
          transition={{ duration: 0.5, type: "spring", damping: 20, delay }}
            className={cn(
              "absolute bottom-0 mt-auto w-full rounded-[40px]  group-hover:bg-linear-to-t from-green-400/20 to-green-200/10 p-3 text-white",
              className
            )}
        >
          
        </motion.div>

        <div className="w-[180px] opacity-0 group-hover:opacity-100 py-3 px-6 rounded-xl shadow-lg border border-neutral50 space-y-2 translate-y-2  group-hover:-translate-y-24 absolute duration-300 bg-white z-999999999 ">
          <p className="text-sm font-medium text-neutral600">Pending Payouts</p>
           <NumberFlow value={value} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100, height: 0 }}
        animate={{ opacity: 1, y: 0, height: `${value}%` }}
        transition={{ duration: 0.5, type: "spring", damping: 15, delay }}
        className="absolute bottom-0 w-full"
      >
       
      </motion.div>
      <p className="mx-auto mt-2 w-fit tracking-tight text-muted-foreground/80">
        {label}
      </p>
    </div>
  );
};
