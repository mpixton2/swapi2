const Character = (props) => {
    return (
        <>
            <a href={`/Characters/${props.data.id}`}>
            <div className="card text-center" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}>
            
            <div className="card-body">
            <h5 className="card-text" style={{justifyContent: 'center'}}>{props.data.name}</h5>
                {/* <div className="card-text">Name: {props.data.name}</div> */}
            </div>
        </div>
        </a>
        </>
    );
};

export default Character;