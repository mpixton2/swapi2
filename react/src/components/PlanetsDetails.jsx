


return (
    <>
        <div className="container-fluid">
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
                <h1>Characters</h1>
                <div className="list-group">
                <ul>
                    {/* {data?.relFilms.map(Film => {<Film><a href={`/films/${Film.id}`}/>${data.relFilms.title}</Film>})} */}
                </ul>
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