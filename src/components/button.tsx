import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "blue" | "red" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, variant = "blue", ...props }: ButtonProps) {
  const baseStyles = "font-bold py-2 px-4 rounded font-light";
  const variants: Record<string, string> = {
    blue: " bg-green-600 text-white rounded-full hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg",
    red: "bg-red-500 text-white rounded-full hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg",
    icon: "text-muted-foreground hover:text-primary transition-colors p-2 rounded", // new style
  };

  return (
    <button className={`${baseStyles} ${variants[variant] || ""}`} {...props}>
      {children}
    </button>
  );
}
