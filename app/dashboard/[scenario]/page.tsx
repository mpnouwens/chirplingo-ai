"use client";

import { MessageBubble } from "@/components/MessageBubble";
import { Navbar } from "@/components/scenario/Navbar";
import { ThemeContext } from "@/theme/ThemeContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Logo from "@/assets/svg/logo.svg";

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
        <div className="flex flex-col max-w-3xl mx-auto mt-8 p-5 card bg-base-200">
          <MessageBubble
            from="assistant"
            message="¡Hola! ¿Como puedo ayudarte?"
            timestamp="12:00 PM"
            image={Logo}
          />
          <MessageBubble
            from="user"
            message="¡Hola! ¿Puedo pedir algo picante?"
            timestamp="12:00 PM"
            image={Logo}
          />
          <div className="flex justify-center  my-5">
            <div className="flex flex-col justify-center items-center">
              <span className="loading loading-ring loading-lg text-white"></span>
              <p className="text-white">Listening</p>
            </div>
          </div>
        </div>

        {/* Buttom audio recorder and text switcher */}
        {/* bottom of the screen */}
        <div className="flex justify-center my-10">
          <textarea
            className="textarea bg-base-200 textarea-lg w-full max-w-xs"
            placeholder="Enter your reply"
          />
        </div>
      </body>
    </html>
  );
}
