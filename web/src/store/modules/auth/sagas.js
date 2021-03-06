import { all, takeLatest, put, call } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';
import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/students');
  } catch (e) {
    toast.error('Revise seu e-mail e senha');
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'register', {
      name,
      email,
      password,
    });

    toast.success('Usuario cadastrado');
    history.push('/');
  } catch (e) {
    return toast.error('E-mail já cadastrado');
  }
}
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('persist/REHYDRATE', setToken),
]);
