import * as types from '../actions/types';
import _ from 'lodash';
import{ addToList,removedFromList} from '../utils/helper'

const initialState = {
    data: [],
    order : null,
    added: false,
    removed: false,
    stringifyData : '[]',
};


const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_TRACKLIST:
            let data = addToList(state.data,action.payload['item']);
            return {
                ...state,
                data: data,
                added: true,
                stringifyData: JSON.stringify(data)
            };

        case types.REMOVE_FROM_TRACKLIST:
            data = addToList(state.data,action.payload['item'])
        return {
            ...state,
            data: data,
            removed: true,
            stringifyData: JSON.stringify(data)
        };

        case types.SET_LIST_ORDER:
        return {
            ...state,
            order: action.payload['order'],
        };

        case types.RESET:
        return {
            ...state,
            added: false,
            removed: false,
        };

        case types.SET_TRACK_LIST:
        return {
            ...state,
            data: action.payload['data'],
            added: true,
        };

        default:
            return state;
    }
};

export default eventReducer;