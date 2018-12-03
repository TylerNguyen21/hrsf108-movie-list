import MovieList from './MovieList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';

class App extends React.Component {
    constructor(props) {
        super(props), this.state = {
            moviesList: ['pokemon', 'The Dark Knight', 'Dickson']
        };
        this.addingMovieToList.bind(this);
    }
    findingMovie(title) {
        if (title === undefined) {
            return;
        }
        this.setState({
            moviesList: this.state.moviesList.filter(movie => movie.includes(title))
        });
    }

    addingMovieToList(val) {
        var newMovieList = this.state.moviesList;
        newMovieList.push(val);
        this.setState({
            moviesList: newMovieList
        });
        console.log(this.state.moviesList);
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(AddMovie, { add: this.addingMovieToList.bind(this) }),
            React.createElement(
                'div',
                null,
                React.createElement(
                    'nav',
                    { className: 'navbar' },
                    React.createElement(Search, { findMovie: this.findingMovie.bind(this) })
                )
            ),
            React.createElement(
                'div',
                null,
                React.createElement(MovieList, { movieList: this.state.moviesList })
            )
        );
    }
};

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiU2VhcmNoIiwiQWRkTW92aWUiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllc0xpc3QiLCJhZGRpbmdNb3ZpZVRvTGlzdCIsImJpbmQiLCJmaW5kaW5nTW92aWUiLCJ0aXRsZSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiZmlsdGVyIiwibW92aWUiLCJpbmNsdWRlcyIsInZhbCIsIm5ld01vdmllTGlzdCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsYUFBbkI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGVBQXJCOztBQUVBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU4sR0FDQSxLQUFLQyxLQUFMLEdBQWE7QUFDVEMsd0JBQVksQ0FDWixTQURZLEVBRVosaUJBRlksRUFHWixTQUhZO0FBREgsU0FEYjtBQVFBLGFBQUtDLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QjtBQUNIO0FBQ0RDLGlCQUFhQyxLQUFiLEVBQW9CO0FBQ2pCLFlBQUdBLFVBQVVDLFNBQWIsRUFBd0I7QUFDcEI7QUFDSDtBQUNELGFBQUtDLFFBQUwsQ0FBYztBQUNiTix3QkFBWSxLQUFLRCxLQUFMLENBQVdDLFVBQVgsQ0FBc0JPLE1BQXRCLENBQThCQyxLQUFELElBQVdBLE1BQU1DLFFBQU4sQ0FBZUwsS0FBZixDQUF4QztBQURDLFNBQWQ7QUFHRjs7QUFFREgsc0JBQWtCUyxHQUFsQixFQUF1QjtBQUNuQixZQUFJQyxlQUFlLEtBQUtaLEtBQUwsQ0FBV0MsVUFBOUI7QUFDQVcscUJBQWFDLElBQWIsQ0FBa0JGLEdBQWxCO0FBQ0EsYUFBS0osUUFBTCxDQUFjO0FBQ1ZOLHdCQUFZVztBQURGLFNBQWQ7QUFHQUUsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLZixLQUFMLENBQVdDLFVBQXZCO0FBQ0g7O0FBRURlLGFBQVE7QUFDTixlQUNJO0FBQUE7QUFBQTtBQUNFLGdDQUFDLFFBQUQsSUFBVSxLQUFLLEtBQUtkLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUFmLEdBREY7QUFFRTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxRQUFmO0FBQ0Esd0NBQUMsTUFBRCxJQUFRLFdBQVcsS0FBS0MsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBbkI7QUFEQTtBQURKLGFBRkY7QUFPRTtBQUFBO0FBQUE7QUFDSSxvQ0FBQyxTQUFELElBQVcsV0FBVyxLQUFLSCxLQUFMLENBQVdDLFVBQWpDO0FBREo7QUFQRixTQURKO0FBYUQ7QUE1QzZCLENBNkNqQzs7QUFFRCxlQUFlTixHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi9Nb3ZpZUxpc3QuanMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaC5qcyc7XG5pbXBvcnQgQWRkTW92aWUgZnJvbSAnLi9BZGRNb3ZpZS5qcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpLFxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbW92aWVzTGlzdDogW1xuICAgICAgICAgICAgJ3Bva2Vtb24nLFxuICAgICAgICAgICAgJ1RoZSBEYXJrIEtuaWdodCcsXG4gICAgICAgICAgICAnRGlja3NvbidcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZGluZ01vdmllVG9MaXN0LmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGZpbmRpbmdNb3ZpZSh0aXRsZSkge1xuICAgICAgIGlmKHRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgIH1cbiAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbW92aWVzTGlzdDogdGhpcy5zdGF0ZS5tb3ZpZXNMaXN0LmZpbHRlcigobW92aWUpID0+IG1vdmllLmluY2x1ZGVzKHRpdGxlKSlcbiAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZGluZ01vdmllVG9MaXN0KHZhbCkge1xuICAgICAgICB2YXIgbmV3TW92aWVMaXN0ID0gdGhpcy5zdGF0ZS5tb3ZpZXNMaXN0XG4gICAgICAgIG5ld01vdmllTGlzdC5wdXNoKHZhbClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtb3ZpZXNMaXN0OiBuZXdNb3ZpZUxpc3RcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5tb3ZpZXNMaXN0KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj4gIFxuICAgICAgICAgICAgPEFkZE1vdmllIGFkZD17dGhpcy5hZGRpbmdNb3ZpZVRvTGlzdC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgPFNlYXJjaCBmaW5kTW92aWU9e3RoaXMuZmluZGluZ01vdmllLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVMaXN0PXt0aGlzLnN0YXRlLm1vdmllc0xpc3R9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=