import Movie from './Movies.js';

var MovieList = ({ movieList }) => React.createElement(
    'div',
    null,
    movieList.map(movie => {
        return React.createElement(Movie, { title: movie });
    })
);

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWUiLCJNb3ZpZUxpc3QiLCJtb3ZpZUxpc3QiLCJtYXAiLCJtb3ZpZSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixhQUFsQjs7QUFFQSxJQUFJQyxZQUFZLENBQUMsRUFBQ0MsU0FBRCxFQUFELEtBQ1o7QUFBQTtBQUFBO0FBQ0NBLGNBQVVDLEdBQVYsQ0FBZUMsS0FBRCxJQUFXO0FBQUUsZUFBUSxvQkFBQyxLQUFELElBQU8sT0FBT0EsS0FBZCxHQUFSO0FBQWlDLEtBQTVEO0FBREQsQ0FESjs7QUFNQSxlQUFlSCxTQUFmIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZSBmcm9tICcuL01vdmllcy5qcydcblxudmFyIE1vdmllTGlzdCA9ICh7bW92aWVMaXN0fSkgPT4gKFxuICAgIDxkaXY+XG4gICAge21vdmllTGlzdC5tYXAoKG1vdmllKSA9PiB7IHJldHVybiAoPE1vdmllIHRpdGxlPXttb3ZpZX0gLz4pfSl9XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDsiXX0=