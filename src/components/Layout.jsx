import React from 'react';
import tw from 'tailwind-styled-components';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <Base>
      <Main>{children}</Main>
    </Base>
  );
}

const Base = tw.div`
w-full
md:w-4/5
mx-auto
h-full
flex
flex-col
items-center
`;

const Main = tw.main`
  min-h-5/6
  py-20
  lg:py-28
  px-2
  md:mx-auto
  w-full

  
`;
export default Layout;
