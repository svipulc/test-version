import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const inputStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "border border-gray-300",
    "p-2",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorscheme: {
        primary: "text-white",
      },
    },
    compoundVariants: [],
  }
);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-700" />
      <input placeholder="text" className={cn(inputStyles({ className }))} {...props} />
    </>
  );
};
