import { FC } from "react";
import Button from "./ui/Button";
import ShineCard from "./ShineCard";

interface InspirationProps {}

const Inspiration: FC<InspirationProps> = ({}) => {
  return (
    <div className="bg-[#f5f7fa] p-20  pb-80 max-md:p-4 max-md:pb-80 ">
      <div className="flex flex-col items-center justify-center gap-4  ">
        <div className="">
          <h4 className="text-[12px]  tracking-[2px] fonr-syne text-[#0a5cff]">
            MERRY MATRIX USE CASES
          </h4>
        </div>
        <h2 className="text-[40px] max-md:text-[20px]  leading-tight   font-[600] font-syne text-center lg:w-[40%]">
          Need some inspiration?
        </h2>
        <p className="font-syne text-[18px]  font-[400] text-[#455066]  text-center">
          See examples of use cases from across your industry.
        </p>
        <Button className=" w-80">Explore more industries</Button>
      </div>

      <div className=" mx-auto lg:px-8">
        <ShineCard></ShineCard>
        {/* <HoverEffect items={projects} /> */}
      </div>
    </div>
  );
};

export default Inspiration;
