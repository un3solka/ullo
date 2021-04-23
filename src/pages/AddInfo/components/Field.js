import React from 'react';
import { Input, Select } from './styled';

export const Field = ({ type, name, onChange, value, options = [] }) => {
  switch (type) {
    case 'text':
    case 'number':
    case 'color':
    case 'file':
      return (
        <Input
          key={name}
          type={type}
          name={name}
          onChange={onChange}
          value={value || ''}
        />
      );
    case 'select':
      return (
        <Select key={name} name={name} value={value || ''} onChange={onChange}>
          {options.map((option) => (
            <option key={`${name}-${option.id}`} value={option.id}>
              {option.name}
            </option>
          ))}
        </Select>
      );
    default:
      return null;
  }
};
