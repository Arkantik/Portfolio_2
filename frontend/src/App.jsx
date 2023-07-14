// Packages

// Components
import Navbar from "./components/utilities/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import DesktopMenu from "./components/utilities/DesktopMenu";

// Style
import "./App.css";

export default function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <main>
        <DesktopMenu />
        <Home />
        <About />
        <Project />
        <Testimonial />
        <Contact />
      </main>
    </div>
  );
}
