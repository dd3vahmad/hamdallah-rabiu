import React, { ReactNode } from "react";

interface GlassmorphismProps {
  children: ReactNode;
  className?: string;
}

const Glassmorphism: React.FC<GlassmorphismProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`backdrop-blur-lg bg-white/10 border border-white/10 rounded-lg shadow-lg p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Glassmorphism;
