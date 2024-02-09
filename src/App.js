import { useState, useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { MdOutlineMobileOff } from "react-icons/md";

// Layouts
import RootLayout from "./Layout/RootLayout";
// Pages
import Signout from "./Pages/Signout";
import Dashboard from "./Pages/Dashboard";
import Analytics from "./Pages/Analytics";
import Settings from "./Pages/Settings";
import Reviews from "./Pages/Reviews";
import Foods from "./Pages/Foods";
import Restaurants from "./Pages/Restaurants";
import Users from "./Pages/Users";
import Login from "./Pages/Login";
import Menue from "./Pages/Menue";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <RootLayout />
            ) : (
              <Login onLogin={() => setIsLoggedIn(true)} />
            )
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="menue" element={<Menue />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="foods" element={<Foods />} />
          <Route path="signout" element={<Signout onLogout={handleLogout} />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </>
    )
  );

  return <>{isMobile ? <MobileView /> : <RouterProvider router={router} />}</>;
}

function MobileView() {
  return (
    <div className="under-construction-container">
      <div className="under-construction-content">
        <MdOutlineMobileOff className="construction-icon ml-[25px]" />
        <h1 className="text-02">Please open on Desktop</h1>
      </div>
    </div>
  );
}
