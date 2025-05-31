"use client";

import useCursorStore from "@/hooks/useCursorStore";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const mainTextRef = useRef(null);
  const smallImageRef1 = useRef(null);
  const smallImageRef2 = useRef(null);
  const smallImageRef3 = useRef(null);
  const smallImageRef4 = useRef(null);

  useEffect(() => {
    let locomotiveScroll: any;
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll({});
    })();

    return () => {
      locomotiveScroll.destroy();
    };
  });
  const setCursor = useCursorStore((s) => s.setCursor);
  const { label, type } = useCursorStore();

  useEffect(() => {
    gsap.to(smallImageRef1.current, {
      opacity: type === "hover" ? 1 : 0,
      scale: type === "hover" ? 1 : 0,
      duration: 0.2,
      ease: "power1.inOut",
    });
    gsap.to(smallImageRef2.current, {
      opacity: type === "hover" ? 1 : 0,
      scale: type === "hover" ? 1 : 0,
      duration: 0.2,

      ease: "power1.inOut",
    });
    gsap.to(smallImageRef3.current, {
      opacity: type === "hover" ? 1 : 0,
      rotate: type === "hover" ? -18 : 45,
      duration: 0.2,
      ease: "power1.inOut",
    });
    gsap.to(smallImageRef4.current, {
      opacity: type === "hover" ? 1 : 0,
      rotate: type === "hover" ? -10 : 45,
      duration: 0.2,
      ease: "power1.inOut",
    });
  }, [type]);

  const onPointerEnter = () => {
    setCursor({
      label: <Image src={"/logo.svg"} alt="logo" fill></Image>,
      type: "hover",
    });
  };

  const onPointerLeave = () => setCursor({ label: null, type: "default" });

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      gsap.to(smallImageRef1.current, {
        x: -e.clientX / 50,
        y: -e.clientY / 50,
      });
      gsap.to(smallImageRef2.current, {
        x: -e.clientX / 80,
        y: -e.clientY / 80,
      });
      gsap.to(smallImageRef3.current, {
        x: -e.clientX / 70,
        y: -e.clientY / 70,
      });
      gsap.to(smallImageRef4.current, {
        x: -e.clientX / 60,
        y: -e.clientY / 60,
      });
    };

    document.body.addEventListener("pointermove", onPointerMove);

    return () => {
      document.body.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 top-48 left-40 ">
          <img
            ref={smallImageRef1}
            src="../../testi1.avif"
            alt="image"
            className="size-32 object-cover rounded-lg opacity-0 scale-0 -rotate-2"
          />
        </div>
        <div className="absolute bottom-40 right-60  ">
          <img
            ref={smallImageRef2}
            src="../../testi2.avif"
            alt="image"
            className="size-40 object-cover rounded-lg opacity-0 scale-0 rotate-2"
          />
        </div>
        <div className="absolute top-32 right-4  ">
          <img
            ref={smallImageRef3}
            src="../../testi3.avif"
            alt="image"
            className="size-64 object-cover opacity-0 rounded-lg -rotate-45 origin-bottom-right"
          />
        </div>
        <div className="absolute bottom-32 left-12  ">
          <img
            ref={smallImageRef4}
            src="../../testi4.avif"
            alt="image"
            className="size-64 object-cover opacity-0 rounded-lg -rotate-45 origin-top-left"
          />
        </div>
      </div>
      <div className="flex  flex-col items-center justify-center gap-8">
        <div className="flex items-center gap-8 max-lg:flex-col">
          <p id="side1" className="text-gray-500 opacity-75 select-none">
            Welcome
          </p>
          <h1
            ref={mainTextRef}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            className=" cursor-pointer md:text-[200px] text-8xl md:text-9xl  font-bold md:leading-[190px] leading-[90px] tracking-tighter  font-syne  select-none"
          >
            Merry <br /> Matrix
          </h1>

          <p id="side2" className="text-gray-500 opacity-75 select-none">
            Est. 2025
          </p>
        </div>
        <div className="lg:w-[38%] w-[90%] text-2xl max-md:text-[18px]">
          <p className="font-syne max-md:text-center ">
            Where creativity meets innovation. We build dynamic, intuitive
            solutions that simplify and enhance experiences. Join us in shaping
            the future of design and technology!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
