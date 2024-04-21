"use client";

import { MessageBubble } from "@/components/MessageBubble";
import { Navbar } from "@/components/scenario/Navbar";
import { ThemeContext } from "@/theme/ThemeContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import Logo from "@/assets/svg/logo.svg";
import { ToggleType } from "@/components/ToggleType";
import { speechPrompt, transcribeAudio } from "@/api";

export default function Page({ params }: { params: { scenario: string } }) {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const isFirstRender = useRef(true);
  const decodedText = decodeURIComponent(params.scenario);

  const [botBlobs, setBotBlobs] = useState<Blob[]>([]);
  console.log("🚀 ~ Page ~ botBlobs:", botBlobs);

  const [scenarioState, setScenarioState] = useState<
    "introduction" | "scenario" | "rating"
  >("introduction");
  const [inputType, setInputType] = useState("audio");
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const nativeText =
    "Estás pidiendo comida en un restaurante y quieres saber si un plato está picante.";

  const startRecording = async () => {
    const mediaRecorder = new MediaRecorder(
      await window.navigator.mediaDevices.getUserMedia({ audio: true })
    );
    mediaRecorder.start();

    mediaRecorder.ondataavailable = (e) => {
      setAudioBlob(e.data);
    };

    setMediaRecorder(mediaRecorder);
    setRecording(true);
  };

  const stopRecording = () => {
    if (!mediaRecorder) return;

    mediaRecorder.stop();
    setRecording(false);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (scenarioState === "introduction") {
      speechPrompt(
        `Welcome to the scenario. ${decodedText} Click here to get started.`
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scenarioState]);

  useEffect(() => {
    if (audioBlob) {
      transcribeAudio(audioBlob).then((text) => {
        console.log(text);
      });
    }
  }, [audioBlob]);

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
          {scenarioState === "introduction" && (
            // click to get started
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => {
                  setScenarioState("scenario");
                }}
                className="btn bg-[#FF3D00] hover:bg-[#FF3D00] text-white rounded-lg p-2 my-20"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                Get Started
                
              </button>
            </div>
          )}

          {scenarioState === "scenario" && (
            <>
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
                  <span
                    className={`loading loading-ring loading-lg ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  ></span>
                  <p
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Listening
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-center my-5">
          <div className="flex flex-col justify-center items-center">
            {inputType === "text" ? (
              <textarea
                className={`textarea bg-base-200 textarea-lg w-full max-w-xs ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-4`}
                placeholder="Enter your reply"
              />
            ) : (
              <div className="flex flex-col items-center">
                <button
                  onClick={recording ? stopRecording : startRecording}
                  className="btn mb-4 bg-[blue-500] hover:bg-blue-600 text-white rounded-lg p-2"
                >
                  {recording ? "Stop Recording" : "Start Recording"}
                </button>
                {audioBlob && (
                  <audio src={URL.createObjectURL(audioBlob)} controls />
                )}
              </div>
            )}
            <ToggleType type={inputType} setType={setInputType} />
          </div>
        </div>
      </body>
    </html>
  );
}
