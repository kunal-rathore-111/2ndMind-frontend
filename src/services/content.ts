import { get, post, del, patch } from './api';

export function getDashboard() {
  return get('/user/dashboard');
}

export function addContent(payload: any) {
  return post('/user/content/add', payload);
}

export function deleteContent(contentId: string) {
  return del(`/user/content/delete/${contentId}`);
}

export function updateContent(contentId: string, payload: any) {
  return patch(`/user/content/update/${contentId}`, payload);
}

export function shareLink(share: boolean) {
  return post('/user/share', { share });
}

export function getPublic(hash: string) {
  return get(`/user/public/${hash}`);
}
