import clsx from "clsx";
import React from "react";

export default function CardDesc({ children, className }) {
  return <p className={clsx("text-[#6B7280] mt-5", className)}>{children}</p>;
}
