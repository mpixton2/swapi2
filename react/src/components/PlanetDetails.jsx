import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Planet from "./Planet";
import Film from "./Film"
import Character from "./Character";

const PlanetDetails = (props) => {
    const { id } = useParams()
    //console.log(id)
    const [characters, setCharacter] = useState([])
    const [planet, setPlanet] = useState({})
    const [relFilms, setRelFilms] = useState([])



    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/planets/${id}/characters`);

                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }
                
                const characters = await response.json();
                setCharacter(characters);
                //console.log('Homeworld', homeworld)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        const fetchRelFilms = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/planets/${id}/films`);

                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }

                const films = await response.json();
                setRelFilms(films)
                console.log('films:', relFilms)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/planets/${id}`);

                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }
                const planet = await response.json();
                setPlanet(planet)
                console.log('planet', planet)
                fetchCharacters()
                fetchRelFilms()
            } catch (error) {
                console.error('Error fetching data:', error);
            }


        }
        fetchData()
    }, [])
    //console.log(character, homeworld, relFilms)
    // relFilms.forEach((item) =>{
    //     console.log(item)
    // })
    // relFilms.map((film) =>{
    //     console.log(film)
    // })

    return (
        <>
            <div className="container-fluid" style={{paddingTop: "50px"}}>
                <div className="align-center">
                    <h3>{planet.name}</h3>
                    <div className="card">
                        Climate: {planet.climate}
                    </div>
                    <div className="card">
                        <p>Surface Water: {planet.surface_water} cms </p>
                    </div>
                    <div className="card">
                        <p>Diameter: {planet.diameter} kg </p>
                    </div >
                    <div className="card">
                        <p>Rotation Period: {planet.rotation_period}  </p>
                    </div>
                    <div className="card">
                        <p>Terrain: {planet.terrain}  </p>
                    </div>
                    <div className="card">
                        <p>Gravity: {planet.gravity}  </p>
                    </div>
                    <div className="card">
                        <p>Orbital Period: {planet.orbital_period}  </p>
                    </div>
                    <div className="card">
                        <p>Population: {planet.population}  </p>
                    </div>
                    <h5>Characters</h5>

                    <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {
                            characters.map((character) => (
                                <Character key={character._id} data={character} />
                            ))}
                    </div>

                    <h5>Films</h5>
                    <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {
                            relFilms.map((film) => (
                                <Film key={film._id} data={film} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlanetDetails;