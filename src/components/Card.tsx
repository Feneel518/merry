"use client";

import Image from "next/image";
import { FC, forwardRef, useRef } from "react";

interface CardProps {
  frontSrc: string;
  frontAlt: string;
  backText: string;
  id: string;
  backImage: string;
  ref: React.RefObject<(HTMLDivElement | null)[]>;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ id, backText, frontAlt, frontSrc, backImage }, ref) => {
    return (
      <div
        id={id}
        ref={ref}
        className="w-[144px] h-[228px] md:w-[240px] md:h-[380px] absolute top-1/2 left-1/2 -translate-1/2 -mt-24 -z-10"
      >
        <div className="card-wrapper w-full h-full  absolute top-1/2 left-1/2 -translate-1/2">
          <div className="flip-card-inner relative w-full h-full ">
            <div className="flip-card-front  absolute w-full h-full backface-hidden rounded-md overflow-hidden ">
              <Image
                priority
                src={"/card-front.png"}
                width={500}
                height={500}
                alt={"Card Image"}
                className="object-contain"
              ></Image>
            </div>
            <div className="flip-card-back absolute w-full h-full backface-hidden rounded-md overflow-hidden rotate-y-180">
              <div className="bg-black text-white w-full h-full absolute flex flex-col items-center justify-center ">
                <Image
                  src={backImage}
                  alt={backText}
                  width={400}
                  height={400}
                  draggable={false}
                  className="object-contain select-none"
                ></Image>
                <p className="text-xl md:text-3xl font-mono text-center">
                  {backText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
