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
          multiple={name === 'menu'}
          value={value || (type === 'color' ? '#000000' : '')}
        />
      );
    case 'select':
      return (
        <Select
          key={name}
          name={name}
          value={value || ''}
          onChange={onChange}
          multiple={name === 'kitchens'}
        >
          <option value="">-- Выберите --</option>
          {options.map((option) => (
            <option key={`${name}-${option.id}`} value={option.name}>
              {option.name}
            </option>
          ))}
        </Select>
      );
    default:
      return null;
  }
};
