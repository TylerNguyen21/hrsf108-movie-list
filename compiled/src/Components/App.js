import MovieList from './MovieList.js';

class App extends React.Component {
    constructor(props) {
        super(props), this.state = {
            moviesList: ['pokemon', 'The Dark Knight']
        };
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(MovieList, { movieList: this.state.moviesList })
        );
    }
};

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXNMaXN0IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0Qjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUM5QkMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOLEdBQ0EsS0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHdCQUFZLENBQ1osU0FEWSxFQUVaLGlCQUZZO0FBREgsU0FEYjtBQU9IO0FBQ0RDLGFBQVE7QUFDTixlQUNFO0FBQUE7QUFBQTtBQUNJLGdDQUFDLFNBQUQsSUFBVyxXQUFXLEtBQUtGLEtBQUwsQ0FBV0MsVUFBakM7QUFESixTQURGO0FBS0Q7QUFoQjZCLENBaUJqQzs7QUFFRCxlQUFlTixHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi9Nb3ZpZUxpc3QuanMnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpLFxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbW92aWVzTGlzdDogW1xuICAgICAgICAgICAgJ3Bva2Vtb24nLFxuICAgICAgICAgICAgJ1RoZSBEYXJrIEtuaWdodCdcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TW92aWVMaXN0IG1vdmllTGlzdD17dGhpcy5zdGF0ZS5tb3ZpZXNMaXN0fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=