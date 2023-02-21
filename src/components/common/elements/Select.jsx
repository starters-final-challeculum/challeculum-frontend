import React from 'react';
import tw from 'tailwind-styled-components';

export function Select({
  register, options, name, ...rest
}) {
  return (
    <SelectContainer {...register(name)} {...rest}>
      {options.map((value, index) => (
        <option key={index} value={value}>{value}</option>
      ))}
    </SelectContainer>
  );
}

const SelectContainer = tw.select`
w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none
`;
