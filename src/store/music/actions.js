import axios from 'axios'
import {
    GET_MUSIC,
    GET_MUSIC_OK,
    GET_MUSIC_FAIL,

    GET_PRODUCTS,
    GET_PRODUCTS_OK,
    GET_PRODUCTS_FAIL
} from "./actionTypes"


export function actionGetMusic(dataAccess) {
    return {
        type: GET_MUSIC,
        payload: dataAccess
    }
}

export function actionGetMusicOk(artistDetails) {
    return {
        type: GET_MUSIC_OK,
        payload: artistDetails
    }
}

export function actionGetMusicFail(error) {
    return {
        type: GET_MUSIC_FAIL,
        payload: error
    }
}

export function getMusic(accessData){
    return async (dispatch) => {
        dispatch(actionGetMusic(accessData))
        try{
            const answer = await fetch('https://api.spotify.com/v1/search?q=$rosalia&type=artist', accessData)
            const res = await answer.json();
            dispatch(actionGetMusicOk(res.artists.items))
        } catch(error){
            dispatch(actionGetMusicFail(error))
        }
    }
}

// export function postParams(authParams){
//     return async (dispatch) => {
//         dispatch(actionPostAuth(authParams))
//         try{
//             const response = await fetch('https://accounts.spotify.com/api/token', authParams)
//             .then(result => result.json())
//             .then(res => res)
//             dispatch(actionPostAuthOk(response.res))
//         } catch(error){
//             dispatch(actionPostAuthFail(error))
//         }
//     }
// }

export function actionGetProducts(){
    return {
        type: GET_PRODUCTS
    }
}

export function actionGetProductsOk(products){
    return {
        type: GET_PRODUCTS_OK,
        payload: products
    }
}

export function actionGetProductsFail(error){
    return {
        type: GET_PRODUCTS_FAIL,
        payload: error
    }
}


export function getProducts(){
    return async (dispatch)=>{
        dispatch(actionGetProducts())
        try {
            const response = await axios.get("/database.json/newProducts")
            dispatch(actionGetProductsOk(response.data))
        } catch(error){
            dispatch(actionGetProductsFail(error))
        }
    }
}