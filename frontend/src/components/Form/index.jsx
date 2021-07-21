import React, { forwardRef } from 'react';
import * as Style from './form.style';

export const Input = forwardRef(({ label, onChange, onBlur, name, value, id, type, ...rest }, ref) => (
  <>
    <Style.Label htmlFor={id}>{label}</Style.Label>
    <Style.Input 
      type={type} 
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      value={value}
      id={id}
      ref={ref}
      className="form-control"
      {...rest}
    />
  </>
));