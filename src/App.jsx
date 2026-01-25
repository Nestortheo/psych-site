import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <main className="relative isolate min-h-screen bg-[#f6f6f4]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b
          from-surface
          via-surfaceLight
          to-surfaceDark
          "
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </main>
  );
}