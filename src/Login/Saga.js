import { put, takeEvery, call } from 'redux-saga/effects';
import actions from './Actions';
import axios from 'axios';
import Cookies from 'js-cookie';


//worker saga
function* userLogin(action) {
    //console.log('inside the saga', action.payload);
    const res = yield call(axios.get, `http://www.json-generator.com/api/json/get/cliWWynsBK?indent=2`);
    const { email, password} = action.payload;
    res.data.forEach(item => {
        if(item.username === email && item.password === password){
            Cookies.set("token", email);
        }
    })
    if(!!Cookies.get("token")){
        yield put(actions.storeUser({validuser: true}))
    }
}
    





//watcher saga

export default function* watcherSaga() {
    yield takeEvery(actions.USER_LOGIN, userLogin)
}

// console.log('inside the saga', action.payload );
// axios.get(`http://www.json-generator.com/api/json/get/cliWWynsBK?indent=2`)
//   .then(res => {
//     console.log("frpm api", res);
//     const { email, password,errmsg, validuser } = action.payload;
//     res.data.forEach(item => {
//       if (item.username === email && item.password === password) {
//         // this.setState({
//         //   validuser: true,
//         // })
//         //validuser: true;
//         Cookies.set("token",email);
//         //put(actions.storeUser(email))

//       }
//       //else{alert("invalid user")}
//     })
//   }).catch(err => {
//     console.log(err);
//   })