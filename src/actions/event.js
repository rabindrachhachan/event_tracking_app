import * as types from './types';
export function addToTrackList(item){
    return {
        type: types.ADD_TO_TRACKLIST,
        payload: {
            item:item
        }
    }
}

export function removeFromTrackList(item){
    return {
        type: types.REMOVE_FROM_TRACKLIST,
        payload: {
            item:item
        }
    }
}

export function setListOrder(order){
    return {
        type: types.SET_LIST_ORDER,
        payload: {
            order:order
        }
    }
}

export function reset(){
    return {
        type: types.RESET,
    }
}

export function setTrackList(data){
    return {
        type: types.SET_TRACK_LIST,
        payload: {
            data:data
        }
    }
}