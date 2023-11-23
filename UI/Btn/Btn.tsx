import React, { FC } from 'react';
import { ButtonType } from '@/@types';
import './styles.scss';

const Btn: FC<ButtonType> = ({ value, type, className }) => {
  return (
    <button type={type} className={`btn ${className}`}>
      {value}
    </button>
  );
};

export default Btn;
