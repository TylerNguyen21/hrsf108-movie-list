class App extends React.Components {
    constructor(props) {
        super(props);
        this.state{
            moviesList: []
        }
    }
    render(){
      return (
        <div>
            <Movies title = this.state.moviesList />
        </div>
      )
    }
}

export default App;