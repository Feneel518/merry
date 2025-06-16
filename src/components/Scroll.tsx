import { FC } from "react";
import { VelocityScroll } from "./ui/Velocity";

interface ScrollProps {}

const Scroll: FC<ScrollProps> = ({}) => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden -mt-96 z-10 py-8">
      <VelocityScroll>Merry Matrix •</VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default Scroll;
