"use client";

import { Dispatch, FC, SetStateAction } from "react";
import { Dialog, DialogContent } from "./ui/Dialog";
import ContactForm from "./ContactForm";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent } from "./ui/Drawer";

interface ContactModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ContactModal: FC<ContactModalProps> = ({ isOpen, setIsOpen }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent>
            <ContactForm setIsOpen={setIsOpen}></ContactForm>
          </DialogContent>
        </Dialog>
      </div>
    );
  } else {
    return (
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent>
          <ContactForm setIsOpen={setIsOpen}></ContactForm>
        </DrawerContent>
      </Drawer>
    );
  }
};

export default ContactModal;
