import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import loginReducer from './loginReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfigEvent = {
    key: 'event',
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const persistConfigLogin ={
    key: 'login',
    storage: storage,
    stateReconciler: autoMergeLevel2,
}

const AppReducers = combineReducers({
    LoginReducer: persistReducer(persistConfigLogin, loginReducer),
    EventReducer: persistReducer(persistConfigEvent, eventReducer)
});

export default AppReducers;
