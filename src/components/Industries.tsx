"use client";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC, useRef } from "react";
import Card from "./Card";
import { ScrollTrigger } from "gsap/all";

interface IndustriesProps {}
gsap.registerPlugin(ScrollTrigger);

const WhatWe = [
  {
    id: 0,
    image: "/ITIndustry.png",
    title: "IT Industry",
  },
  {
    id: 1,
    image: "/Health.png",
    title: "Healthcare Industry",
  },
  {
    id: 2,
    image: "/RetailInd.png",
    title: "Retail Industry",
  },
  {
    id: 3,
    image: "/Finance.png",
    title: "Finance Industry",
  },
  {
    id: 4,
    image: "/LogisticInd.png",
    title: "Logistic Industry",
  },
];

const Industries: FC<IndustriesProps> = ({}) => {
  const container = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const cards = cardsRef.current;
    const totalScrollHeight = window.innerHeight * 3;
    const rotation = [-15, -7.5, 0, 7.5, 15];
    const position = [14, 32, 50, 68, 86];

    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: () => `+=${totalScrollHeight}`,
      pin: true,
      pinSpacing: true,
    });

    cards.forEach((card, index) => {
      gsap.to(card, {
        left: `${position[index]}%`,
        rotation: `${rotation[index]}%`,
        ease: "none",
        delay: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `+=${window.innerHeight}`,
          scrub: 0.5,
          id: `spread-${index}`,
        },
      });
    });

    cards.forEach((card, index) => {
      const frontEl = card?.querySelector(".flip-card-front");
      const backEl = card?.querySelector(".flip-card-back");
      const staggerOffser = index * 0.05;

      const startOffset = 1 / 3 + staggerOffser;
      const endOffset = 2 / 3 + staggerOffser;

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 10%",
        end: () => `+=${totalScrollHeight}`,
        scrub: 1,
        id: `rotate-flip-${index}`,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress >= startOffset && progress <= endOffset) {
            const animationProgress = (progress - startOffset) / (1 / 3);
            const frontRotation = -180 * animationProgress;
            const backRotation = 180 - 180 * animationProgress;
            const cardRotation = rotation[index] * (1 - animationProgress);

            gsap.to(frontEl!, {
              rotateY: frontRotation,
              ease: "power1.out",
            });
            gsap.to(backEl!, {
              opacity: 1,
              delay: 0.01,
            });
            gsap.to(backEl!, {
              rotateY: backRotation,
              ease: "power1.out",
              delay: 0.000001,
            });
            gsap.to(card, {
              xPercent: -50,
              yPercent: -50,
              rotate: cardRotation,
              ease: "power1.out",
            });
          }
        },
      });
    });
  }, []);
  return (
    <div id="projects" className="py-20  h-fit pointer-events-none">
      <section ref={container} className="relative w-screen h-screen ">
        <div className="flex flex-col items-center justify-center gap-4  ">
          <div className="">
            <h4 className="text-[12px]  tracking-[2px] fonr-syne text-[#0a5cff]">
              MERRY MATRIX USE CASES
            </h4>
          </div>
          <h2 className="text-[40px] max-md:text-[20px]  leading-tight   font-[600] font-syne text-center lg:w-[40%]">
            Industries we work for
          </h2>
        </div>
        {WhatWe.map((what, index) => {
          return (
            <Card
              key={index}
              id={`card-${index + 1}`}
              frontSrc="/card-front.png"
              frontAlt="Card Image"
              backText={what.title}
              backImage={what.image}
              ref={(el) => {
                if (cardsRef.current) {
                  cardsRef.current[index] = el;
                }
              }}
            ></Card>
          );
        })}
      </section>
    </div>
  );
};

export default Industries;
