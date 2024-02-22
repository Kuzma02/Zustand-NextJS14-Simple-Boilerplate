import { create } from "zustand";

type CounterStore = {
    count: number;
    increment: () => void;
    incrementAsync: () => Promise<void>;
    decrement: () => void
}

export const useCounterStore = create<CounterStore>((set) => {
    return {
        count: 0,
        increment: () => {
            set((state) => { return {count: state.count + 1} })
        },
        decrement: () => {
            set((state) => { return {count: state.count - 1} })
        },
        incrementAsync: async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            set((state) => { return {count: state.count + 1} })
        }
    }
})