import {useParams} from "react-router-dom";
import React, { useState, useEffect } from "react";

const CharacterDetails = (props) => {
    const { id } = useParams()
    //console.log(id)
    const [data, setData] = useState({
        character: {},
        homeworld: {},
        relFilms: {}

    })

    useEffect( () => {
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

            const charData = {character: char}
            const planetData = {homeworld: homeworld}
            const filmsData = {relFilms: relFilms}

            setData(data => ({
                ...data,
                ...charData,
                ...planetData,
                ...filmsData}))
            console.log(data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        
    }
    fetchData()
}, [])
    console.log(data)

    const fetchHomeworld = async(planetID) => {
        try {
            const response = await fetch(`http://localhost:3000/api/planets/${planetID}`);
            
            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }

            const planet = await response.json();
            // const planetData = {homeworld: planet}
            // setData(data => ({
            //     ...data,
            //     ...planetData}))
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
            console.log(relFilms)
            // const filmsData = {relFilms: relFilms}
            // setData(data => ({
            //     ...data,
            //     ...filmsData}))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <div>
                <h1>Character Name: {data.character.name}</h1>
                <div>
                    {/* Homeworld is: {data.homeworld.name} */}
                </div>
                <div>
                    
                </div>
            </div>
        </>
    );
};

export default CharacterDetails;