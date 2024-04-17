import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/app/globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
