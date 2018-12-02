import Movie from './Movies.js'

var MovieList = ({movieList}) => (
    <div>
    {movieList.map((movie) => { return (<Movie title={movie} />)})}
    </div>
)

export default MovieList;