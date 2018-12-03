import MovieList from './MovieList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';

class App extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            moviesList: [
            'pokemon',
            'The Dark Knight',
            'Dickson'
            ]
        }
        this.addingMovieToList.bind(this);
    }
    findingMovie(title) {
       if(title === undefined) {
           return;
       }
       this.setState({
        moviesList: this.state.moviesList.filter((movie) => movie.includes(title))
       })
    }

    addingMovieToList(val) {
        this.setState({
            moviesList: this.state.moviesList.push(val)
        })
    }

    render(){
      return (
          <div>  
            <AddMovie add={this.addingMovieToList.bind(this)}/>
            <div>
                <nav className="navbar">
                <Search findMovie={this.findingMovie.bind(this)}/>
                </nav>
            </div>  
            <div>
                <MovieList movieList={this.state.moviesList}/>
            </div>
          </div>
      )
    }
};

export default App;