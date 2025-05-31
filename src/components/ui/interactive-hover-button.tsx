import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden p-2  text-center ",
        className
      )}
      {...props}
    >
      <div className="flex items-center ">
        {/* <div className="h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div> */}
        <span className="inline-block transition-all bg duration-300 group-hover:translate-y-12 group-hover:opacity-0 group-hover:rotate-45">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full -translate-y-8 items-center text-primary opacity-0 transition-all duration-300 rotate-45 group-hover:rotate-0 group-hover:translate-y-0 group-hover:opacity-100">
        <span>{children}</span>
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
