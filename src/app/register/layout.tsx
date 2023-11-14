import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page",
  description: "Login Page",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="bg-[#1f232e]" lang="en">
      <body>{children}</body>
    </html>
  );
};

export default layout;
