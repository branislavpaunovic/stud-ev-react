import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
        <nav className="navbar">
        <div className='navbar-container'>
                <ul>
                    <li>Početna</li>
                    <li>Studenti</li>
                    <li>O aplikaciji</li>
                </ul>
        </div>
      </nav>
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
    </div>
  );
};

export default Home;