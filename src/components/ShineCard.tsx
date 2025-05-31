import { projects } from "@/lib/data";
import { FC } from "react";
import Card from "./Card";
import { ShineBorder } from "./magicui/shine-border";
import Image from "next/image";

interface ShineCardProps {}

const ShineCard: FC<ShineCardProps> = ({}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5  py-10 gap-4">
      {projects.map((project) => {
        return (
          <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
            <ShineBorder shineColor={"black"} />
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="relative size-64 rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                ></Image>
              </div>
              <div className="flex items-center text-xl font-syne font-semibold gap-2 ">
                {project.svg}
                {project.title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShineCard;
