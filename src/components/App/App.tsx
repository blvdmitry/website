"use client";

import type { ReactNode } from "react";
import { Reshaped } from "reshaped";
import "reshaped/themes/slate/theme.css";

const App = ({ children }: { children: ReactNode }) => {
  return (
    <Reshaped theme="slate" defaultColorMode="dark">
      {children}
    </Reshaped>
  );
};

export default App;
