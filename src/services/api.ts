export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4001/app/v1';

export async function post(path: string, body: any) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function get(path: string) {
  const res = await fetch(`${API_BASE}${path}`, { credentials: 'include' });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function del(path: string) {
  const res = await fetch(`${API_BASE}${path}`, { method: 'DELETE', credentials: 'include' });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function patch(path: string, body: any) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
