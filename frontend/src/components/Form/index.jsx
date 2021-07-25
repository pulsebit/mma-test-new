import React, { forwardRef } from 'react';
import * as Style from './form.style';

export const Input = forwardRef(({ label, onChange, onBlur, name, value, id, type, ...rest }, ref) => (
  <>
    {label && <Style.Label htmlFor={id}>{label}</Style.Label>}
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

export const Select = forwardRef(({ label, onChange, onBlur, name, value, id, type, options, ...rest }, ref) => (
  <>
    <Style.Label htmlFor={id}>{label}</Style.Label>
    <Style.Select 
      type={type} 
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      value={value}
      id={id}
      ref={ref}
      className="form-control"
      {...rest}
    >
      <option value="">{label || ''}</option>
      {options && options.map((item, key) => (
        <option 
          key={key} 
          value={item.value || item.text}
        >
          {item.text || item.value}
        </option>
      ))}
    </Style.Select>
  </>
));