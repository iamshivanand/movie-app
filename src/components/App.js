import React from "react";
import data from "../data.js";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, ShowFavourites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      console.log("Updated Succesfully");
      this.forceUpdate();
    });
    //this force update will rerender our whole app component

    //make an api call

    //dispatch action
    store.dispatch(addMovies(data));

    console.log("State", store.getState());
  }
  isFavourite = (movie) => {
    const { favourites } = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if (index !== -1) {
      //movie found
      return true;
    }
    return false;
  };

  onChangeTab = (value) => {
    const { store } = this.props;
    store.dispatch(ShowFavourites(value));
  };

  render() {
    const { list, favourites, ShowFavourites } = this.props.store.getState();
    console.log("Render", this.props.store.getState());
    const displayMovies = ShowFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar />
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
                dispatch={this.props.store.dispatch}
                isFavourite={this.isFavourite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
