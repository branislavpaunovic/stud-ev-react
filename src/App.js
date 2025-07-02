// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Studenti from './Studenti';

// Ovu Home komponentu možemo potpuno izbaciti, jer Layout već crta hero.
// Ako želiš neku specifičnu home-sadržinu ispod hero, prebaci je u Home.js i importuj.
const Empty = () => null;

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout ostaje uvek prikazan */}
        <Route path="/" element={<Layout />}>
          {/* kad je "/" samo ostavljamo hero + navbar */}
          <Route index element={<Empty />} />
          {/* kad je "/studenti" ubaci Studenti komponentu ispod hero */}
          <Route path="studenti" element={<Studenti />} />
          {/* kad je "/about" ubaci About komponentu (ili privremeni div) */}
          <Route path="about" element={<div style={{padding:40}}>O aplikaciji</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

































// // import logo from './logo.svg';
// import './App.css';



// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, Ana</h1>
//       <p>Dobro došla u moj skromni dom!</p>
//       <p>Ja sam React, novi programski jezik koji Bane uči od danas, za seminarski rad iz Internet tehnologija</p>
//       <h1>ŽELIM TI OD SRCA DA SE LEPO PROVEDEŠ SA BANETOM!</h1>
//     </div>
//   );
// }


// export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
