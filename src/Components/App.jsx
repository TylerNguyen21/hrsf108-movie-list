import MovieList from './MovieList.js';
import Search from './Search.js';
//import AddMovie from './AddMovie.js';
class App extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            moviesList: [
            'pokemon',
            'The Dark Knight'
            ]
        }
        this._inputElement = '';
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

    addingMovieToList(e) {
        e.preventDefault();
        console.log(this._inputElement);
        if(this._inputElement.value !== '') {
          this.setState({
            moviesList: this.state.moviesList.push(this._inputElement.value)
        })
      }
    }

    render(){
      return (
          <div>
            <form onSubmit={this.addingMovieToList}>
              <input
                placeholder = "add a movie"
                ref={(a) => this._inputElement = a}
                className="addmoviebar"
                type="text"
               />
               <button type="submit">submit</button>
            </form>
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