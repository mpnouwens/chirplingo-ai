"use client";

import ScenarioCard from "@/components/ScenarioCard";
import { Navbar } from "../components/Navbar";
import { ThemeContext } from "@/theme/ThemeContext";
import { useContext } from "react";
import { DarkColors, Levels, LightColors } from "@/utils/contants";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      data-theme={theme}
      className="flex min-h-screen flex-col items-center px-3 pt-2"
    >
      <Navbar />
      <div className="flex flex-row gap-2 flex-wrap mt-5 mb-10 justify-center">
        <ScenarioCard
          title="You're at a library and need help finding a specific book."
          color={DarkColors.Green}
          level={Levels.Beginner}
          isFavourited={false}
        />
        <ScenarioCard
          title="You're at a library and need help finding a specific book."
          color={DarkColors.Yellow}
          level={Levels.Advanced}
          isFavourited={false}
        />
        <ScenarioCard
          title="You're at a library and need help finding a specific book."
          color={LightColors.Red}
          level={Levels.Intermediate}
          isFavourited={false}
        />
        <ScenarioCard
          title="You're at a library and need help finding a specific book."
          color={LightColors.Orange}
          level={Levels.Beginner}
          isFavourited={false}
        />
        <ScenarioCard
          title="You're at a library and need help finding a specific book."
          color={DarkColors.Aqua}
          level={Levels.Beginner}
          isFavourited={false}
        />
        {/* row 2 */}
        <ScenarioCard
          title="You're at a library and need help finding a specific book."
          color={DarkColors.Aqua}
          level={Levels.Beginner}
          isFavourited={false}
        />
        <ScenarioCard
          title="You're at a library and need help finding a specific book."
          color={LightColors.Orange}
          level={Levels.Advanced}
          isFavourited={false}
        />
        <ScenarioCard
          title="You're at a library and need help finding a specific book."
          color={LightColors.Purple}
          level={Levels.Intermediate}
          isFavourited={false}
        />
        <ScenarioCard
          title="You're at a library and need help finding a specific book."
          color={DarkColors.Green}
          level={Levels.Beginner}
          isFavourited={false}
        />
        <ScenarioCard
          title="You're at a library and need help finding a specific book."
          color={LightColors.Orange}
          level={Levels.Beginner}
          isFavourited={false}
        />
        {/* row 3 */}
        <ScenarioCard
          title="You're ordering coffee at a cafe, but have dietary restrictions."
          color={DarkColors.Yellow}
          level={Levels.Beginner}
          isFavourited={false}
        />
        <ScenarioCard
          title="You're at the airport and your flight is delayed."
          color={DarkColors.Aqua}
          level={Levels.Advanced}
          isFavourited={false}
        />
        <ScenarioCard
          title="You're at a clothing store and want to try on some clothes."
          color={LightColors.Red}
          level={Levels.Intermediate}
          isFavourited={false}
        />
        <ScenarioCard
          title="You accidentally bump into someone on the street."
          color={DarkColors.Yellow}
          level={Levels.Beginner}
          isFavourited={false}
        />
        <ScenarioCard
          title="You're at a friend's house for dinner and their pet dog seems aggressive."
          color={LightColors.Purple}
          level={Levels.Intermediate}
          isFavourited={false}
        />
      </div>
    </main>
  );
}
