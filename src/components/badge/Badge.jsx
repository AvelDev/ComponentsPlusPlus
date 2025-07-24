import clsx from "clsx";
import React from "react";

const colorClasses = {
  gray: "bg-[#F3F4F6] text-[#1F2937]",
  red: "bg-[#FEE2E2] text-[#991B1B]",
  yellow: "bg-[#FEF3C7] text-[#92400E]",
  green: "bg-[#D1FAE5] text-[#065F46]",
  blue: "bg-[#DBEAFE] text-[#1E40AF]",
  indigo: "bg-[#E0E7FF] text-[#3730A3]",
  purple: "bg-[#EDE9FE] text-[#5B21B6]",
  pink: "bg-[#FCE7F3] text-[#9D174D]",
};

export default function Badge({
  children,
  color = "gray",
  rounded = false,
  className = "",
}) {
  const bgColorClass = colorClasses[color]
    ? colorClasses[color]
    : colorClasses["gray"];

  const roundedClass = rounded === true ? "rounded-xl" : "rounded-[4px]";

  return (
    children && (
      <div
        className={clsx(
          "px-3 py-0.5 font-medium w-max",
          roundedClass,
          bgColorClass,
          className
        )}
      >
        {children}
      </div>
    )
  );
}
