import {
    POST_PARAMS,
    POST_PARAMS_OK,
    POST_PARAMS_FAIL
} from "./actionTypes"

//Pasamos la informacion de autotentificacion:
export function actionPostAuth(authData) {
    return {
        type: POST_PARAMS,
        payload: authData
    }
}
//Obtenemos la info, token
export function actionPostAuthOk(authDetails) {
    return {
        type: POST_PARAMS_OK,
        payload: authDetails
    }
}

export function actionPostAuthFail(error) {
    return {
        type: POST_PARAMS_FAIL,
        payload: error
    }
}

export function postParams(authParams){
    return async (dispatch) => {
        dispatch(actionPostAuth(authParams))
        try{
            const response = await fetch('https://accounts.spotify.com/api/token', authParams)
            const data = await response.json();
            dispatch(actionPostAuthOk(data))
        } catch(error){
            dispatch(actionPostAuthFail(error))
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