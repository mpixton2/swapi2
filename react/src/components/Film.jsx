const Film = (props) => {
    return (
        <>
            <div className="card text-center" style={{ flex: '1', minWidth: '300px', maxWidth: '15%' }}>
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                {/* <div className="card-text">Name: {props.data.name}</div> */}
            </div>
        </div>
        </>
    );
};

export default Film;