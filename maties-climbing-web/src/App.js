import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import NoPage from "./pages/nopage";
import GalleryPage from "./pages/gallery";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} /> {/*default page*/}
        <Route path="/home" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
