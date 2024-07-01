import Character from "./Character"

const CharacterList = (props) => {
    return (
        <>
            {
                props.data.map((char) => (
                    <Character key={char._id} data={char} />
                ))
            }
        </>
    );
}; 

export default CharacterList;