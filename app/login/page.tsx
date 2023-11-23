import LoginForm from '@/components/Forms/LoginForm';
import React from 'react';

export default function page() {
  return (
    <section className="login block">
      <div className="container">
        <LoginForm title="Sign In" />
      </div>
    </section>
  );
}
