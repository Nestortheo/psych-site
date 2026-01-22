import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative isolate min-h-screen bg-[#f6f6f4]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b
      from-[#f6f6f4] 
      via-[#efefec]
      to-[#e6e6e2]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </main>
  );
}