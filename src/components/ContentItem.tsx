import React, { useState } from 'react';
import { deleteContent, updateContent } from '../services/content';

interface Props {
  content: any;
  onUpdate?: () => void;
  readonly?: boolean;
}

export default function ContentItem({ content, onUpdate, readonly }: Props) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(content.title);
  const [link, setLink] = useState(content.link);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    try {
      await deleteContent(content.id);
      onUpdate?.();
    } catch (err: any) {
      setError(err?.message || 'Failed to delete');
    }
  };

  const handleUpdate = async () => {
    try {
      await updateContent(content.id, { title, link, type: content.type, description: content.description, tags: content.tags });
      setEditing(false);
      onUpdate?.();
    } catch (err: any) {
      setError(err?.message || 'Failed to update');
    }
  };

  if (editing) {
    return (
      <li>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <input value={link} onChange={e => setLink(e.target.value)} />
        <button onClick={handleUpdate}>Save</button>
        <button onClick={() => setEditing(false)}>Cancel</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </li>
    );
  }

  return (
    <li>
      <h4>{content.title}</h4>
      <p>{content.link}</p>
      {!readonly && (
        <>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </li>
  );
}
