
import Axios from 'axios'
import { bindActionCreators } from 'redux'


export const fetchCardsInfo = () => async (dispatch, getState) => {
    dispatch({type: "FETCH_EMPLOYEE_INFO"})

    try {
        const response = await Axios.get('https://5f7335deb63868001615f557.mockapi.io/list')
        console.log(response)
        dispatch({
            type: 'FETCH_EMPLOYEE_SUCCESS',
            payload: response.data,
        })

    } catch (error) {
        dispatch({
            type:'FETCH_EMPLOYEE_FAILURE',
            error: error
        })
    }


}








// export const fetchCardsInfo = () => {
//     return async (dispatch, getState) =>{

//         const response = await Axios.get('https://5f7335deb63868001615f557.mockapi.io/list')
        
//         console.log('here is the respon',response)

//         dispatch({
//             type:"FETCH_EMPLOYEE_INFO",
//             payload: response.data
//         })

//     }
// }



// export const fetchCardsInfo = async () => {

//    const response = await Axios.get('https://5f7335deb63868001615f557.mockapi.io/list')
    

//     return {
//         type: 'FETCH_EMPLOYEE_INFO',
//         payload: response.data
//     }
// }