import { cn } from "@/lib/utils";
import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}
const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        className,
        "w-80 h-12 bg-white cursor-pointer rounded-3xl border-2 hover:text-white min-w-40 border-[#0A5CFF] shadow-[inset_0px_-2px_0px_1px_#0A5CFF] group hover:bg-[#0A5CFF] transition duration-300 ease-in-out"
      )}
    >
      <span className="font-medium flex items-center justify-center px-8 -mt-1">
        {children}
      </span>
    </button>
  );
};

export default Button;
