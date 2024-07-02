const FilmDetails = (props) => {

return (
    <>
        <div className="container-fluid">
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
                <div className="list-group">
                <ul>
                    {/* {data?.relFilms.map(Film => {<Film><a href={`/films/${Film.id}`}/>${data.relFilms.title}</Film>})} */}
                </ul>
                </div>

                <h5>Planets</h5>
                <div className="list-group">
                <ul>
                    {/* {data?.relFilms.map(Film => {<Film><a href={`/films/${Film.id}`}/>${data.relFilms.title}</Film>})} */}
                </ul>
                </div>
            </div>
        </div>
    </>
);
const FilmDetails = (props) => {
    return (
        <>
        </>
    );
};

export default FilmDetails;
