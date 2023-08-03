"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  OpenDialog,
  OverlayAnimation,
  SwitchAnimation,
} from "@/Data/Animations";

// Create a reusable dialog component
function Modal({
  open,
  onOpenChange,
  isSwitching,
  handleClose,
  title,
  description,
  children,
  isDragging,
}) {
  return (
    <Dialog.Root className="" open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger
        className={twMerge(
          "focus:ring focus:ring-violet-300 focus:outline-none rounded-xl",
          isDragging && "pointer-events-none"
        )}
      >
        {children} {/* Render the trigger content */}
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Content handleClose={handleClose} isSwitching={isSwitching}>
            <LeftContent isSwitching={isSwitching} />
            <RightContent />
          </Content>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

//Create Main Content Wrapper
function Content({ children, handleClose, isSwitching }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay asChild>
        <motion.div
          onClick={handleClose}
          className="fixed inset-0 cursor-pointer bg-black/50 backdrop-blur-[10px]"
          variants={isSwitching ? null : OverlayAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        ></motion.div>
      </Dialog.Overlay>
      <Dialog.Content asChild>
        <motion.div
          variants={isSwitching ? null : OpenDialog}
          initial="initial"
          animate="animate"
          exit="exit"
          className="bg-white border border-black rounded-lg absolute top-[50%] flex left-[60%] h-screen -translate-x-1/2 origin-right -translate-y-1/2 w-[90%]"
        >
          {children}
        </motion.div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
// Create reusable components for LeftContent, RightContent, and ToggleButtons
function LeftContent({
  handleClose,
  isSwitching,
  title,
  description,
  children,
}) {
  return (
    <div className="flex flex-col flex-1 h-full gap-4 py-10 px-14">
      <Dialog.Close
        onClick={handleClose}
        className="p-2 w-fit bg-black/20 text-black rounded-full opacity-60 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
      >
        <ArrowLeftIcon className="w-6 h-6" />
        <span className="sr-only">Close</span>
      </Dialog.Close>
      <Dialog.Title className="w-full pt-10 text-4xl text-black ">
        <motion.h1
          variants={isSwitching ? SwitchAnimation : null}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {title}
        </motion.h1>
      </Dialog.Title>
      <VisuallyHidden asChild>
        <Dialog.Description className="text-black DialogDescription">
          {description}
        </Dialog.Description>
      </VisuallyHidden>
      <motion.div
        variants={isSwitching ? SwitchAnimation : null}
        initial="initial"
        animate="animate"
        exit="exit"
        className="text-4xl text-black"
      >
        {children}
      </motion.div>
      <ToggleButtons />
    </div>
  );
}

function RightContent({ children }) {
  return (
    <div className="flex-1 h-full py-5 pr-20 overflow-clip rounded-xl">
      {children}
    </div>
  );
}

function ToggleButtons({ children, isSwitching }) {
  // Implement your increment and decrement functions
  const increment = () => {};
  const decrement = () => {};

  return (
    <div className="flex">
      <motion.p
        variants={isSwitching ? SwitchAnimation : null}
        initial="initial"
        animate="animate"
        exit="exit"
        className="text-4xl text-black"
      >
        {children}
      </motion.p>
      <div className="absolute flex items-center justify-between gap-4 px-4 bottom-10 h-fit">
        <button
          onClick={decrement}
          className={twMerge(
            "p-2 bg-white/20 text-black rounded-full opacity-60 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          )}
        >
          <ArrowLeftIcon className="w-6 h-6" />
          <span className="sr-only">Left</span>
        </button>
        <button
          onClick={increment}
          className={twMerge(
            "p-2 bg-black/20 text-black rounded-full opacity-60 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          )}
        >
          <ArrowRightIcon className="w-6 h-6" />
          <span className="sr-only">Right</span>
        </button>
      </div>
    </div>
  );
}

// Export the main reusable component
export default Modal;

// Export subcomponents for additional customization
Modal.Content = Content;
Modal.LeftContent = LeftContent;
Modal.RightContent = RightContent;
Modal.ToggleButtons = ToggleButtons;
