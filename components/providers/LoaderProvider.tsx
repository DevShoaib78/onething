"use client";
import { createContext, useContext, useState } from "react";

type LoaderState = { ready: boolean; setReady: (v: boolean) => void };
const Ctx = createContext<LoaderState>({ ready: true, setReady: () => {} });

// `ready` flips when the preloader starts to lift, so the hero can rise in underneath it.
export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  return <Ctx.Provider value={{ ready, setReady }}>{children}</Ctx.Provider>;
}

export const useLoader = () => useContext(Ctx);
