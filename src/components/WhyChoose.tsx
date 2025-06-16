import { whyUs } from "@/lib/data";
import { FC } from "react";
import Button from "./ui/Button";

interface WhyChooseProps {}

const WhyChoose: FC<WhyChooseProps> = ({}) => {
  return (
    <section id="about" className="py-8 max-md:py-4    ">
      <div className="max-w-screen-lg mx-auto  py-20 flex items-center justify-center flex-col gap-20  max-md:px-8  ">
        <div className="flex items-center justify-between w-full max-md:flex-col max-md:items-center gap-8">
          <aside className="flex flex-col gap-4">
            {/* <div className="text-[14px] text-[#8D95A7]">MM_WHY_US?</div> */}
            {/* <h4 className="text-[12px]  tracking-[2px] fonr-syne text-[#0a5cff]">
              MM WHY US?
            </h4> */}
            <h1 className="text-[40px]  leading-tight   font-[600] font-syne max-md:text-center ">
              Why Choose Merry Matrix?
            </h1>
            <p className="text-[18px] text-[#455066] md:w-3/4 max-md:mx-auto max-md:text-center">
              At Merry Matrix, we don't just build websites — we build your
              digital success story. Here&apos;s why businesses trust us:
            </p>
          </aside>
          {/* <aside className="">
            <Button className=" max-md:w-80!">Find out more</Button>
          </aside> */}
        </div>
        <div className="">
          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {whyUs.map((why, index) => {
              return (
                <div className="flex items-start gap-4" key={index}>
                  <div className="mt-1">{why.svg}</div>
                  <h2 className="text-lg text-[#080A13] font-medium">
                    {why.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
