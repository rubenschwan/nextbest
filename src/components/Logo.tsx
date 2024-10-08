import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = "", width = 32, height = 32 }: LogoProps) {
  return (
    <div className={className}>
      <Image
        src="images/logo/logo_dark.svg"
        alt="NextBest Logo"
        width={width}
        height={height}
        className={`block dark:hidden`}
      />
      <Image
        src="images/logo/logo_light.svg"
        alt="NextBest Logo"
        width={width}
        height={height}
        className={`hidden dark:block`}
      />
    </div>
  );
}
