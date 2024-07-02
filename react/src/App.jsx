import React, { useState, useEffect } from "react";
import './App.css'
import CharactersPage from "./components/CharactersPage";
import FilmsPage from "./components/FilmsPage";
import Home from "./components/Home";
import CharacterDetails from "./components/CharacterDetails";
import FilmDetails from "./components/FilmDetails";
import PlanetDetails from "./components/PlanetDetails";
import PlanetsPage from "./components/PlanetsPage";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  // const [films, setFilms] = useState([])
  // const [characters, setCharacters] = useState([])
  // const [planets, setPlanets] = useState([])
  //const [view, setView] = useState('null')

//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await fetch(`http://localhost:3000/api/${view}`);
            
//             if (!response.ok) {
//                 throw new Error('Data could not be fetched!');
//             }

//             const json_response = await response.json();
//             console.log(json_response)
//             setData(json_response); // assign JSON response to the data variable.
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     fetchData();
// }, [view]);



  return (
    <>
    <Router>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{border: '0.5px'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            SWAPI
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" to="/Characters">
                Characters
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Films">
                Films
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Planets">
                Planets
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  <main style={{paddingTop: '65px'}}>
  <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/Characters" element={<CharactersPage />} />
      <Route path="/Characters/:id" element={<CharacterDetails />} />
      <Route path="/Films" element={<FilmsPage />} />
      <Route path="/Films/:id" element={<FilmDetails />} />
      <Route path="/Planets" element={<PlanetsPage />} />
      <Route path="/Planets/:id" element={<PlanetDetails />} />  
      </Routes>
   </div>
   </main>
</Router>
    </>
  )
}

export default App
