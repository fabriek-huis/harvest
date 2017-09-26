import { takeEvery, all } from 'redux-saga/effects';
import apollo from './apollo/sagas'
import notifications from './notifications/sagas'
import mining from './mining/sagas'

export default function* rootSaga() {
  yield all([
    apollo(),
    notifications(),
    mining()
  ]);
}