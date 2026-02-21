"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const BackgroundGlow = dynamic(
  () => import("@/components/global/BackgroundGlow").then((mod) => mod.BackgroundGlow),
  { ssr: false },
);

const RainbowCursor = dynamic(
  () => import("@/components/global/RainbowCursor").then((mod) => mod.RainbowCursor),
  { ssr: false },
);

export function DeferredEffects() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    type IdleDeadline = { didTimeout: boolean; timeRemaining: () => number };
    type IdleCallback = (deadline: IdleDeadline) => void;
    type IdleOptions = { timeout?: number };

    const idleApi = globalThis as typeof globalThis & {
      requestIdleCallback?: (callback: IdleCallback, options?: IdleOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let idleId: number | null = null;
    let timeoutId: ReturnType<typeof globalThis.setTimeout> | null = null;

    const showEffects = () => setIsReady(true);

    if (idleApi.requestIdleCallback) {
      idleId = idleApi.requestIdleCallback(showEffects, { timeout: 1000 });
    } else {
      timeoutId = globalThis.setTimeout(showEffects, 500);
    }

    return () => {
      if (idleId !== null && idleApi.cancelIdleCallback) {
        idleApi.cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        globalThis.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!isReady) return null;

  return (
    <>
      <BackgroundGlow />
      <RainbowCursor />
    </>
  );
}
