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
        this.setState({
            moviesList: this.state.moviesList.push(val)
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiU2VhcmNoIiwiQWRkTW92aWUiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllc0xpc3QiLCJhZGRpbmdNb3ZpZVRvTGlzdCIsImJpbmQiLCJmaW5kaW5nTW92aWUiLCJ0aXRsZSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiZmlsdGVyIiwibW92aWUiLCJpbmNsdWRlcyIsInZhbCIsInB1c2giLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixhQUFuQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsZUFBckI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDOUJDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTixHQUNBLEtBQUtDLEtBQUwsR0FBYTtBQUNUQyx3QkFBWSxDQUNaLFNBRFksRUFFWixpQkFGWSxFQUdaLFNBSFk7QUFESCxTQURiO0FBUUEsYUFBS0MsaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCO0FBQ0g7QUFDREMsaUJBQWFDLEtBQWIsRUFBb0I7QUFDakIsWUFBR0EsVUFBVUMsU0FBYixFQUF3QjtBQUNwQjtBQUNIO0FBQ0QsYUFBS0MsUUFBTCxDQUFjO0FBQ2JOLHdCQUFZLEtBQUtELEtBQUwsQ0FBV0MsVUFBWCxDQUFzQk8sTUFBdEIsQ0FBOEJDLEtBQUQsSUFBV0EsTUFBTUMsUUFBTixDQUFlTCxLQUFmLENBQXhDO0FBREMsU0FBZDtBQUdGOztBQUVESCxzQkFBa0JTLEdBQWxCLEVBQXVCO0FBQ25CLGFBQUtKLFFBQUwsQ0FBYztBQUNWTix3QkFBWSxLQUFLRCxLQUFMLENBQVdDLFVBQVgsQ0FBc0JXLElBQXRCLENBQTJCRCxHQUEzQjtBQURGLFNBQWQ7QUFHSDs7QUFFREUsYUFBUTtBQUNOLGVBQ0k7QUFBQTtBQUFBO0FBQ0UsZ0NBQUMsUUFBRCxJQUFVLEtBQUssS0FBS1gsaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCLENBQWYsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFFBQWY7QUFDQSx3Q0FBQyxNQUFELElBQVEsV0FBVyxLQUFLQyxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUFuQjtBQURBO0FBREosYUFGRjtBQU9FO0FBQUE7QUFBQTtBQUNJLG9DQUFDLFNBQUQsSUFBVyxXQUFXLEtBQUtILEtBQUwsQ0FBV0MsVUFBakM7QUFESjtBQVBGLFNBREo7QUFhRDtBQXpDNkIsQ0EwQ2pDOztBQUVELGVBQWVOLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuL01vdmllTGlzdC5qcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoLmpzJztcbmltcG9ydCBBZGRNb3ZpZSBmcm9tICcuL0FkZE1vdmllLmpzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyksXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtb3ZpZXNMaXN0OiBbXG4gICAgICAgICAgICAncG9rZW1vbicsXG4gICAgICAgICAgICAnVGhlIERhcmsgS25pZ2h0JyxcbiAgICAgICAgICAgICdEaWNrc29uJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkaW5nTW92aWVUb0xpc3QuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgZmluZGluZ01vdmllKHRpdGxlKSB7XG4gICAgICAgaWYodGl0bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICByZXR1cm47XG4gICAgICAgfVxuICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb3ZpZXNMaXN0OiB0aGlzLnN0YXRlLm1vdmllc0xpc3QuZmlsdGVyKChtb3ZpZSkgPT4gbW92aWUuaW5jbHVkZXModGl0bGUpKVxuICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkaW5nTW92aWVUb0xpc3QodmFsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbW92aWVzTGlzdDogdGhpcy5zdGF0ZS5tb3ZpZXNMaXN0LnB1c2godmFsKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PiAgXG4gICAgICAgICAgICA8QWRkTW92aWUgYWRkPXt0aGlzLmFkZGluZ01vdmllVG9MaXN0LmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgICAgICA8U2VhcmNoIGZpbmRNb3ZpZT17dGhpcy5maW5kaW5nTW92aWUuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZUxpc3Q9e3RoaXMuc3RhdGUubW92aWVzTGlzdH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ==