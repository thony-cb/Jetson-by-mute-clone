"use client";
import React, { useState, useRef, Children, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { wrap } from "popmotion";
import { Dragging, ModalIndex } from "@/Data/Atoms";
import { useAtom } from "jotai";
import { Dialog } from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

const GAP = 15;

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
export default function Carousel({ features, children }) {
  const CAROUSEL_LENGTH = features.length; // Replace CAROUSEL_LENGTH with the actual length of features
  const gapSum = (CAROUSEL_LENGTH - 1) * GAP;

  const [openIndex, setOpenIndex] = useAtom(ModalIndex);
  const [isDragging, setIsDragging] = useAtom(Dragging);
  const containerRef = React.useRef(null);
  const carouselRef = React.useRef(null);
  const controls = useAnimation();
  const [page, setPage] = React.useState(0);

  const currIndex = wrap(0, CAROUSEL_LENGTH, page);

  const paginate = (newDirection) => {
    setPage((p) => p + newDirection);
  };

  const calcX = (index) => {
    if (!carouselRef.current) return 0;

    const childWidth =
      (carouselRef.current.offsetWidth - gapSum) / CAROUSEL_LENGTH;
    return index * childWidth + index * GAP;
  };

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        overflowX: "hidden",
      }}
      className={twMerge("", isDragging && "pointer-events-none")}
    >
      <motion.div
        ref={carouselRef}
        drag="x"
        animate={controls}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400,
        }}
        onDragStart={() => setIsDragging(true)} // Set the state when dragging starts
        onDragEnd={(e, { velocity, offset, point }) => {
          if (!carouselRef.current || !containerRef.current) return;
          setIsDragging(false); // Set the state when dragging ends
          console.clear();

          const swipe = swipePower(offset.x, velocity.x);
          const isRightDirection = offset.x > 45 && velocity.x >= 0;

          /*
            https://github.com/framer/motion/issues/1087
            when touch event by y axis, point is 0 by all axis,
            therfore offset calculates wrong numbers.
          */
          const isPointOkay = point.x !== 0 && point.y !== 0;
          const isLeftDirection =
            offset.x < -45 && velocity.x <= 0 && isPointOkay;

          const childW =
            (carouselRef.current.offsetWidth - gapSum) / CAROUSEL_LENGTH;

          const carouselDiments = carouselRef.current.getBoundingClientRect();
          const containerDiments = containerRef.current.getBoundingClientRect();
          console.log(containerDiments);

          console.log(containerDiments.right, carouselDiments.right, childW);

          const isPassedBoundaries =
            containerDiments.right > carouselDiments.right - childW;

          let newCurrIndex = currIndex;
          let switchSlideBy = Math.ceil(-offset.x / (childW + GAP));

          if (swipe > swipeConfidenceThreshold || isRightDirection) {
            switchSlideBy = switchSlideBy - 1;

            newCurrIndex =
              currIndex > 0 ? currIndex + switchSlideBy : currIndex;
            if (newCurrIndex < 0) newCurrIndex = 0;

            console.log("swipe to right", `${currIndex} to ${newCurrIndex}`);

            const indexDiff = newCurrIndex - currIndex;
            if (indexDiff < 0) {
              switchSlideBy = indexDiff;
            }

            if (currIndex > newCurrIndex) {
              paginate(switchSlideBy);
            }
          } else if (swipe > swipeConfidenceThreshold || isLeftDirection) {
            const lastIndex = CAROUSEL_LENGTH - 1;

            newCurrIndex =
              currIndex < lastIndex ? currIndex + switchSlideBy : currIndex;
            if (newCurrIndex > lastIndex) newCurrIndex = lastIndex;
            if (isPassedBoundaries) {
              const childrenOnScreen = Math.floor(
                containerRef.current.offsetWidth / childW
              );
              newCurrIndex = CAROUSEL_LENGTH - childrenOnScreen;
            }

            console.log("swipe to left", `${currIndex} to ${newCurrIndex}`);

            const indexDiff = newCurrIndex - currIndex;
            if (switchSlideBy > indexDiff) {
              switchSlideBy = indexDiff;
            }

            if (currIndex < newCurrIndex) {
              paginate(switchSlideBy);
            }
          }

          // if carousel has passed the boundaries of a container
          if (isPassedBoundaries && currIndex <= newCurrIndex) {
            const rightEdge =
              -carouselRef.current.offsetWidth +
              containerRef.current.offsetWidth;

            controls.start({ x: rightEdge });
          } else {
            controls.start({ x: -calcX(newCurrIndex) });
          }
        }}
        dragConstraints={{ top: 0 }}
        dragElastic={0.2}
        style={{
          display: "flex",
          gap: GAP,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
