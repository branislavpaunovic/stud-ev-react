import React, { useState } from 'react';
import studenti from './StudentiPodaci'; // import podataka
import './Studenti.css';

const Studenti = () => {
  const [selektovaniId, setSelektovaniId] = useState(null);
  const [pretraga, setPretraga] = useState('');
  const unos = pretraga.trim().toLowerCase();

  const handlePretraga = () => {
    const rezultat = studenti.find(student =>
      student.Ime.trim().toLowerCase().includes(unos) ||
      student.Prezime.trim().toLowerCase().includes(unos) ||
      student.BrojIndeksa.trim().toLowerCase() === unos
    );
    if (rezultat) {
      setSelektovaniId(rezultat.StudentId);
    } else {
      alert('Student nije pronađen.');
    }
  };


  return (
    <div className="App">
      <div className='studenti-page'>
      <h1>Lista Studenata</h1>
        <div className='pretraga'> 
          <input type="text" placeholder="Unesi ime ili prezime za pretragu" value={pretraga} onChange={(e) => setPretraga(e.target.value)}></input>
          <button type="button" onClick={handlePretraga}>Pretraži</button>
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
                        <th>Smer</th>
                        <th>Pol</th>
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
                          <td>{student.SmerId}</td>
                          <td>{student.PolId === 1 ? 'Muško' : 'Žensko'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Studenti;
