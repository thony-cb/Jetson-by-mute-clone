"use client";
import { Dialog } from "@radix-ui/react-dialog";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ContactForm from "./ContactForm";
import { OpenDialog, OverlayAnimation } from "@/Data/Animations";
import { twMerge } from "tailwind-merge";
import { useAtom } from "jotai";
import { ContactModal } from "@/Data/Atoms";
import Modal from "./ui/modal";

export default function ContactDialog({ children }) {
  const [isContactModalOpen, setIsContactModalOpen] = useAtom(ContactModal);
  const handleOpenChange = () => {
    setIsContactModalOpen((isContactModalOpen) => !isContactModalOpen);
    console.log(isContactModalOpen);
  };
  return (
    <>
      <Modal open={isContactModalOpen} onOpenChange={handleOpenChange}>
        <Modal.Trigger>{children}</Modal.Trigger>
        <Modal.Content>
          <Modal.LeftContent title={"Contact Form"}>
            <p> Hello World</p>
          </Modal.LeftContent>
          <Modal.RightContent>
            <p>this is content</p>
          </Modal.RightContent>
        </Modal.Content>
      </Modal>
    </>
  );
}
