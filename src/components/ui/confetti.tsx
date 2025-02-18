import React from "react";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "@/hooks/use-window-size";

export function Confetti({ active = true }) {
  const { width, height } = useWindowSize();

  if (!active) return null;

  return (
    <ReactConfetti
      width={width}
      height={height}
      numberOfPieces={200}
      recycle={false}
      gravity={0.2}
      initialVelocityY={20}
      colors={["#10B981", "#3B82F6", "#6366F1", "#8B5CF6", "#EC4899"]}
    />
  );
}
