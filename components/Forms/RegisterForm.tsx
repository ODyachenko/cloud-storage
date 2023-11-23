'use client';

import React, { ChangeEventHandler, FC } from 'react';
import Image from '@/node_modules/next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import Btn from '@/UI/Btn/Btn';
import { RegisterFormData } from '@/@types';
import './styles.scss';
import avatar from '@/public/avatar_private.png';

type RegisterFormProps = {
  title: string;
};

const RegisterForm: FC<RegisterFormProps> = ({ title }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    const createFormData = {
      email: data.email,
      password: data.password,
      options: {
        data: {
          fullname: data.fullname,
          //   avatarUrl: avatar,
        },
      },
    };

    console.log(createFormData);
  };

  const handleChangeFile: ChangeEventHandler<HTMLInputElement | any> = (
    event
  ) => {
    const avatarFile = event.target.files[0];
    // dispatch(uploadAvatar(avatarFile));
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title title">{title}</h1>
      <label className="form__avatar">
        <Image
          className="form__avatar--img"
          src={avatar}
          width={100}
          height={100}
          alt="User avatar"
          priority
        />
        <input type="file" accept="image/*" onChange={handleChangeFile} />
      </label>
      <label className="field">
        <span className="field__caption">Full Name</span>
        <input
          className="field__item"
          type="text"
          placeholder="Full Name"
          {...register('fullname', {
            required: 'Please fill in the field',
            minLength: { value: 2, message: 'Min length is 4' },
            maxLength: { value: 30, message: 'Max length is 30' },
          })}
        />
        {errors.fullname && (
          <span className="field__error">{errors.fullname.message}</span>
        )}
      </label>
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
      {/* {error && <span className="field__error--primary">{error}</span>} */}
      <Btn className="form__btn" type="submit" value="Sign In" />
    </form>
  );
};

export default RegisterForm;
