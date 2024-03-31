"use client";

import { Provider, createStore } from "jotai";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [store] = useState(() => createStore());

  return <Provider store={store}>{children}</Provider>;
}
