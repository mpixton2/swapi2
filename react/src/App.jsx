import React, { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharacterList from "./components/CharacterList";
import FilmList from "./components/FilmList";
import Home from "./components/Home";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [view, setView] = useState('Characters')

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/${view}`);
            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }
            const json_response = await response.json();
            console.log(json_response)
            setData(json_response); // assign JSON response to the data variable.
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, [view]);



  return (
    <>
    <Router>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
  {/* <div>
    <h1>Star Wars Universe Lookup</h1>
    <label for="searchString">Who you looking for? <span class="small">(Regular expressions are cool
        here)</span></label>
    <input id="searchString" oninput="filterCharacters()" autocomplete="off" />
  </div> */}
  <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/Characters" element={<CharacterList data={data}/>} />
      <Route path="/Films" element={<FilmList data={data}/>} />  
      </Routes>
   </div>
  <section id="charactersList">
  </section>
</Router>
    </>
  )
}

export default App
