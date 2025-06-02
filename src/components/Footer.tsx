"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, useState } from "react";
import Button from "./ui/Button";
import { ArrowRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/Dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/Drawer";
import ContactForm from "./ContactForm";
import ContactModal from "./ContactModal";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div
      id="contact"
      className="bg-[#080A13] relative pb-4 pt-96 h-fit mt-auto"
    >
      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen}></ContactModal>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px] ",

          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_bottom,transparent_20%,black)] dark:bg-black"></div>

      <div className="absolute w-[80%] aspect-[4/5] md:aspect-[1202/403] rounded-2xl overflow-hidden left-1/2 -translate-x-1/2 -top-60    ">
        <Image
          src={"/bg.png"}
          alt="background image"
          fill
          className="object-cover"
        ></Image>
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-8 max-md:px-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-[32px] font-[500] font-syne text-center">
              Empower Your Business with Merry Matrix
            </h2>
            <p className="text-[#e1e6f0] text-[18px] font-[400] font-syne text-center">
              Join hundreds of companies building their digital future with us.
            </p>
          </div>
          <div className="flex gap-8 md:flex-row flex-col">
            <Button
              onClick={() => setIsOpen((prev) => !prev)}
              className="   flex items-center justify-center"
            >
              Request a demo <ArrowRight></ArrowRight>
            </Button>
            <Button
              className="  flex items-center justify-center"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Call Now <ArrowRight></ArrowRight>
            </Button>
          </div>
        </div>
      </div>
      <div className="text-white z-[500] flex items-center justify-between md:w-1/3 mx-auto font-syne text-[18px] md:text-[24px] mt-10 max-md:px-4 max-md:grid max-md:grid-cols-2 max-md:text-center max-md:gap-8 max-md:-mt-20 max-md:text-2xl max-md:font-bold cursor-pointer">
        <h2
          onClick={() => {
            const element = document.getElementById("about");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="z-10"
        >
          About
        </h2>
        <h2
          onClick={() => {
            const element = document.getElementById("services");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="z-10"
        >
          Services
        </h2>
        <h2
          onClick={() => {
            const element = document.getElementById("projects");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="z-10"
        >
          Projects
        </h2>
        <h2
          onClick={() => {
            const element = document.getElementById("contact");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="z-10"
        >
          Contact
        </h2>
      </div>
      <div className="text-white/50 z-[500] flex items-center justify-between md:w-2/3 mx-auto font-syne text-[10px] md:text-[16px] max-md:text-center mt-10 max-md:px-4">
        <h2 className="z-10">Mmade with Love in Tasmania ❤️</h2>
        <h2 className="z-10">©Merry Matrix · Terms & Privacy</h2>
      </div>
    </div>
  );
};

export default Footer;
