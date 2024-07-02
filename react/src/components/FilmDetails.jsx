import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Planet from "./Planet";
import Character from "./Character"

const FilmDetails = (props) => {
    const { id } = useParams()
    //console.log(id)
    const [characters, setCharacters] = useState([])
    const [planets, setPlanets] = useState([])
    const [film, setFilm] = useState({})


    
    useEffect( () => {
        const fetchPlanets = async() => {
            try {
                const response = await fetch(`http://localhost:3000/api/films/${id}/planets`);
                
                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }
    
                const planets = await response.json();
                setPlanets(planets)
                //console.log('Homeworld', homeworld)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
            const fetchCharacters = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/films/${id}/characters`);
                
                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }
    
                const characters = await response.json();
                setCharacters(characters)
                //console.log('films:', relFilms)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/films/${id}`);
            
            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }
            const film = await response.json();
            setFilm(film)
            // console.log('character', char)
            fetchPlanets()
            fetchCharacters()
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        
    }
    fetchData()
}, [])
    


return (
    <>
        <div className="container-fluid" style={{paddingTop: "50px"}}>
            <div className="align-center">
                <h3>{film.title}</h3>
                <div className="card">
                    Producer: {film.producer}
                </div>
                <div className="card">
                    <p>Director: {film.director}</p>
                </div>
                <div className="card">
                    <p>Episode: {film.episode_id} </p>
                </div >
                <div className="container">
                    <p>{film.opening_crawl} </p>
                </div >
                <h5>Characters</h5>
                <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {
                            characters.map((character) => (
                                <Character key={character._id} data={character} />
                            ))}
                    </div>

                <h5>Planets</h5>
                <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {
                            planets.map((planet) => (
                                <Planet key={planet._id} data={planet} />
                            ))}
                    </div>
            </div>
        </div>
    </>
);
}

export default FilmDetails;
