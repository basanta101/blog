import { put, takeEvery, call} from 'redux-saga/effects';
import actions from './Actions'

function* workerSaga1(action){
    debugger;
    console.log("inside the homepage reducer nsbxjhwbxjhwb", action.payload);
    // yield put(actions.updateData(action.payload)) ;
    

}




export default function* watcherSaga1(){
    yield takeEvery(actions.getData, workerSaga1)
}