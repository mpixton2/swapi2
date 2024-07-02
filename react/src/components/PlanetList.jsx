import Planet from "./Planet"

const PlanetList = (props) => {
    return (
        <>
            {
                props.data.map((planet) => (
                    <Planet key={planet._id} data={planet} />
                ))
            }
        </>
    );
}; 

export default PlanetList;