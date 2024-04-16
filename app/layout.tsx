import type { Metadata } from "next";
import { Inter, Open_Sans, Ruda } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/theme/ThemeProvider";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChirpLingo: AI Language Learning Companion",
  description: "Master language skills effortlessly with ChirpLingo. Dive into tailored scenarios, create your own, or let our AI guide you through immersive learning experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={openSans.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
