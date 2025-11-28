import React, { useState } from 'react';
import { addContent } from '../services/content';

interface Props {
  onAdd: () => void;
}

export default function ContentForm({ onAdd }: Props) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [type, setType] = useState<'Twitter' | 'Youtube' | 'Instagram' | 'Other'>('Other');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addContent({ title, link, type, description: description || undefined, tags: tags.length ? tags : undefined });
      setTitle(''); setLink(''); setDescription(''); setTags([]);
      onAdd();
    } catch (err: any) {
      setError(err?.message || 'Failed to add content');
    }
  };

  return (
    <form onSubmit={submit}>
      <h3>Add Content</h3>
      <input placeholder="title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input placeholder="link" value={link} onChange={e => setLink(e.target.value)} required />
      <select value={type} onChange={e => setType(e.target.value as any)}>
        <option>Twitter</option><option>Youtube</option><option>Instagram</option><option>Other</option>
      </select>
      <textarea placeholder="description" value={description} onChange={e => setDescription(e.target.value)} />
      <input placeholder="tags (comma-separated)" value={tags.join(',')} onChange={e => setTags(e.target.value.split(',').map(t => t.trim()))} />
      <button type="submit">Add</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
