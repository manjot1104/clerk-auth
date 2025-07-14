import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { useAuth,SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

export default function App() {
  const { getToken } = useAuth();

  const fetchProtected = async () => {
    try {
      const token = await getToken();
      const res = await fetch("https://clerk-auth-backend.onrender.com/api/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("Error fetching protected route:", err);
    }
  };

  useEffect(() => {
    fetchProtected();
  }, []);
  return (
    <div className="p-8 md:p-16">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </div>
  );
}
