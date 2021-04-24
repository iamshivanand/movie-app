// {
//     type:'ADD_MOVIES',
//     movies:[m1,m2,m3]
// }

//these variables are called Action types
export const ADD_MOVIES = "ADD_MOVIES";


//these functions are called actions creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  }
}
