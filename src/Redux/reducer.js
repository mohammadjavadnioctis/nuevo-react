
const initState = {
    items : [],
    loading: true,
    error: null
}


const employeesReducer = (state = initState, action) => {
   
    switch (action.type) {
        case 'FETCH_EMPLOYEE_INFO':
            return {
                ...state,
                loading : true,
                error: null,
            }
        case 'FETCH_EMPLOYEE_SUCCESS':
            return {
                ...state,
                loading : false,
                error: null,
                items: action.payload
            }
        case 'FETCH_EMPLOYEE_FAILURE':
            return {
                ...state,
                loading : false,
                error: action.error,
            }
        default:
            return state;
    }

}

export default employeesReducer;