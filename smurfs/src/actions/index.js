import axios from 'axios';

//fetch
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

//post
export const POST_SMURF_START ='POST_SMURF_START';
export const POST_SMURF_SUCCESS ='POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE ='POST_SMURF_FAILURE';




export const getSmurf = () =>{
    return dispatch => {
    dispatch({
        type: FETCH_SMURF_START
    });
  
    axios
    .get("http://localhost:3333/smurfs")
    .then( res => 
      {
              console.log("Response: ", res.data)
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data})
      }
    )
  .catch(err =>{ 
      console.log(err);
      dispatch({ type: FETCH_SMURF_FAILURE, payload: err /* `${err.response.status} ${err.response.status}`*/});
  });
  }}

  export const postSmurf = value =>{
    return dispatch => {
    dispatch({
        type: POST_SMURF_START, payload: value
        //Here we are telling our app that we are going into a fetching state
    });
  
    axios
    .post("http://localhost:3333/smurfs",{
        name: "",
        age: "",
        height: "",
        id:""
    })
    .then( res => 
      {
              console.log("Response: ", res.data)
        dispatch({ type: POST_SMURF_SUCCESS, payload: res.data})
      }
    )
  .catch(err =>{ 
      console.log(err);
      dispatch({ type: POST_SMURF_FAILURE, payload: err /* `${err.response.status} ${err.response.status}`*/});
  });
  }}
  
  
