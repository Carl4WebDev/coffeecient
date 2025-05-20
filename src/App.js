import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";

import Hero from "./pages/Hero";
import ProductsPage from "./pages/ProductsPage";
import AuthPage from "./pages/AuthPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BackToHome from "./components/BackToHome/BackToHome";
import CartPage from "./pages/CartPage";

import ChatBox from "./components/Chatbox/ChatBox";
function App() {
  return (
    <Router>
      <div className="w-full overflow-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products-page" element={<ProductsPage />} />
            <Route path="/auth-page" element={<AuthPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>

        <BackToHome />
        <ChatBox />
        <Footer />
        <a
          href="https://github.com/Carl4WebDev/coffeecient"
          className="hover:text-[#C99266] flex justify-center bg-white p-4"
        >
          https://github.com/Carl4WebDev/coffeecient
        </a>
      </div>
    </Router>
  );
}

export default App;
