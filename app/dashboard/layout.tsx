import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChirpLingo: Dashboard",
  description:
    "Master language skills effortlessly with ChirpLingo. Dive into tailored scenarios, create your own, or let our AI guide you through immersive learning experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  </ThemeProvider>
  );
}
