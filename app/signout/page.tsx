import { signOut } from "@/auth";

export default function SignOutPage() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-xl mb-4">Are you sure you want to sign out?</h1>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Sign out
        </button>
      </form>
    </div>
  );
}
