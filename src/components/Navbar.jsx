import { UserButton, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">
        <Link to="/">ClerkAuth App</Link>
      </h1>

      <div className="flex items-center space-x-4">

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        
        <SignedOut>
          <SignInButton>
            <button className="text-lg px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Sign In</button>
          </SignInButton>
          <SignUpButton>
            <button className="text-lg px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Sign Up</button>
          </SignUpButton>
        </SignedOut>
      </div>
    </nav>
  );
}
 