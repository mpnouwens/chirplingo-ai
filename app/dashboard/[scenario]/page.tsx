"use client";

import { Navbar } from "@/components/scenario/Navbar";
import { ThemeContext } from "@/theme/ThemeContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Page({ params }: { params: { scenario: string } }) {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();

  const decodedText = decodeURIComponent(params.scenario);

  // WIP: convert language to native language
  // for example convert to spanish

  const nativeText =
    "Estás pidiendo comida en un restaurante y quieres saber si un plato está picante.";

  return (
    <html lang="en" data-theme={theme}>
      <body>
        <Navbar
          targetTitle={decodedText}
          nativeTitle={nativeText}
          goBack={() => {
            router.back();
          }}
        />
      </body>
    </html>
  );
}
