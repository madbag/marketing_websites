import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import NavBar from "./Components/Navbar/NavBar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-transparent">
        <NavBar />
      </header>

      <main className="flex-1">
        <HeroSection />
      </main>

      <footer className="bg-[#1C1E21]">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
