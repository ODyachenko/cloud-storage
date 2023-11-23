import React from 'react';

export type ButtonType = {
  value: string;
  type: 'button' | 'submit';
  className?: string;
};

export type FieldType = {
  type: 'email' | 'text' | 'password';
  placeholder: string;
  className?: string;
  labelText?: string;
};

export type ListType = {
  id: number;
  value: string;
  icon: React.ReactNode;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type RegisterFormData = {
  fullname: string;
  avatarUrl?: string;
  email: string;
  password: string;
};
