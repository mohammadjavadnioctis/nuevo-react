

import Axios from 'axios'
import { bindActionCreators } from 'redux'


export const fetchSearchResults = (query) => async (dispatch, getState) => {
    dispatch({type: "SEARCH_QUERY"})
    // if (query.option){
    try {
        const response = await Axios.get(`https://5f7335deb63868001615f557.mockapi.io/list?${query.type}=${query.string}`)
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
    

// }



// if(!query.option){
//     if(query.string == 'Please Select')
//     return
//     try {
//         const response = await Axios.get(`https://5f7335deb63868001615f557.mockapi.io/list?${query.type}=${query.string}`)
//         console.log(response)
//         dispatch({
//             type: 'FETCH_SEARCH_SUCCESS',
//             payload: response.data,
//         })

//     } catch (error) {
//         dispatch({
//             type:'FETCH_SEARCH_FAILURE',
//             error: error
//         })
//     }
// }







}


 
