import { FC } from "react";
import Button from "./ui/Button";
import Image from "next/image";
import { Marquee } from "./ui/Marquee";

interface ClientsProps {}

const Clients: FC<ClientsProps> = ({}) => {
  return (
    <div className="relative w-full h-full flex flex-col gap-8 px-4 max-md:py-4 border-t pt-20 pb-8 bg-[#a7caff]">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <h1 className="text-[56px] max-md:text-[48px]  leading-tight   font-[600] font-syne text-center">
          Focused on Trust and Expertise
        </h1>
        <p className="font-syne text-[18px]  font-[400] text-[#455066] max-w-[464px] text-center">
          Build trust, drive traffic, and grow digitally with Merry Matrix’s
          expert solutions.
        </p>
      </div>
      <div className="flex items-center justify-center gap-[12px] flex-col md:flex-row">
        <Button className=" hover:text-white!">Contact Us</Button>
        <Button className="border-gray-300! hover:bg-gray-200! text-black! hover:text-black!">
          Request a
        </Button>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-8">
        <Marquee
          pauseOnHover
          draggable={false}
          className="[--duration:40s] cursor-pointer "
        >
          {[1, 2, 3, 4, 5, 6, 7].map((review) => (
            <div
              className="size-48 max-md:size-24 flex items-center justify-center mx-12 max-md:mx-4 relative  "
              key={review}
            >
              <Image
                draggable={false}
                src={`/${review}.svg`}
                alt="Company logos"
                fill
                className="object-contain select-none"
              ></Image>
            </div>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#a7caff]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#a7caff]"></div>
      </div>
    </div>
  );
};

export default Clients;
