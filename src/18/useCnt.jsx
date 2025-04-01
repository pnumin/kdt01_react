import { create } from "zustand";

export const useCnt = create( (set) => ({
  cnt : 0,
  increase : () => set((state) => ({cnt : state.cnt + 1})) ,
  decrease : () => set((state) => ({cnt : state.cnt - 1})) ,
  reset : () => set({cnt : 0}) ,
})) ;