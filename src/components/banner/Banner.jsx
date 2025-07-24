import {
  CheckCircle,
  CheckCircle2,
  CircleX,
  Info,
  TriangleAlert,
} from "lucide-react";
import React from "react";
import clsx from "clsx";
import BannerTitle from "./BannerTitle";

const typesClasses = {
  success: {
    banner: "bg-[#ECFDF5]",
    icon: <CheckCircle2 className="h-5 text-[#ECFDF5]" fill="#34D399" />,
    titleColor: "text-[#065F46]",
    descColor: "text-[#047857]",
  },
  warning: {
    banner: "bg-[#FFFBEB]",
    icon: <TriangleAlert className="h-5 text-[#FFFBEB]" fill="#FBBF24" />,
    titleColor: "text-[#92400E]",
    descColor: "text-[#B45309]",
  },
  error: {
    banner: "bg-[#FEF2F2]",
    icon: <CircleX className="h-5 text-[#FEF2F2]" fill="#F87171" />,
    titleColor: "text-[#92400E]",
    descColor: "text-[#B45309]",
  },
  neutral: {
    banner: "bg-[#EFF6FF]",
    icon: <Info className="h-5 text-[#EFF6FF]" fill="#60A5FA" />,
    titleColor: "text-[#1E40AF]",
    descColor: "text-[#1C51B9]",
  },
};

export default function Banner({ children, type }) {
  const typeClass = typesClasses[type] || typesClasses["success"];

  // Sprawdź czy jest tylko jeden BannerTitle jako dziecko i typ to error
  const isSingleBannerTitle =
    React.Children.count(children) === 1 &&
    children?.type &&
    (children.type === BannerTitle || children.type.name === "BannerTitle") &&
    type === "error";

  const titleColor = isSingleBannerTitle
    ? clsx(typeClass.titleColor, "font-bold")
    : typeClass.titleColor;
  const descColor = typeClass.descColor;

  return (
    <div className={clsx("flex gap-3 p-4 rounded-md", typeClass.banner)}>
      <div>{typeClass.icon}</div>
      <div>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { titleColor, descColor })
        )}
      </div>
    </div>
  );
}
