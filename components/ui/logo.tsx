import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeMap = {
    sm: { height: 28, width: 105 },
    md: { height: 42, width: 158 },
    lg: { height: 58, width: 218 },
    xl: { height: 88, width: 331 },
  };

  const { height, width } = sizeMap[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/images/LOGO MULTITACHE.png"
        alt="Logo MULTITÂCHE"
        height={height}
        width={width}
        priority
        style={{ height, width: "auto", objectFit: "contain" }}
      />
    </div>
  );
}
