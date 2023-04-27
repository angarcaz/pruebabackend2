import {
    POST_PARAMS,
    POST_PARAMS_OK,
    POST_PARAMS_FAIL
} from "./actionTypes"

const initialState = {
    loadingParams: false,
    authDetails: {},
    error: {
        message: ""
    }
}

export default function AccessReducer(state = initialState, action){

    switch(action.type) {
        
        case POST_PARAMS:
            state = {...state, loadingParams: true}
        break

        case POST_PARAMS_OK:
            state = {...state, loadingParams: false, authDetails: action.payload}
        break 

        case POST_PARAMS_FAIL:
            state = {...state, loadingParams: false, authDetails: {}, error: {message: action.payload}}
        break
        default:
            break
    }
    return state
}