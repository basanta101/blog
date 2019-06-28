import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import userReducer from '../Login/Reducer';
import homepageReducer from '../Components/Homepage/Reducer'
import rootSagas from './Sagas'
const rootreducer = combineReducers({
    user: userReducer,
    homepage: homepageReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware= createSagaMiddleWare();
const store = createStore(rootreducer, composeEnhancer(applyMiddleware(sagaMiddleware)));
store.subscribe(()=> console.log("store here", store.getState()));
sagaMiddleware.run(rootSagas)

export default store;