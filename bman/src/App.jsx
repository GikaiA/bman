import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Clients from "./Clients/Clients";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
