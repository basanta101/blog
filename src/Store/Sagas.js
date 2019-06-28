import {all} from 'redux-saga/effects';
import userSaga from '../Login/Saga';
import homepageSaga from '../Components/Homepage/Saga'

export default function* rootSagas(){
   yield all([
       userSaga(),
       homepageSaga()
   ]);

}