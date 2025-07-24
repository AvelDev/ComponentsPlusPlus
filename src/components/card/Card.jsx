import clsx from "clsx";
import { CloudUpload } from "lucide-react";
import React from "react";

export default function Card({ children, className }) {
  return (
    <div
      className={clsx(
        "group cursor-default rounded-lg flex flex-col bg-[#F9FAFB] px-6 pb-8 items-center relative mt-12 transition-shadow duration-150 hover:shadow-lg hover:shadow-black/10",
        className
      )}
    >
      {children}
    </div>
  );
}
