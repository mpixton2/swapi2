const Character = (props) => {
    return (
        <>
            <div className="charactersList" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}>
                <h5>{props.data.name}</h5>
            </div>
        </>
    );
};

export default Character;