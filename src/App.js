import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import Hero from "./pages/Hero.js";
import Footer from "../src/components/Footer/Footer.js";
function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
