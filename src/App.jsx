import "./App.css";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { Toaster } from "@/components/ui/sonner";
import Header from "./components/header/Header";
import Navbar from "./landingPage/Navbar";

function App() {
  const { isSignedIn, isLoaded, user } = useUser();

  if (!isSignedIn && isLoaded && !user) {
    return <Navigate to={"/auth/sign-in"} />;
  }
  return (
    <>
      <Header/>
      <Outlet />
      <Toaster />
    </>
  );
}

export default App;
