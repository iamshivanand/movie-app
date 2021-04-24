import { ADD_MOVIES, ADD_FAVOURITES, UN_FAVOURITE,SHOW_FAVOURITES } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  ShowFavourites:false
};

export default function movies(state = initialMoviesState, action) {
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
        favourites:[...state.favourites.filter(function(movie){
            return movie!==action.movie;
        })]
      };
     case SHOW_FAVOURITES:
         return{
             ...state,
             ShowFavourites:action.value
         } 
    default:
      return state;
  }
}
