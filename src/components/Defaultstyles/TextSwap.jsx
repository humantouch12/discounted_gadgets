"use client";
import { useEffect, useState } from "react";



export default function TextSwap({ items, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setFade(true); // fade in
      }, 600); // fade-out duration
    }, interval);

    return () => clearInterval(timer);
  }, [items, interval]);

  return (
    <span
      style={{
        opacity: fade ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        display: "inline-block"
      }}
    >
      {items[index]}
    </span>
  );
}