const Planet = (props) => {
    return (
        <>
            <a href={`/Planets/${props.data.id}`}>
            <div className="card" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}>
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                {/* <div className="card-text">Name: {props.data.name}</div> */}
            </div>
        </div>
        </a>
        </>
    );
};

export default Planet;