import { create } from 'zustand'

const defaultArr = [];

export const useToDoStore = create((set) => ({
  toDolist: defaultArr,
  addToList: (arr) => set((state) => ({toDolist: [...state.toDolist, ...arr]})),
}))