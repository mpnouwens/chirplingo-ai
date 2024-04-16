"use client";

import ScenarioCard from "@/components/ScenarioCard";
import { Navbar } from "@/components/dashboard/Navbar";
import { ThemeContext } from "@/theme/ThemeContext";
import { scenarios } from "@/utils/contants";
import { useContext } from "react";



export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      data-theme={theme}
      className="flex min-h-screen flex-col items-center px-3 pt-2"
    >
      <Navbar />
      <div className="flex flex-row gap-2 flex-wrap mt-5 mb-10 justify-center">
        {scenarios.map((scenario) => (
          <ScenarioCard
            key={scenario.title}
            title={scenario.title}
            level={scenario.level}
            color={scenario.color}
            isFavourited={scenario.isFavourited}
          />
        ))}
      </div>
    </main>
  );
}
