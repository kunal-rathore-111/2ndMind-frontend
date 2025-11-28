export type Content = {
  id?: string;
  title: string;
  description?: string;
  link: string;
  type: 'Twitter' | 'Youtube' | 'Instagram' | 'Other';
  tags?: string[];
};

export type User = {
  id: string;
  username: string;
  email: string;
};
