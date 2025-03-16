import { auth } from "@/auth";
import UserName from "@/components/user-name";
import React from "react";

export default async function AdminPage() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;
  return (
    <div>
      Admin Page
      <UserName />
    </div>
  );
}
