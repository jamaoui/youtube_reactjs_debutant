export const INITIAL_VALUES = {
    error: undefined,
    loading: true,
    productList: []
}

/*
* action: {
*   type: '',
*   ...,
* ....
* }
* */
export const productReducer = (state, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state,
                error: action.payload.hasError
            }
        case 'LOADING':
            return {
                ...state,
                loading: action.payload.isLoading
            }
        case 'PRODUCTS':
            return {
                ...state,
                productList: action.payload.collection
            }
        default:
            return state
    }
}