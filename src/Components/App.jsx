import MovieList from './MovieList.js'

class App extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            moviesList: [
            'pokemon',
            'The Dark Knight'
            ]
        }
    }
    render(){
      return (
        <div>
            <MovieList movieList={this.state.moviesList}/>
        </div>
      )
    }
};

export default App;