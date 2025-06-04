"use client";

import { Dispatch, FC, SetStateAction } from "react";

import ContactForm from "./ContactForm";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent } from "./ui/Drawer";
import { ResponsiveModal, ResponsiveModalContent } from "./ui/Dialog";
import { ScrollArea } from "./ui/scroll-area";

interface ContactModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ContactModal: FC<ContactModalProps> = ({ isOpen, setIsOpen }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <div>
        <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
          <ResponsiveModalContent>
            <ContactForm setIsOpen={setIsOpen}></ContactForm>
          </ResponsiveModalContent>
        </ResponsiveModal>
      </div>
    );
  } else {
    return (
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent>
          <ScrollArea>
            <ContactForm setIsOpen={setIsOpen}></ContactForm>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    );
  }
};

export default ContactModal;
