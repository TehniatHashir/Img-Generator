
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Carousel from "./components/Carousel.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Footer from "./components/Footer.jsx";
import ChatPage from "./pages/ChatPage.jsx";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <div id="what-we-do">
        <Carousel />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
