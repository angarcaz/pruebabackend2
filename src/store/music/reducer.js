import {
    GET_MUSIC,
    GET_MUSIC_OK,
    GET_MUSIC_FAIL,

    GET_PRODUCTS,
    GET_PRODUCTS_OK,
    GET_PRODUCTS_FAIL
} from "./actionTypes"

const initialState = {
    loading: false,
    artistDetails: [],
    error: {
        message: ""
    },
    loadingProducts: false, 
    products:[]
}

export default function MusicReducer(state = initialState, action){

    switch(action.type) {
        case GET_MUSIC:
            state = {...state, loading: true}
        break
        case GET_MUSIC_OK:
            state = {...state, loading: false, artistDetails: action.payload}
        break 
        case GET_MUSIC_FAIL:
            state = {...state, loading: false, artistDetails: [], error: {message: action.payload}}
        break
        case GET_PRODUCTS: 
            state = {...state, loadingProducts: true}
        break;
        case GET_PRODUCTS_OK:
            state = {...state, loadingProducts: false, products: action.payload}
        break;
        case GET_PRODUCTS_FAIL:
            state= {...state, loadingProducts:false, error: {message: action.payload}}
        break;
        default:
            break
    }
    return state
}