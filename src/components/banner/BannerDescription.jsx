import clsx from "clsx";
import React from "react";

export default function BannerDescription({ children, descColor, className }) {
  return <p className={clsx("text-sm", descColor, className)}>{children}</p>;
}
