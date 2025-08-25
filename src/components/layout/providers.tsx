"use client";
import { useTheme } from "next-themes";
import React, { ReactNode } from "react";
import { ActiveThemeProvider } from "../ActiveTheme";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
const Providers = ({
  activeThemeValue,
  children,
}: {
  activeThemeValue: string;
  children: ReactNode;
}) => {
  const { resolvedTheme } = useTheme();
  return (
    <>
      <ActiveThemeProvider initialTheme={activeThemeValue}>
        <ClerkProvider
          appearance={{
            baseTheme: resolvedTheme === "dark" ? dark : undefined,
          }}
        >
          {children}
        </ClerkProvider>
      </ActiveThemeProvider>
    </>
  );
};

export default Providers;
