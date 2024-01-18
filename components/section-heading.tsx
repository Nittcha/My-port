import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  // CENTER
  return (
    <h2 className="text-5xl font-serif capitalize mb-8 text-center mt-8">
      {children}
    </h2>
  );
}