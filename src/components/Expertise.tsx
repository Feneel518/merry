import { services } from "@/lib/data";
import Image from "next/image";
import { FC } from "react";
import Button from "./ui/Button";

interface ExpertiseProps {}

const Expertise: FC<ExpertiseProps> = ({}) => {
  return (
    <div className="bg-[#f5f7fa]    ">
      <div className="max-w-screen-lg mx-auto  py-20 flex items-center justify-center flex-col gap-20  max-md:px-8  ">
        <div className="flex items-center justify-between w-full max-md:flex-col max-md:items-center gap-8">
          <aside className="flex flex-col gap-4">
            {/* <h4 className="text-[12px]  tracking-[2px] fonr-syne text-[#0a5cff]">
              MM SERVICES
            </h4> */}

            <h1 className="text-[40px]  leading-tight   font-[600] font-syne max-md:text-center ">
              Our Expertise, Your Success
            </h1>
          </aside>
          {/* <aside className="">
            <Button className="  max-md:w-80!">Find out more</Button>
          </aside> */}
        </div>
        <div className="">
          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {services.map((service, index) => {
              return (
                <div className="flex items-start gap-2" key={index}>
                  <div className="mt-1  ">{service.svg}</div>
                  <div className="text-[16px] flex flex-col gap-2">
                    <div className="font-semibold ">{service.title}</div>
                    <div className="text-[#455066]">{service.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[1090px]  max-md:w-[90%] aspect-[1090/727] relative border-8 rounded-2xl border-gray-200">
          <Image
            draggable={false}
            src={"/expertise.png"}
            alt="image"
            fill
            className="object-cover rounded-2xl"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
