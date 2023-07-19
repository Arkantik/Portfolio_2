// Packages

// Components
import Navbar from "./components/utilities/Navbar";

// Pages
import Portfolio from "./pages/Portfolio";

// Style
import "./App.css";

export default function App() {
  return (
    <div className="overflow-hidden bg-dark">
      <Navbar />
      <main>
        <Portfolio />
      </main>
    </div>
  );
}
