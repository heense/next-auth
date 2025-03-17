"use client";
import { useSession } from "next-auth/react";

export default function UserName() {
  const { data: session } = useSession();

  if (!session?.user) return null;
  console.log(session.user);

  return <div>{session.user.name}</div>;
}
