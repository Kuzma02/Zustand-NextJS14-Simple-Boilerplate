"use client";
import { useCounterStore } from "@/app/_zustand/store";
import React from "react";

const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const incrementAsync = useCounterStore(state => state.incrementAsync);
  const increment = useCounterStore(state => state.increment);
  const decrement = useCounterStore(state => state.decrement);

  return (
    <div className="bg-slate-800 h-full flex flex-col items-center justify-center">
      <h3 className="text-white text-9xl">{count}</h3>
      <div className="flex flex-col justify-center gap-x-2 gap-y-2">
      <button onClick={incrementAsync} className="text-black font-bold bg-white px-5 py-2 w-[300px] rounded-lg">Increment Async</button>
      <button onClick={increment} className="text-black font-bold bg-white px-5 py-2 w-[300px] rounded-lg">Increment</button>
      <button onClick={decrement} className="text-black font-bold bg-white px-5 py-2 w-[300px] rounded-lg">Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
