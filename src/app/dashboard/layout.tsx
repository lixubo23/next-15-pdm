import { Metadata } from "next";
import { cookies } from "next/headers";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PDM NEXT",
  description: "PDM Page with Next.js",
};
const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === true;
  return <div>1</div>;
};

export default DashboardLayout;
