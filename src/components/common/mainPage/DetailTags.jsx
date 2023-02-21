import React from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components/';

function DetailTags() {
  const navigate = useNavigate();
  return (
    <TagSpace>
      <Tags>
        <TagButton onClick={() => navigate('/category/IT')}>
          <span>IT</span>
        </TagButton>
        <TagButton onClick={() => navigate('/category/외국어')}>
          <span>외국어</span>
        </TagButton>
        <TagButton onClick={() => navigate('/category/자격증')}>
          <span>자격증</span>
        </TagButton>
      </Tags>
    </TagSpace>
  );
}

export default DetailTags;

export const TagButton = tw.button`
bg-mWhite ml-3 py-2 px-3 md:py-2 lg:px-4 md:px-2 md:text-sm rounded-full items-center hover:bg-gray-400 focus:outline-none
`;
const TagSpace = tw.div`
invisible md:visible md:mt-4 md:mb-2 sm:mt-0
`;
const Tags = tw.div`
flex lg:mt-6 lg:mb-6 justify-center
`;
