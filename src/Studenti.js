import React, { useState } from 'react';
import studenti from './StudentiPodaci'; // import podataka
import './Studenti.css';

const Studenti = () => {
  const [selektovaniId, setSelektovaniId] = useState(null);

  return (
    <div className="App">
      <h1>Lista Studenata</h1>
      <div className="scrollZona">
        <table className="tabelaStudenata">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ime</th>
              <th>Prezime</th>
              <th>Datum Rođenja</th>
              <th>Broj Indeksa</th>
              <th>Telefon</th>
              <th>Email</th>
              <th>Ulica</th>
              <th>Br.</th>
              <th>PTT</th>
              <th>Grad</th>
              <th>Zemlja</th>
            </tr>
          </thead>
          <tbody>
            {studenti.map(student => (
              <tr
                key={student.StudentId}
                className={selektovaniId === student.StudentId ? 'selektovanRed' : ''}
                onClick={() => setSelektovaniId(student.StudentId)}
              >
                <td>{student.StudentId}</td>
                <td>{student.Ime.trim()}</td>
                <td>{student.Prezime.trim()}</td>
                <td>{student.DatumRodjenja}</td>
                <td>{student.BrojIndeksa.trim()}</td>
                <td>{student.Telefon}</td>
                <td>{student.Email.trim()}</td>
                <td>{student.Ulica}</td>
                <td>{student.BrojKuce}</td>
                <td>{student.PTT}</td>
                <td>{student.Grad}</td>
                <td>{student.Zemlja}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Studenti;
