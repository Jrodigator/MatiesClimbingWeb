import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import NoPage from "./pages/nopage";
import SignupPage from "./pages/signup";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
    </>
  );
}

export default App;
