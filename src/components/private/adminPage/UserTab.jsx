import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import api from '../../../common/axios-config';

function UserTab() {
  const [user, setUser] = useState('');

  const getUser = async () => {
    api.get('user/getAllUser').then((response) => {
      setUser(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ListContainer>
      {user && user.map((item) => (
        <ListCard key={item.userId} className="grid grid-cols-6">
          <FirstBox>
            <div className="text-lg font-semibold">{item.nickname}</div>
            <Info>
              {item.username}
            </Info>
            <Info>
              {item.phone}
            </Info>
          </FirstBox>
          <SecondBox>
            <Info>
              {item.role}
            </Info>
            <Info>
              포인트 :
              {item.point}
            </Info>
          </SecondBox>
          <ThirdBox>
            <Button>삭제</Button>
          </ThirdBox>
        </ListCard>
      ))}
    </ListContainer>

  );
}
const ListContainer = tw.div`
  bg-gray-200 p-4 rounded-lg
    `;
const ListCard = tw.div`
  bg-white p-4 my-4 rounded-lg shadow-md
`;
const Info = tw.div`
text-gray-700
`;
const FirstBox = tw.div`
col-span-3
`;
const SecondBox = tw.div`
col-span-2
`;
const ThirdBox = tw.div`
col-span-1 flex justify-center items-center
`;
const Button = tw.button`
    text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
`;
export default UserTab;
