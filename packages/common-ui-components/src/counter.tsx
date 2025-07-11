"use client";

import { useState } from "react";

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-row gap-2 bg-red m-4 bg-amber-700">
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
    </div>
  );
};
