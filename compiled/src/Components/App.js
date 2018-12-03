import MovieList from './MovieList.js';
import Search from './Search.js';
//import AddMovie from './AddMovie.js';
class App extends React.Component {
    constructor(props) {
        super(props), this.state = {
            moviesList: ['pokemon', 'The Dark Knight']
        };
        this._inputElement = '';
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

    addingMovieToList(e) {
        e.preventDefault();
        console.log(this._inputElement);
        if (this._inputElement.value !== '') {
            this.setState({
                moviesList: this.state.moviesList.push(this._inputElement.value)
            });
        }
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                { onSubmit: this.addingMovieToList },
                React.createElement('input', {
                    placeholder: 'add a movie',
                    ref: a => this._inputElement = a,
                    className: 'addmoviebar',
                    type: 'text'
                }),
                React.createElement(
                    'button',
                    { type: 'submit' },
                    'submit'
                )
            ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiU2VhcmNoIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXNMaXN0IiwiX2lucHV0RWxlbWVudCIsImFkZGluZ01vdmllVG9MaXN0IiwiYmluZCIsImZpbmRpbmdNb3ZpZSIsInRpdGxlIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJmaWx0ZXIiLCJtb3ZpZSIsImluY2x1ZGVzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwicHVzaCIsInJlbmRlciIsImEiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixhQUFuQjtBQUNBO0FBQ0EsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDOUJDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTixHQUNBLEtBQUtDLEtBQUwsR0FBYTtBQUNUQyx3QkFBWSxDQUNaLFNBRFksRUFFWixpQkFGWTtBQURILFNBRGI7QUFPQSxhQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsYUFBS0MsaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCO0FBQ0g7QUFDREMsaUJBQWFDLEtBQWIsRUFBb0I7QUFDakIsWUFBR0EsVUFBVUMsU0FBYixFQUF3QjtBQUNwQjtBQUNIO0FBQ0QsYUFBS0MsUUFBTCxDQUFjO0FBQ2JQLHdCQUFZLEtBQUtELEtBQUwsQ0FBV0MsVUFBWCxDQUFzQlEsTUFBdEIsQ0FBOEJDLEtBQUQsSUFBV0EsTUFBTUMsUUFBTixDQUFlTCxLQUFmLENBQXhDO0FBREMsU0FBZDtBQUdGOztBQUVESCxzQkFBa0JTLENBQWxCLEVBQXFCO0FBQ2pCQSxVQUFFQyxjQUFGO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksS0FBS2IsYUFBakI7QUFDQSxZQUFHLEtBQUtBLGFBQUwsQ0FBbUJjLEtBQW5CLEtBQTZCLEVBQWhDLEVBQW9DO0FBQ2xDLGlCQUFLUixRQUFMLENBQWM7QUFDWlAsNEJBQVksS0FBS0QsS0FBTCxDQUFXQyxVQUFYLENBQXNCZ0IsSUFBdEIsQ0FBMkIsS0FBS2YsYUFBTCxDQUFtQmMsS0FBOUM7QUFEQSxhQUFkO0FBR0g7QUFDRjs7QUFFREUsYUFBUTtBQUNOLGVBQ0k7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGtCQUFNLFVBQVUsS0FBS2YsaUJBQXJCO0FBQ0U7QUFDRSxpQ0FBYyxhQURoQjtBQUVFLHlCQUFNZ0IsQ0FBRCxJQUFPLEtBQUtqQixhQUFMLEdBQXFCaUIsQ0FGbkM7QUFHRSwrQkFBVSxhQUhaO0FBSUUsMEJBQUs7QUFKUCxrQkFERjtBQU9HO0FBQUE7QUFBQSxzQkFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBUEgsYUFERjtBQVVFO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFFBQWY7QUFDQSx3Q0FBQyxNQUFELElBQVEsV0FBVyxLQUFLZCxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUFuQjtBQURBO0FBREosYUFWRjtBQWVFO0FBQUE7QUFBQTtBQUNJLG9DQUFDLFNBQUQsSUFBVyxXQUFXLEtBQUtKLEtBQUwsQ0FBV0MsVUFBakM7QUFESjtBQWZGLFNBREo7QUFxQkQ7QUFyRDZCLENBc0RqQzs7QUFFRCxlQUFlTixHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi9Nb3ZpZUxpc3QuanMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaC5qcyc7XG4vL2ltcG9ydCBBZGRNb3ZpZSBmcm9tICcuL0FkZE1vdmllLmpzJztcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpLFxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbW92aWVzTGlzdDogW1xuICAgICAgICAgICAgJ3Bva2Vtb24nLFxuICAgICAgICAgICAgJ1RoZSBEYXJrIEtuaWdodCdcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbnB1dEVsZW1lbnQgPSAnJztcbiAgICAgICAgdGhpcy5hZGRpbmdNb3ZpZVRvTGlzdC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBmaW5kaW5nTW92aWUodGl0bGUpIHtcbiAgICAgICBpZih0aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICB9XG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1vdmllc0xpc3Q6IHRoaXMuc3RhdGUubW92aWVzTGlzdC5maWx0ZXIoKG1vdmllKSA9PiBtb3ZpZS5pbmNsdWRlcyh0aXRsZSkpXG4gICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRpbmdNb3ZpZVRvTGlzdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5faW5wdXRFbGVtZW50KTtcbiAgICAgICAgaWYodGhpcy5faW5wdXRFbGVtZW50LnZhbHVlICE9PSAnJykge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbW92aWVzTGlzdDogdGhpcy5zdGF0ZS5tb3ZpZXNMaXN0LnB1c2godGhpcy5faW5wdXRFbGVtZW50LnZhbHVlKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuYWRkaW5nTW92aWVUb0xpc3R9PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiYWRkIGEgbW92aWVcIlxuICAgICAgICAgICAgICAgIHJlZj17KGEpID0+IHRoaXMuX2lucHV0RWxlbWVudCA9IGF9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkbW92aWViYXJcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5zdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgICAgICA8U2VhcmNoIGZpbmRNb3ZpZT17dGhpcy5maW5kaW5nTW92aWUuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZUxpc3Q9e3RoaXMuc3RhdGUubW92aWVzTGlzdH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ==