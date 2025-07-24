import clsx from "clsx";
import React from "react";

export default function BannerTitle({ children, titleColor, className }) {
  return <h1 className={clsx("text-sm", titleColor, className)}>{children}</h1>;
}
