export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-purple-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 text-center">
        Welcome to Clerk Auth App
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-xl">
        This is a full-stack authentication app using Clerk, React, Node.js, and MongoDB.
      </p>
    </div>
  );
}
