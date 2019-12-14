import axios from 'axios';

//exports
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getNYT = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
    .get(`https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=xcuWu0qYddQAl811Z0yuVoZgjFtJp9Ix`)
    .then(res => {
        console.log(res);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
}