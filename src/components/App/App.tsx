"use client";

import type { ReactNode } from "react";
import { Reshaped } from "reshaped";
import "@/themes/website/theme.css";

const App = ({ children }: { children: ReactNode }) => {
  return (
    <Reshaped theme="website" defaultColorMode="dark">
      {children}
    </Reshaped>
  );
};

export default App;
