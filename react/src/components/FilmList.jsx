import Film from "./Film"

const FilmList = (props) => {
    return (
        <>
            {
                props.data.map((film) => (
                    <Film key={film._id} data={film} />
                ))
            }
        </>
    );
}; 

export default FilmList;