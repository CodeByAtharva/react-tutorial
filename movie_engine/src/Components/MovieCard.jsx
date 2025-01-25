function MovieCard(movie){
    return (

        <>
        <div className="card">
            <img src={movie.src} alt="something went wrong" />
            <div className="card_overlay">
            <div className="heart-btn"></div>
            </div>
        </div>
        </>

    )
}

export default MovieCard;