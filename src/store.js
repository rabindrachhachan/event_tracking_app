import { createStore } from 'redux';
import reducer from './reducers';
import { persistStore } from 'redux-persist';
export default function configureStore(initialState, callback) {
    const store = createStore(reducer, initialState,);
    const persistor = persistStore(store, null, () => {
        callback();
    });
    return {
        store,
        persistor,
    };
}
