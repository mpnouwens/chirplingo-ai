"use client";

import ScenarioCard from "@/components/ScenarioCard";
import { Navbar } from "@/components/dashboard/Navbar";
import { ThemeContext } from "@/theme/ThemeContext";
import { scenarios } from "@/utils/contants";
import { useContext } from "react";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <html data-theme={theme} lang="en">
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

      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        
        <aside>
          <p>ChirpLingo © 2024 </p>
        </aside>
      </footer>
    </main>
  </html>
  );
}
