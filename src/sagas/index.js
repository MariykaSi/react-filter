import { all, fork } from "redux-saga/effects";

import globalSaga from "./global";
import usersSaga from "./users";

const sagas = [globalSaga, usersSaga];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
