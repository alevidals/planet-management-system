"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Provider, createStore } from "jotai";
import { useState } from "react";

export function Providers({
  children,
  className,
}: { children: React.ReactNode; className?: string }) {
  const [store] = useState(() => createStore());

  return (
    <div className={className}>
      <Provider store={store}>
        <NextUIProvider>{children}</NextUIProvider>
      </Provider>
    </div>
  );
}
