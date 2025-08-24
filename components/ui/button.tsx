"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        demomonkey: "bg-gradient-to-r from-demomonkey-600 to-demomonkey-500 hover:from-demomonkey-500 hover:to-demomonkey-600 text-white shadow-sm",
        sidekick: "bg-gradient-to-r from-sidekick-600 to-sidekick-500 hover:from-sidekick-500 hover:to-sidekick-600 text-white shadow-sm",
        rapidhire: "bg-gradient-to-r from-rapidhire-600 to-rapidhire-500 hover:from-rapidhire-500 hover:to-rapidhire-600 text-white shadow-sm",
        onespot: "bg-gradient-to-r from-onespot-600 to-onespot-500 hover:from-onespot-500 hover:to-onespot-600 text-white shadow-sm",
        premium: "relative bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-button hover:from-blue-600 hover:to-blue-700 transition-all duration-300",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
      glow: {
        default: "",
        true: "button-glow",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        lg: "rounded-lg",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      glow: "default",
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, glow, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, glow, rounded, className }))}
        ref={ref}
        {...props}
      />
    )
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };