import {takeEvery, takeLatest, take, call, fork, put} from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers(){
    try{
        const result = yield call(api.getUsers);
        // console.log(result);
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }));

    }catch(e){
        //
    }
}

function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

function* createUser(action){
    try{
        yield call(api.createUser, {firstName: action.payload.firstName, lastName: action.payload.lastName})
        yield(getUsers)
    }catch(e){

    }
}

function* watchDeleteUserRequest() {
    while(true){
        const action = yield take(action.Types.DELETE_USER_REQUEST);
    }
}

function* watchCreateUserRequest(){
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
];

export default usersSagas;