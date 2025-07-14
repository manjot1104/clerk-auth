import { useUser } from "@clerk/clerk-react";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="p-8">
  <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
    <h2 className="text-2xl font-semibold mb-2">Hello, {user.firstName}</h2>
    <p className="text-gray-700">This is your protected dashboard page.</p>
  </div>
</div>
  );
}
