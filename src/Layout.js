// src/layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Home.css';  // tu imaš stilove za navbar + hero

const Layout = () => (
  <div className="home-container">
    {/* NAVBAR */}
    <nav className="navbar">
      <div className="navbar-container">
        <ul>
          <li><Link to="/">Početna</Link></li>
          <li><Link to="/studenti">Studenti</Link></li>
          <li><Link to="/about">O aplikaciji</Link></li>
        </ul>
      </div>
    </nav>

    {/* HERO */}
    <div
      className="hero"
      style={{
        backgroundImage: "url('/Studenti.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="overlay" />
      <img src="/bapuss.png" alt="Logo škole" className="logo-skole" />
      <div className="hero-text">
        <h1>Dobrodošli u aplikaciju Studentska evidencija</h1>
        <h2>Seminarski rad iz predmeta:</h2>
        <h3>Internet tehnologije – React</h3>
      </div>
      <div className="potpisi">
        <p className="levo">Student: Branislav Paunović</p>
        <p className="desno">Profesor: Goran Aritonović</p>
      </div>
    </div>

    {/* OVDE IDEJU STRANICE KOJU BIRAŠ (Home je prazno, Studenti je tabela…) */}
    <Outlet />
  </div>
);

export default Layout;