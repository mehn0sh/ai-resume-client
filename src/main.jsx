import { ClerkProvider } from "@clerk/clerk-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import SignInPage from "./auth/sign-in/index.jsx";
import SignUpPage from "./auth/sign-up/index.jsx";
import Header from "./components/header/Header.jsx";
import Dashboard from "./dashboard/index.jsx";
import EditResume from "./dashboard/resume/resumeId/edit/index.jsx";
import Home from "./home/index.jsx";
import "./index.css";
import View from "./my-resume/[resumeId]/view/index.jsx";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element:<Home/>,
    path:"/"
  },
  {
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path:"/dashboard/resume/:resumeid/edit",
        element:<EditResume/>
      }
    ],
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUpPage />,
  },
{
  path:"/my-resume/:resumeid/view",
  element:<View/>
}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
        elements: {
          footer: "hidden",
        },
      }}
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
