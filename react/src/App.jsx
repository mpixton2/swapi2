import React, { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharacterList from "./components/CharacterList";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
    <Router>
     <body>
  <div>
    <h1>Star Wars Universe Lookup</h1>
    <label for="searchString">Who you looking for? <span class="small">(Regular expressions are cool
        here)</span></label>
    <input id="searchString" oninput="filterCharacters()" autocomplete="off" />
  </div>
  <section id="charactersList">
  </section>
</body>
</Router>
    </>
  )
}

export default App
