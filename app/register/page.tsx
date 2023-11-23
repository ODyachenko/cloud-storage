import RegisterForm from '@/components/Forms/RegisterForm';
import React from 'react';

export default function page() {
  return (
    <section className="register block">
      <div className="container">
        <RegisterForm title="Sign Up" />
      </div>
    </section>
  );
}
