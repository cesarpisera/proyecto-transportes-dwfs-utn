import "./App.css";
import "./styles/Header.css";
import "./styles/Footer.css";
import "./styles/Nav.css";
import "./styles/HomePage.css";
import "./styles/HomePage.css";
import "./styles/ContactoPage.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/NosotrosPage" element={<NosotrosPage/>} />
          <Route path="/NovedadesPage" element={<NovedadesPage/>} />
          <Route path="/ContactoPage" element={<ContactoPage/>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
