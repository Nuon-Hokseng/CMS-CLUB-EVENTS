import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "green" | "white" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, variant = "green", ...props }: ButtonProps) {
  const baseStyles = "font-bold py-2 px-4 rounded font-light";
  const variants: Record<string, string> = {
    green: " bg-green-600 text-white rounded-2xl hover:bg-green-700 transform hover:scale-101 transition-all duration-300 shadow-md hover:shadow-lg",
    white: "rounded-2xl bg-white text-gray-600 hover:bg-green-700 transform hover:scale-101 transition-all duration-300  hover:text-white border-3 border-gray-300",
    icon: "text-muted-foreground hover:text-primary transition-colors p-2 rounded", // new style
  };

  return (
    <button className={`${baseStyles} ${variants[variant] || ""}`} {...props}>
      {children}
    </button>
  );
}
