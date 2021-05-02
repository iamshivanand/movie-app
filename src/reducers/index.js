import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_FAVOURITES,
  UN_FAVOURITE,
  SHOW_FAVOURITES,
  ADD_MOVIE_TO_LIST,
  ADD_SEARCH_RESULT,
} from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  ShowFavourites: false,
};

export function movies(state = initialMoviesState, action) {
  //   if (action.type === ADD_MOVIES) {
  //     return {
  //         ...state,
  //         list:action.movies
  //     }
  //   }
  //   return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case UN_FAVOURITE:
      return {
        ...state,
        favourites: [
          ...state.favourites.filter(function (movie) {
            return movie !== action.movie;
          }),
        ],
      };
    case SHOW_FAVOURITES:
      return {
        ...state,
        ShowFavourites: action.value,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
  showSearchResult: false,
};
export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResult: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResult: false,
      };
    default:
      return state;
  }
}

// const initialRootState = {
//   movies: initialMoviesState,
//   search: initialSearchState,
// };

// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action)
//   };
// }
export default combineReducers({
  movies,
  search,
});
