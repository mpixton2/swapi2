import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Planet from "./Planet";
import Film from "./Film"

const CharacterDetails = (props) => {
    const { id } = useParams()
    //console.log(id)
    const [character, setCharacter] = useState({})
    const [homeworld, setHomeworld] = useState({})
    const [relFilms, setRelFilms] = useState([])


    
    useEffect( () => {
        const fetchHomeworld = async(planetID) => {
            try {
                const response = await fetch(`http://localhost:3000/api/planets/${planetID}`);
                
                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }
    
                const planet = await response.json();
                setHomeworld(planet)
                console.log('Homeworld', homeworld)
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
    
                const films = await response.json();
                setRelFilms(films)
                console.log('films:', relFilms)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/characters/${id}`);
            
            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }
            const char = await response.json();
            setCharacter(char)
            console.log('character', char)
            fetchHomeworld(char.homeworld)
            fetchRelFilms()
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        
    }
    fetchData()
}, [])
console.log(character, homeworld, relFilms)
relFilms.forEach((item) =>{
    console.log(item)
})
relFilms.map((film) =>{
    console.log(film)
})

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

        // <div style={{display: "flex"}}>
//         <h1>Character Name: {character.name}</h1>
//         <div style={{justifyContent: "center" }}>
//             Homeworld is: <Planet data={homeworld} />
//         </div>
//         <div>
//             Related Films: 
//             <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//         {
//         relFilms.map((film) => (
//             <Film key={film._id} data={film} />
//             ))
//         }
// </div>
    );
};

export default CharacterDetails;