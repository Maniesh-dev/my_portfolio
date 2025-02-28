"use client";
import React from "react";
// import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import * as motion from 'motion/react-client'

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(40).fill(1);
  const cols = new Array(200).fill(1);
  let colors = [
    "--sky-300",
    "--pink-300",
    "--green-300",
    "--yellow-300",
    "--red-300",
    "--purple-300",
    "--blue-300",
    "--indigo-300",
    "--violet-300",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  

  return (
    <div
      style={{
        transform: `scale(1) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute flex w-full h-full z-0 overflow-hidden",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-8 h-8 border border-transparent relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              // onClick={()=>console.log("clicked")}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-8 h-8 border border-transparent relative"
            > 
              {/* {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="absolute h-6 w-10 text-slate-900 stroke-[0px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null} */}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
