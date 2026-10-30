import Image from "next/image";

const SIZES = {
  sm: { height: 28, width: 105 },
  md: { height: 42, width: 158 },
  lg: { height: 58, width: 218 },
  xl: { height: 88, width: 331 },
} as const;

interface LogoProps {
  className?: string;
  size?: keyof typeof SIZES;
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const { height, width } = SIZES[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/MULTITACHE-logo.png"
        alt="Logo MULTITÂCHE"
        height={height}
        width={width}
        priority
        style={{ height, width: "auto", objectFit: "contain" }}
      />
    </div>
  );
}
