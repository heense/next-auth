import { auth } from "@/auth";
import UserName from "@/components/user-name";
import React from "react";
import Dashboard from "@/components/dashboard";
import Dashboard2 from "@/components/dashboard2";
import Dashboard3 from "@/components/dashboard3";
import { SessionProvider } from "next-auth/react";

export default async function AdminPage() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;
  return (
    <div className="flex flex-col gap-4">
      Admin Page
      <SessionProvider>
        <UserName />
      </SessionProvider>
      <SessionProvider>
        <Dashboard />
        <Dashboard2 />
        <Dashboard />
        <Dashboard2 />
        <Dashboard />
        <Dashboard2 />
        <Dashboard />
        <Dashboard2 />
        <Dashboard />
        <Dashboard2 />
        <Dashboard />
        <Dashboard2 />
        <Dashboard />
        <Dashboard2 />
        <Dashboard />
        <Dashboard2 />
        <Dashboard />
        <Dashboard2 />
        <Dashboard />
        <Dashboard2 />
        <Dashboard3 />
        <Dashboard3 />
        <Dashboard3 />
        <Dashboard3 />
        <Dashboard3 />
        <Dashboard3 />
        <Dashboard3 />
        <Dashboard3 />
      </SessionProvider>
    </div>
  );
}
