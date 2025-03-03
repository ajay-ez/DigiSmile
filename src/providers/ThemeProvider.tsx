"use client";

import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import theme from "@/theme/theme"; // Import your theme file

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
