import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../services/auth';
import { useAuth } from '../hooks/useAuth';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp({ username, email, password });
      login();
      navigate('/dashboard');
    } catch (err: any) {
      setError(err?.message || 'Sign up failed');
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Sign Up</h2>
      <input placeholder="username" value={username} onChange={e => setUsername(e.target.value)} required />
      <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Sign Up</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
