

import Axios from 'axios'
import { bindActionCreators } from 'redux'


export const fetchSearchResults = (queryString) => async (dispatch, getState) => {
    dispatch({type: "SEARCH_QUERY"})

    try {
        const response = await Axios.get(`https://5f7335deb63868001615f557.mockapi.io/list?search=${queryString}`)
        console.log(response)
        dispatch({
            type: 'FETCH_SEARCH_SUCCESS',
            payload: response.data,
        })

    } catch (error) {
        dispatch({
            type:'FETCH_SEARCH_FAILURE',
            error: error
        })
    }


}

 
