import { post } from './api';

export function signIn(data: { email: string; password: string }) {
  return post('/sign/sign-in', data);
}

export function signUp(data: { username: string; email: string; password: string }) {
  return post('/sign/sign-up', data);
}
