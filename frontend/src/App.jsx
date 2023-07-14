// Packages

// Components
import Navbar from "./components/utilities/Navbar";
import SideMenu from "./components/utilities/SideMenu";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import Project from "./pages/Project";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";

// Style
import "./App.css";

export default function App() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden bg-dark">
      <Navbar />
      <main>
        <SideMenu />
        <Home />
        <About />
        <Timeline />
        <Project />
        <Testimonial />
        <Contact />
      </main>
    </div>
  );
}
