/* eslint-disable @next/next/no-img-element */
"use client";
import { raleway } from "@/lib/fonts";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function Home() {
  const [screen, setScreen] = useState<number>(1);
  const [respuesta, setRespuesta] = useState<string>("No quiero 😒");

  const posiblesRepuestas: string[] = [
    "Seguraa? 🥺",
    "Acuerdate que tienes mi polera :)",
    "No me importa, ya se donde vives",
    "Si acepto 😍",
  ];

  const playAudio = () => {
    const audio = new Audio("/for-the-first-time.mp3");
    audio.play().catch((err) => console.log("Play error:", err));
  };

  const checkeandoRespuestas = () => {
    // When the last answer is reached it will start the function proposalAccepted
    const index = posiblesRepuestas.indexOf(respuesta);
    setRespuesta(
      index === posiblesRepuestas.length - 1
        ? posiblesRepuestas[0]
        : posiblesRepuestas[index + 1]
    );

    if (index === posiblesRepuestas.length - 1) {
      proposalAccepted();
    }
  };

  const handleClick = () => {
    playAudio()
    setScreen(2);
  };

  const proposalAccepted = () => {
    setScreen(3);
    confetti();
  };

  return (
    <div
      className={`${raleway.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#9DBDFF] text-[#FFD7C4]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <div className="flex justify-center items-center bg-[#7695FF] h-[600px] w-full rounded-2xl shadow-lg">
          <div
            className={`flex flex-col justify-center items-center gap-4 ${
              screen != 1 ? "hidden" : ""
            }`}
          >
            <h1 className="text-[#FFD7C4] text-2xl font-bold">Hola Sofia ;)</h1>
            <img src="giphy.gif" alt="besito" className="w-48" />
            <button
              onClick={handleClick}
              className="bg-[#FF9874] text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 cursor-pointer transition-all hover:saturate-150"
            >
              Presioname
            </button>
          </div>

          <div
            className={`flex flex-col items-center h-full gap-4 ${
              screen != 2 ? "hidden" : ""
            } px-10 py-16`}
          >
            <h1 className="font-medium text-lg text-[#FFD7C4] text-center">
              Yo Alvaro, me gustaria invitarte cordialmente a
            </h1>
            <h2 className="text-2xl text-[#FFD7C4] font-bold">
              UNA CITA A COMER
            </h2>
            <img src="cat-lightsticks.gif" alt="cats" className="h-48" />
            <span className="text-lg font-medium">
              Sábado, 8 de Marzo del 2025
            </span>
            <span className="font-medium text-[#FFD7C4] text-lg">
              Aceptas? :)
            </span>
            <div className="flex gap-4">
              <button
                onClick={proposalAccepted}
                className="bg-[#FF9874] text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 cursor-pointer transition-all hover:saturate-150"
              >
                Si acepto 🥰
              </button>
              <button
                onClick={checkeandoRespuestas}
                className="bg-[#FF9874] text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 cursor-pointer transition-all hover:saturate-150"
              >
                {respuesta}
              </button>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center items-center h-full gap-4 ${
              screen != 3 ? "hidden" : ""
            } px-10 py-16`}
          >
            <span className="text-3xl font-semibold">Nosotros!</span>
            <img src="cat-eating.gif" alt="cat-eating" />
          </div>
        </div>
      </main>
    </div>
  );
}
