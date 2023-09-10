export const FORM_REDUCER_DEFAULT_VALUES = {
    name:'',
    city:'',
    date: undefined,
    country:'MA',
    acceptConditions: false
}

/*
* action: {
*   type: '',
*   ...,
* ....
* }
* */
export const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case 'SELECT_CHANGE':
            return {
                ...state,
                [action.payload.name]: action.payload.selectedIndex
            }
        case 'CHECKBOX_CHANGE':
            return {
                ...state,
                [action.payload.name]: action.payload.checked
            }
        default:
            return state
    }
}