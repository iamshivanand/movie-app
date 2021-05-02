import React from "react";
import {connect} from 'react-redux';
import data from "../data.js";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, ShowFavourites } from "../actions";
// import { StoreContext } from "../index";

class App extends React.Component {
  componentDidMount() {
    console.log("hello");
    const store  = this.props;

    // store.subscribe(() => {
    //   console.log("Updated Succesfully");
    //   this.forceUpdate();
    // });
    //this force update will rerender our whole app component

    //make an api call

    //dispatch action
    store.dispatch(addMovies(data));

    // console.log("State", store.getState());
  }

  isFavourite = (movie) => {
    const { movies } = this.props;

    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      //movie found
      return true;
    }
    return false;
  };

  onChangeTab = (value) => {
    const  store  = this.props;
    store.dispatch(ShowFavourites(value));
  };

  render() {
    const { movies, search } = this.props;
    console.log("Render", this.props);
    const { list, favourites, ShowFavourites } = movies;

    const displayMovies = ShowFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${ShowFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${ShowFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isFavourite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps(state){
  return {
    movies: state.movies,
    search: state.movies,
  };
}
const connectedAppComponent=connect(mapStateToProps)(App);
export default connectedAppComponent;
