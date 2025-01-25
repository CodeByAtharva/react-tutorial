import MovieCard from "../Components/MovieCard"

function Home(){

    const Movies=[
        {id:1,title:"jhon wick", release:'2020'},
        {id:2,title:"Terminator", release:'1999'},
        {id:3,title:"Pushpa 2", release:'2020'},
        {id:4,title:"Avatar 3", release:'2025'},
        {id:5,title:"Deadpool", release:'2024'},
    ]

    return(
        

        <>
        <div id="home">

            <div className="movie-grid">
                {

                Movies.map((movie)=>(

                    <MovieCard movie={movie} id={movie.id}/>

                    )
                    )


                }
            </div>

        </div>
        </>

    )
}

export default Home;