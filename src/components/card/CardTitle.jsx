import clsx from "clsx";
import React from "react";

export default function CardTitle({ children, className }) {
  return (
    <h1 className={clsx("text-[#111827] mt-14", className)}>{children}</h1>
  );
}
