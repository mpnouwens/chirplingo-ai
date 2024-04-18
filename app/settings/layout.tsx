"use client";

import { ThemeContext } from "@/theme/ThemeContext";
import { Open_Sans } from "next/font/google";
import { useContext } from "react";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function ScenarioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <html data-theme={theme} lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
