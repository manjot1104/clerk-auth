import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-300 text-center">
    <h1 className="text-4xl font-bold mb-4">
        Welcome to Clerk Auth App
      </h1>
      <h2 className="text-lg mb-6 text-gray-700">
        This is a full-stack authentication app using Clerk, React, Node.js, and MongoDB.
      </h2>
      <Link to="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
    Go to Dashboard
  </Link>
    </div>
  );
}
