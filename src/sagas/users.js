import {takeEvery, call, fork} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api/users';

function* getUsers() {
    try{
        const result = yield call(api.getUsers);
        console.log(result);

    }
    catch(e){

    }
}

function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [
    fork(watchGetUsersRequest)
]

export default usersSagas;
