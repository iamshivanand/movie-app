// {
//     type:'ADD_MOVIES',
//     movies:[m1,m2,m3]
// }

//these variables are called Action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES="ADD_FAVOURITES";
export const UN_FAVOURITE="UN_FAVOURITE";
export const SHOW_FAVOURITES="SHOW_FAVOURITES";

//these functions are called actions creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  }
}
export function addFavourties(movie){
    return {
        type:ADD_FAVOURITES,
        movie
    }
}
export function unFavourite(movie){
    return{
        type:UN_FAVOURITE,
        movie
    }
}
export function ShowFavourites(value){
    return{
        type:SHOW_FAVOURITES,
        value
    }
}
