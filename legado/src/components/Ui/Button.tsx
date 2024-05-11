import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { BiCaretRight } from "react-icons/bi";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded font-semibold disabled:pointer-events-none disabled:opacity-50 transition-all duration-300 py-1.5",
  {
    variants: {
      variant: {
        default:
          "border border-solid border-orange-400 shadow-[4px_4px] shadow-orange-400 text-orange-400 hover:shadow-[2px_2px] text-sm",
        indigo:
          "border border-solid border-indigo-500 shadow-[4px_4px] shadow-indigo-500 text-indigo-500 hover:shadow-[2px_2px]",
        indigoNeon:
          "flex transition-all duration-300 opacity-0 group-hover:opacity-100 hover:brightness-125 hover:shadow-md hover:shadow-indigo-500/60 justify-center items-center gap-3 bg-slate-900 border border-indigo-500 w-fit rounded-md font-semibold",
        indigoLink: "flex items-center text-indigo-500",
      },
      size: {
        default: "px-8",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const arrowVariants = cva("-ml-6 text-xl", {
  variants: {
    variant: {
      default: "text-orange-400 ",
      indigo: "text-indigo-500",
      indigoNeon: "",
      indigoLink: "text-indigo-500",
    },
    arrow: {
      default: "hidden ",
      right: "group-hover:animate-arrowLeft",
      down: "group-hover:animate-arrowDown",
    },
  },
  defaultVariants: {
    variant: "default",
    arrow: "default",
  },
});

export interface BtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Btn = React.forwardRef<HTMLButtonElement, BtnProps>(
  ({ ...props }, ref) => {
    return <Slot ref={ref} {...props} />;
  }
);
Btn.displayName = "Btn";

export interface ButtonProps
  extends BtnProps,
    VariantProps<typeof buttonVariants>,
    VariantProps<typeof arrowVariants> {
  children?: React.ReactNode;
}

const Button = ({
  children,
  className,
  variant,
  size,
  arrow,
  ...props
}: ButtonProps) => {
  return (
    <div className="group flex items-center ">
      <Btn
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Btn>
      <BiCaretRight className={cn(arrowVariants({ variant, arrow }))} />
    </div>
  );
};

Button.displayName = "Button";

export { Button, buttonVariants };
