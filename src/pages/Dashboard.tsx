import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDashboard, shareLink } from '../services/content';
import ContentList from '../components/ContentList';
import ContentForm from '../components/ContentForm';
import { useAuth } from '../hooks/useAuth';

export default function Dashboard() {
  const [contents, setContents] = useState<any[]>([]);
  const [shareHash, setShareHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    loadContents();
  }, []);

  const loadContents = async () => {
    try {
      const res = await getDashboard();
      setContents(res.data || []);
    } catch (err: any) {
      setError(err?.message || 'Failed to load dashboard');
    }
  };

  const handleShare = async () => {
    try {
      const res = await shareLink(true);
      setShareHash(res.hash);
    } catch (err: any) {
      setError(err?.message || 'Failed to create share link');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleShare}>Create Share Link</button>
      {shareHash && <p>Share Link: {window.location.origin}/public/{shareHash}</p>}
      <ContentForm onAdd={loadContents} />
      <ContentList contents={contents} onUpdate={loadContents} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
