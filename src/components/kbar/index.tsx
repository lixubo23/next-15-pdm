"use client";

import { useRouter } from "next/router";
import React, { ReactNode, useMemo } from "react";

const KBar = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const actions = useMemo(() => {
    const navigateTo = (url: string) => {
      router.push(url);
    };
    return;
  });
};

export default KBar;
