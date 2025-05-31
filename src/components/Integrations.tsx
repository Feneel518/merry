import { FC } from "react";
import Glow from "./Glow";

interface IntegrationsProps {}

const Integrations: FC<IntegrationsProps> = ({}) => {
  return (
    <section id="services" className="relative">
      <div className="flex flex-col items-center justify-center gap-4 py-8 pt-20 px-8 ">
        <div className="">
          <h4 className="text-[12px]  tracking-[2px] fonr-syne text-[#0a5cff]">
            INTEGRATIONS
          </h4>
        </div>
        <h2 className="text-[40px] max-md:text-[20px]  leading-tight   font-[600] font-syne text-center lg:w-[40%]">
          Connect to Anything
        </h2>
        <p className="font-syne text-[18px]  font-[400] text-[#455066]  text-center">
          See how Merry Matrix slots in to your existing stack.
        </p>
      </div>
      <Glow></Glow>
    </section>
  );
};

export default Integrations;
