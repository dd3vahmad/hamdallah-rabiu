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
    <div className={`backdrop-blur-sm bg-white/4 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Glassmorphism;
