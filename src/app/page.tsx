import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  // const { userId } = await auth();
  const userId = "";
  if (!userId) {
    return redirect("/auth/sign-in");
  } else {
    redirect("/dashboard/overview1");
  }
  // redirect("/dashboard/overview");
}
