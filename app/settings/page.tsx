'use client';

import { ThemeContext } from "@/theme/ThemeContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Page() {
  const { theme } = useContext(ThemeContext);
  const router = useRouter()

  return (
    <html lang="en" data-theme={theme} >
      <body>
        <h1>Settings</h1>
        <button onClick={() => router.back()}>Go back</button>
      </body>
    </html>
  )
}