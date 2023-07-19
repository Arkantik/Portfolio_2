// Packages
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Components
import Navbar from "./components/utilities/Navbar";

// Hooks
import useAuth from "./hooks/useAuth";

// Pages
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Style
import "./App.css";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const { isLoggedIn, isAdmin, loadUserFromLocalStorage } = useAuth();

  useEffect(() => {
    loadUserFromLocalStorage();
  }, []);

  return (
    <div className="overflow-hidden bg-dark">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          {isLoggedIn && isAdmin ? (
            <Route>
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          ) : (
            <Route>
              <Route path="login" element={<Login />} />
            </Route>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
