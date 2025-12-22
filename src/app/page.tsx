"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const fullText = "Software Engineering. Machine Learning. Robotics. Quantum Computing.";
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
      <h1 className="text-5xl font-bold tracking-tight">Gerardo Salazar</h1>
      <p className="mt-4 text-xl text-muted-foreground">
        {displayedText}
        <span className="animate-pulse">|</span>
      </p>
    </main>
  );
}
