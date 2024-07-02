import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Film from "./Film"

const CharacterDetails = (props) => {
    const { id } = useParams()
    //console.log(id)
    const [data, setData] = useState({
        character: {},
        homeworld: {},
        relFilms: []
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/characters/${id}`);

                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }
                const char = await response.json();
                const planetID = char.homeworld
                const homeworld = fetchHomeworld(planetID)
                const relFilms = fetchRelFilms()

                const charData = { character: char }
                const planetData = { homeworld: homeworld }
                const filmsData = { relFilms: relFilms }

                setData(data => ({
                    ...data,
                    ...charData,
                    ...planetData,
                    ...filmsData
                }))
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }


        }
        fetchData()
    }, [])
    console.log(data)

    const fetchHomeworld = async (planetID) => {
        try {
            const response = await fetch(`http://localhost:3000/api/planets/${planetID}`);

            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }

            const planet = await response.json();
            const planetData = { homeworld: planet }
            setData(data => ({
                ...data,
                ...planetData
            }))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const fetchRelFilms = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/characters/${id}/films`);

            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }

            const relFilms = await response.json();
            console.log(`Relfils: `, relFilms)
            const filmsData = { relFilms: relFilms }
            setData(data => ({
                ...data,
                ...filmsData
            }))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    console.log(data.relFilms)
    return (
        <>
            <div className="container-fluid">
                <div className="align-center">
                    <h3>{data.character.name}</h3>
                    <div className="card">
                        Homeworld: {data.homeworld.name}
                    </div>
                    <div className="card">
                        <p>Height: {data.character.height} cms </p>
                    </div>
                    <div className="card">
                        <p>Mass: {data.character.mass} kg </p>
                    </div >
                    <div className="card">
                        <p>Gender: {data.character.gender}  </p>
                    </div>
                    <div className="card">
                        <p>Eye Color: {data.character.eye_color}  </p>
                    </div>
                    <div className="card">
                        <p>Hair Color: {data.character.hair_color}  </p>
                    </div>
                    <div className="card">
                        <p>Skin Color: {data.character.skin_color}  </p>
                    </div>
                    <h5>Films</h5>
                    <div className="list-group">
                    <ul>

                        {/* {data?.relFilms.map(Film => {<Film><a href={`/films/${Film.id}`}/>${data.relFilms.title}</Film>})} */}
                    </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CharacterDetails;