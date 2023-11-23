'use client';

import React, { FC } from 'react';
import Link from '@/node_modules/next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import Btn from '@/UI/Btn/Btn';
import { LoginFormData } from '@/@types';
import './styles.scss';

type LoginFormProps = {
  title: string;
};

const LoginForm: FC<LoginFormProps> = ({ title }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    // dispatch(loginUser({ data, navigate }));
    console.log(data);
  };

  return (
    <form className="login__form form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title">{title}</h1>
      <label className="field">
        <span className="field__caption">E-mail</span>
        <input
          className="field__item"
          type="email"
          placeholder="E-mail"
          {...register('email', {
            required: 'Please fill in the field',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Please enter valid email',
            },
          })}
        />
        {errors.email && (
          <span className="field__error">{errors.email.message}</span>
        )}
      </label>
      <label className="field">
        <span className="field__caption">Password</span>

        <input
          className="field__item"
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Please fill in the field',
            minLength: { value: 6, message: 'Min length is 6' },
            maxLength: { value: 40, message: 'Max length is 40' },
          })}
        />
        {errors.password && (
          <span className="field__error">{errors.password.message}</span>
        )}
      </label>
      <Btn className="form__btn" type="submit" value="Sign In" />
      <Link className="form__link" href="/register">
        Don't have an account?
      </Link>
    </form>
  );
};

export default LoginForm;
