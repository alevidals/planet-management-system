"use client";

import { Provider, createStore } from "jotai";
import { useState } from "react";

export function Providers({
  children,
  className,
}: { children: React.ReactNode; className?: string }) {
  const [store] = useState(() => createStore());

  return (
    <div className={className}>
      <Provider store={store}>{children}</Provider>
    </div>
  );
}
