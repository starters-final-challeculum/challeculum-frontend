import React from 'react';
import tw from 'tailwind-styled-components';

export function LectureSelect({
  register, options, name, ...rest
}) {
  return (
    <SelectContainer {...register(name)} {...rest}>
      {options.map((value) => (
        <option key={value.lectureId} value={value.lectureId}>{value.lectureTitle}</option>
      ))}
    </SelectContainer>
  );
}

const SelectContainer = tw.select`
w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none
`;
