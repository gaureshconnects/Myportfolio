import React, { useEffect, useRef } from "react";

const techWords = ["Java", "{", "JavaScript", "}","TypeScript", "[","Python", "]","React","</>", "Node.js","(", "HTML",")", "CSS","#", "C++",];

export default function TechReveal() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (wrapperRef.current) {
        wrapperRef.current.style.setProperty("--x", `${e.clientX}px`);
        wrapperRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="tech-reveal-layer" ref={wrapperRef}>
      {Array.from({ length: 100 }).map((_, i) => {
        const word = techWords[i % techWords.length];
        const isVertical = i % 2 !== 0; // alternate horizontal/vertical
        return (
          <div
            key={i}
            className={`tech-word ${isVertical ? "vertical" : ""}`}
          >
            {word}
          </div>
        );
      })}
    </div>
  );
}
