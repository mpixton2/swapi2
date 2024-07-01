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
            <div className="charactersList" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {
                      
                    // <Route path={`/character/${character._id}`} element=
                    // {
                        props.data?.map((character) => (
                            <Character key={character._id} data={character} />
                        )) 
                        // } 
                        // />
                }
            </div>
        </>
    );
};

export default CharacterList;