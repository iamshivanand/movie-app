// {
//     type:'ADD_MOVIES',
//     movies:[m1,m2,m3]
// }

//these variables are called Action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES="ADD_FAVOURITES";
export const UN_FAVOURITE="UN_FAVOURITE";
export const SHOW_FAVOURITES="SHOW_FAVOURITES";
export const ADD_MOVIE_TO_LIST="ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT="ADD_SEARCH_RESULT";


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
export function addMovieToList(movie){
    return{
        type:ADD_MOVIE_TO_LIST,
        movie
    }
}
export function handleMovieSearch(movie){
    const url=`http://www.omdbapi.com/?apikey=e9a0c5be&t=${movie}`;
    return function(dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(movie =>{
            console.log("movie",movie);
    
            //dispatch an action
            dispatch(addMovieSearchResult(movie))
        })
    }
   
}
export function addMovieSearchResult (movie){
    return{
        type:ADD_SEARCH_RESULT,
        movie
    };
}
