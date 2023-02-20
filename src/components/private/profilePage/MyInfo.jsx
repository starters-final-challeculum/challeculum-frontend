import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import api from '../../../common/axios-config';

function MyInfo() {
  const [info, setInfo] = useState({});

  const getInfo = () => {
    api.get('/user').then((response) => {
      setInfo(response.data);
    });
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div>
      <FullWidth>
        <label>
          이메일
          <BoundInput
            type="text"
            required
            value={info.username || ''}
            readOnly
          />
        </label>
      </FullWidth>
      <FullWidth>
        <label>
          닉네임
          <BoundInput
            type="text"
            required
            value={info.nickname || ''}
            readOnly
          />
        </label>
      </FullWidth>
      <FullWidth>
        <label>
          휴대폰 번호
          <BoundInput
            type="text"
            required
            value={info.phone || ''}
            readOnly
          />
        </label>
      </FullWidth>

      <Button>내 정보 변경</Button>

      <FullWidth>
        <div>
          내 포인트 :
          {info.point}
        </div>
        <Button>충전하기</Button>
      </FullWidth>

    </div>

  );
}

const FullWidth = tw.div`
        relative w-1/2 lg:max-w-sm
        `;
const BoundInput = tw.input`
        w-full pl-2.5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none
        `;
const Button = tw.button`
text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
`;
export default MyInfo;
