import * as types from '../types'

const initialState = {
    data: [],
    error: 0,
    total: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.Dish_get:
            return {
                ...state,
                data: action.data,
                error: action.error,
                total: action.data.length
            }
        default:
            return state
    }
}

export default reducer
