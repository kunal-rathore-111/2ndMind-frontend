import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPublic } from '../services/content';
import ContentList from '../components/ContentList';

export default function PublicDashboard() {
  const { hash } = useParams<{ hash: string }>();
  const [contents, setContents] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (hash) {
      (async () => {
        try {
          const res = await getPublic(hash);
          setContents(res.result || []);
        } catch (err: any) {
          setError(err?.message || 'Failed to load public dashboard');
        }
      })();
    }
  }, [hash]);

  return (
    <div>
      <h2>Public Dashboard</h2>
      <ContentList contents={contents} readonly />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
