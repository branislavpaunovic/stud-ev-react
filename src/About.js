// src/About.js
import React from 'react';

export default function About() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Montserrat, sans-serif' }}>
      <h1>Seminarski rad iz predmeta:</h1>
      <h2>Internet tehnologije – React</h2>

      <h3>Aplikacija:</h3>
      <p>Studentska evidencija</p>

      <h3>Verzija:</h3>
      <p>1.0.0</p>

      <h3>Datum:</h3>
      <p>02.07.2025</p>

      <h3>Autor:</h3>
      <p>Branislav Paunović</p>

      <p>
        Ovo je nastavak predmeta Objektno Programiranje, kod profesora Dr. Gorana Aritonovića, takođe
        i nastavak aplikacije koja je rađena u C#, ADO .NET i SQL Server tehnologiji. Aplikaciju
        možete preuzeti na GitHub repozitorijumu:{" "}
        <a
          href="https://github.com/branislavpaunovic/stud-ev-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/branislavpaunovic/stud-ev-react
        </a>.
      </p>

      <p>Hvala Vam na pažnji, vidimo se na sledećem ispitu!</p>
    </div>
  );
}