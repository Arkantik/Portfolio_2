// Packages
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

// Components
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/utilities/Navbar";

import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    gap: "16px",
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="bg-dark">
      {loading ? (
        <PulseLoader
          color="#26acd9"
          cssOverride={override}
          loading={loading}
          size={15}
          speedMultiplier={0.5}
        />
      ) : (
        <>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Portfolio />} />
            </Routes>
          </main>
        </>
      )}
    </div>
  );
}
