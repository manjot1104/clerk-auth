import { useUser } from "@clerk/clerk-react";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="p-10 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-purple-700">Hello, {user?.firstName || "User"}!</h2>
      <p className="text-lg mt-2">You are logged in and this is your dashboard.</p>
    </div>
  );
}
