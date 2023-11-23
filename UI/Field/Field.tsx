import React, { FC } from 'react';
import { FieldType } from '@/@types';
import './styles.scss';

const Field: FC<FieldType> = ({ type, placeholder, className, labelText }) => {
  return (
    <label>
      <span className="field-label">{labelText}</span>
      <input
        type={type}
        className={`field ${className}`}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Field;
