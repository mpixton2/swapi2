import Character from "./Character"

// import {
//     BrowserRouter as Router,
//     Route,
//     Routes,
//     Link
// } from "react-router-dom";

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