"use client";

import { cn } from "@/lib/utils";
import { FC, forwardRef, useRef } from "react";
import { AnimatedBeam } from "./magicui/animated-beam";
import Image from "next/image";

interface GlowProps {}

const Glow: FC<GlowProps> = ({}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className="relative flex  w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full  flex-col items-stretch justify-between gap-10 md:max-w-[50%] mx-auto">
        <div className="flex flex-row items-center justify-between ">
          <Circle ref={div1Ref}>{/* <Icons.googleDrive /> */}NextJS</Circle>
          <Circle ref={div5Ref}>{/* <Icons.googleDocs /> */}NodeJS</Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div8Ref}>{/* <Icons.googleDrive /> */}ReactJs</Circle>
          <Circle ref={div9Ref}>{/* <Icons.googleDocs /> */}Prisma ORM</Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>{/* <Icons.notion /> */}Tailwind CSS</Circle>
          <Circle ref={div4Ref} className="size-16 md:size-28 relative">
            {/* <Icons.openai /> */}
            <Image
              src={"/logo.svg"}
              alt="Merrymatrix Logo"
              fill
              className="object-contain shadow-[0px_0px_100px_rgba(8,_112,_184,_0.9)]"
            ></Image>
          </Circle>
          <Circle ref={div6Ref}>{/* <Icons.zapier /> */}MongoDb</Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>{/* <Icons.whatsapp /> */}Framer Motion</Circle>
          <Circle ref={div7Ref}>{/* <Icons.messenger /> */}GSAP</Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div10Ref}>{/* <Icons.whatsapp /> */}NextAuth Js</Circle>
          <Circle ref={div11Ref}>{/* <Icons.messenger /> */}Figma</Circle>
        </div>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        curvature={0}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={40}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        curvature={0}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={40}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div4Ref}
        curvature={-60}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={div4Ref}
        curvature={-60}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div10Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div11Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={-10}
        reverse
      />
    </div>
  );
};

export default Glow;

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex md:h-14 md:w-40 h-12 w-24 items-center justify-center rounded-2xl border-2 max-md:text-xs bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] text-center",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";
