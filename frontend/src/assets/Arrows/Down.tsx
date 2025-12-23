import React from "react";

interface DownProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

export const Down = ({
  className = "",
  strokeColor = "#2B5DAA",
  strokeWidth = 3,
  ...props
}: DownProps) => {
  return (
    <svg
      viewBox="0 0 23 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M1.5 1.5L10.8146 10.2667C11.1997 10.6291 11.8003 10.6291 12.1854 10.2667L21.5 1.5"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};
