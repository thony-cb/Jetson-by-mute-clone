"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Card({ label, content, image, icon }) {
  const controls = useAnimation(); // Fix the hook name
  return (
    <div className="aspect-[.6] relative min-w-[18rem] min-h-[10rem] overflow-clip rounded-2xl  flex flex-col ">
      {image}
      <div
        className={
          "rounded-xl absolute top-0 backdrop-brightness-80 h-full flex justify-end flex-col p-4 gap-4 min-w-[18rem] sm:w-[17.375rem]"
        }
      ></div>
      <motion.div
        animate={controls}
        variants={cardVars} // Assuming you have defined cardVars somewhere in your code
        onHoverStart={() => controls.start("animate")}
        onHoverEnd={async () => {
          await controls.start("exit");
          await controls.start("initial");
        }}
        initial="initial"
        className="absolute top-0 flex flex-col justify-end w-full h-full gap-4 p-4 cursor-pointer "
      >
        {icon}
        <motion.span className="flex items-center justify-between w-full ">
          <p className="text-3xl font-light leading-none tracking-tight text-white">
            {label}
          </p>
          <motion.span
            variants={iconVars}
            animate={controls}
            initial="initial"
            onHoverStart={() => controls.start("animate")} // Start the animation on hover start
            onHoverEnd={async () => {
              await controls.start("exit");
              await controls.start("initial");
            }} // Start the exit animation on hover end
          >
            <PlusIcon className="inline-block w-8 h-8 text-white transition-transform rounded-full duration-20 shrink-0 " />
          </motion.span>
        </motion.span>
      </motion.div>
    </div>
  );
}

const cardVars = {
  initial: {
    y: 0,
  },
  animate: {
    y: -15,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  exit: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};
const iconVars = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 45,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
  exit: {
    rotate: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};
