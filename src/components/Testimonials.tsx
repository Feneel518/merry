import { FC } from "react";
import Carousel from "./ui/Carousel";
import { testimonials } from "@/lib/data";

interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = ({}) => {
  return (
    <div className="bg-[#f5f7fa] max-md:px-4">
      <div className="flex flex-col items-center justify-center gap-4 py-8 ">
        <div className="">
          <h4 className="text-[12px]  tracking-[2px] fonr-syne text-[#0a5cff]">
            TESTIMONIALS
          </h4>
        </div>
        <h2 className="text-[40px] max-md:text-[20px]  leading-tight   font-[600] font-syne text-center lg:w-[40%]">
          Trusted by ML, AI and Computer Vision Experts from across the globe
        </h2>
        <p className="font-syne text-[18px]  font-[400] text-[#455066]  text-center">
          See how AI Natives use merry matrix in their organizations.
        </p>
      </div>
      <Carousel testimonials={testimonials}></Carousel>
    </div>
  );
};

export default Testimonials;
