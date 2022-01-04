const IMG_API='https://image.tmdb.org/t/p/w1280'
export default  function Movie({title,poster_path,overview,vote_average}){
    return(
        <div className="movie">
            <img src={poster_path ? (IMG_API+poster_path) :'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80'} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className="vote-average">{vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}