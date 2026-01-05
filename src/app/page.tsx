"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const entries = [
    "Software Engineering",
    "Machine Learning",
    "Robotics",
    "Quantum Computing",
  ];
  const fullText = entries.join(". ") + ".";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center px-4">
        Gerardo Salazar
      </h1>

      {/* Mobile: Stacked entries with staggered animation */}
      <div className="mt-6 flex flex-col items-center gap-2 md:hidden">
        {entries.map((entry, index) => (
          <span
            key={entry}
            className="text-lg text-muted-foreground opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {entry}
          </span>
        ))}
      </div>

      {/* Desktop: Typewriter effect */}
      <p className="mt-4 text-xl text-muted-foreground hidden md:block">
        {displayedText}
        <span className="animate-pulse">|</span>
      </p>
    </main>
  );
}
