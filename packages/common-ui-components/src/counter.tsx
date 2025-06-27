"use client";

import { useState } from "react";

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <span>{count}</span>
      <button
        className={className}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
    </>
  );
};
