import Planet from "./Planet"
import React, { useState, useEffect } from "react";

const PlanetsPage = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/planets`);
                
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
            {
                data.map((planet) => (
                    <Planet key={planet._id} data={planet} />
                ))
            }
        </>
    );
}; 

export default PlanetsPage;