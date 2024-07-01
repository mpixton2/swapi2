import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SWAPI_API_URL}/characters`);
        if (!response.ok) {
          throw new Error('Data could not be fetched!');
        }
        const json_response = await response.json();
        setData(json_response);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
     <body>
  <div>
    <h1>Star Wars Universe Lookup</h1>
    <label htmlFor="searchString">Who you looking for?</label>
    </div>
  <section id="charactersList">
    <CharacterList />
  </section>
</body>
    </>
  )
}

export default App
