"use client";

import { Navbar } from "@/components/home/Navbar";
import { ThemeContext } from "@/theme/ThemeContext";
import { Ruda } from "next/font/google";
import { useRouter } from 'next/navigation'
import { useContext } from "react";

const ruda = Ruda({ subsets: ["latin"] });

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const router = useRouter()

  return (
    <html data-theme={theme} lang="en">
      <main
        data-theme={theme}
        className="flex min-h-screen flex-col items-center px-3 pt-2"
      >
        <Navbar />
        <h1
          className={
            ruda.className +
            ` text-8xl font-extrabold ${
              theme === "dark" ? "text-[#FFFBE3]" : "text-black"
            } text-center mt-10`
          }
        >
          Your AI Language Learning Companion 🦜
        </h1>
        <p
          className={`text-3xl ${
            theme === "dark" ? "text-[#FFFBE3]" : "text-black"
          } text-center mt-5`}
        >
          Learn Languages Effortlessly. Speak with Confidence.
        </p>
        <button onClick={() => {
          router.push("/dashboard")
        }} className="btn btn-lg bg-gradient-to-b from-[#80FF00] via-yellow to-[#FFC700] text-black font-bold my-5 mr-2">
          Get Started
        </button>

        <h1 className={`${ ruda.className} text-3xl ${theme === 'dark' ? 'text-white': 'text-black'} text-center mt-10`}>Benefits</h1>
      </main>
    </html>
  );
}
