import * as types from './types';

export function setUserName(userName){
    return {
        type: types.SET_USERNAME,
        payload: {
            userName
        }
    }
}
