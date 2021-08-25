
const initState = {
    items : [],
    loading: true,
    error: null
}


const searchReducer = ( state = initState, action ) => {
   
    switch (action.type) {
        case 'SEARCH_QUERY':
            return {
                ...state,
                loading : true,
                error: null,
            }
        case 'FETCH_SEARCH_SUCCESS':
            return {
                ...state,
                loading : false,
                error: null,
                items: action.payload
            }
        case 'FETCH_SEARCH_FAILURE':
            return {
                ...state,
                loading : false,
                error: action.error,
            }
        default:
            return state;
    }

}

export default searchReducer;