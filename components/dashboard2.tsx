"use client";
import { useSession } from "next-auth/react";

export default function Dashboard2() {
  const { data: session } = useSession();

  console.log(session);

  return <div>{session?.user?.name}</div>;
}
