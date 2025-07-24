import clsx from "clsx";
import React from "react";

const bgColors = {
  blue: "bg-[#3F75FE]",
  green: "bg-[#22C55E]",
  red: "bg-[#EF4444]",
  yellow: "bg-[#FACC15]",
  purple: "bg-[#A78BFA]",
  orange: "bg-[#FB923C]",
  teal: "bg-[#14B8A6]",
  gray: "bg-[#64748B]",
};

export default function CardIcon({ children, color, className }) {
  const bgColor = bgColors[color] || bgColors["blue"];

  return (
    children && (
      <div
        className={clsx(
          "w-12 h-12 flex justify-center items-center rounded-md absolute -top-6 shadow-lg shadow-black/10 transition-transform duration-300 group-hover:scale-130",
          bgColor,
          className
        )}
      >
        {React.Children.count(children) === 1
          ? React.cloneElement(children, { className: "h-6 text-white" })
          : React.cloneElement(children[0], { className: "h-6 text-white" })}
      </div>
    )
  );
}
