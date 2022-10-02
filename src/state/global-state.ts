import { RootScholarShipObject } from "./../services/interfaces";
import create from "zustand";

interface IGlobalState {
  response: RootScholarShipObject | undefined;
  setResponse: (response: RootScholarShipObject | undefined) => void;
}

export const useGlobalState = create<IGlobalState>((set) => ({
  response: undefined,
  setResponse: (response) => set((state) => ({ response: response })),
}));
