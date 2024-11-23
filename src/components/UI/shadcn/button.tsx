import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/libs/shadcn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-neutrals-50 hover:bg-primary/90 border border-transparent",
        secondary:
          "bg-neutrals-50 text-primary hover:bg-neutrals-50/90 border border-transparent",
        outline:
          "border border-neutrals-50 bg-transparent hover:bg-neutrals-50 hover:text-primary",
        "purple-outline":
          "text-primary border border-primary/60 bg-primary/10 hover:bg-primary hover:text-neutrals-100",
        destructive: "bg-red-500 text-neutrals-50 border border-transparent",
        ghost: "bg-transparent text-neutrals-50",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3 text-xs",
        lg: "px-12 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
