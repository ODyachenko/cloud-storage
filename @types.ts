import React from 'react';

export type ButtonType = {
  value: string;
  type: 'button' | 'submit';
  className?: string;
};

export type ListType = {
  id: number;
  value: string;
  icon: React.ReactNode;
};
