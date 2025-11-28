import React from 'react';
import ContentItem from './ContentItem';

interface Props {
  contents: any[];
  onUpdate?: () => void;
  readonly?: boolean;
}

export default function ContentList({ contents, onUpdate, readonly }: Props) {
  return (
    <ul>
      {contents.map(c => <ContentItem key={c.id} content={c} onUpdate={onUpdate} readonly={readonly} />)}
    </ul>
  );
}
