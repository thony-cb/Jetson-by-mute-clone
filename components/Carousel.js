"use client";
import { features } from "@/Data/features";
import React from "react";
import Card from "./Card";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function Carousel() {
  return (
    <div className="flex flex-col items-start justify-center w-full h-screen gap-10 px-24 pt-24 overflow-hidden">
      <div>
        <h2 className="text-4xl">People-focused. Simple. Comfortable.</h2>
      </div>
      <div className="flex gap-4 ">
        {features.map((feature, index) => {
          return (
            <Dialog.Root key={index}>
              <Dialog.Trigger>
                <Card
                  key={index}
                  label={feature.label}
                  icon={feature.icon}
                  image={feature.image}
                />
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                <Dialog.Content className="bg-white border border-black rounded-lg absolute top-[50%] flex left-[60%] h-screen -translate-x-1/2 -translate-y-1/2 w-[90%]">
                  <div className="flex flex-col flex-1 h-full gap-4 py-10 px-14">
                    <Dialog.Close
                      //   onClick={handleClose} // Handle the close button click
                      className=" p-2 w-fit bg-white text-black rounded-full opacity-60 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                    >
                      <ArrowLeftIcon className="w-6 h-6" />
                      <span className="sr-only">Close</span>
                    </Dialog.Close>
                    <Dialog.Title className="w-full pt-10 text-4xl text-black ">
                      Motion sensor
                    </Dialog.Title>
                    <VisuallyHidden asChild>
                      <Dialog.Description className="text-black border border-green-500 DialogDescription">
                        More information on the feature
                      </Dialog.Description>
                    </VisuallyHidden>
                    <div className="flex">
                      <p className="text-4xl text-black">
                        Jetson comes with a high-sensitivity smart motion sensor
                        that turns on and off the light and ventilation. Just
                        step inside and focus on the task.
                      </p>
                      <div className="absolute flex items-center justify-between gap-4 px-4 bottom-10 h-fit">
                        <button
                          onClick={() => {
                            animationDisabled.current = true; // Disable animation when left button is clicked
                            decrement();
                          }}
                          className={twMerge(
                            " p-2 bg-white text-black rounded-full opacity-60 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                            //   openIndex === 0 && "opacity-10 pointer-events-none"
                          )}
                        >
                          <ArrowLeftIcon className="w-6 h-6" />
                          <span className="sr-only">Left</span>
                        </button>
                        <button
                          onClick={() => {
                            animationDisabled.current = true; // Disable animation when left button is clicked
                            increment();
                          }}
                          className={twMerge(
                            " p-2 bg-white text-black rounded-full opacity-60 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                            //   openIndex === 5 && "opacity-10 pointer-events-none"
                          )}
                        >
                          <ArrowRightIcon className="w-6 h-6" />
                          <span className="sr-only">Right</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 h-full py-5 pr-20 overflow-clip rounded-xl">
                    <Image
                      src={"/lighting.webp"}
                      height={600}
                      width={600}
                      alt="image"
                      className="w-full h-full rounded-xl"
                    />
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          );
        })}
      </div>
    </div>
  );
}
