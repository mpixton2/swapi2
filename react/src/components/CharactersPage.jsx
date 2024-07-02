import Character from "./Character"
import React, { useState, useEffect } from "react";
const CharactersPage = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/characters`);
                
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
    }, []);
    


    return (
        <>
        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {
                data?.map((char) => (
                    <Character key={char._id} data={char} />
                ))
            }
        </div>
        </>
    );
};

export default CharactersPage;