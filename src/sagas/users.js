import { takeEvery, put, call, delay } from "redux-saga/effects";
import { requestStart, requestEnd } from "../actions/global";
import { getUsersSuccess, getUsersError } from "../actions/users";
import { GET_USERS_START } from "../constants/actions/users";
import { getUsers } from "../api";

function* requestTemplates() {
  try {
    yield put(requestStart());
    const response = yield call(getUsers);
    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersError(error.message));
  } finally {
    yield delay(400);
    yield put(requestEnd());
  }
}

export default function* watchSaga() {
  yield takeEvery(GET_USERS_START, requestTemplates);
}
