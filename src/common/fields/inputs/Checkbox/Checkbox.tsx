import React from 'react';

import { InputProps } from '../Input/Input';

type CheckboxProps = InputProps;
export const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => (
  <label htmlFor={props.id}>
    <input type='checkbox' checked={props.checked} {...props} />
    <span >{label}</span>
  </label>
);