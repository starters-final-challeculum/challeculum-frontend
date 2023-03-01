import React, { useEffect, useRef, useState } from 'react';
import tw from 'tailwind-styled-components';
import api from '../../../common/axios-config';

function MyInfo() {
  const [info, setInfo] = useState({});
  const [updateMode, setUpdateMode] = useState(false);

  const updateNickname = useRef('');
  const updatePhone = useRef('');
  const updatePassword = useRef('');

  const getInfo = () => {
    api.get('/user').then((response) => {
      setInfo(response.data);
      console.log(response.data);
    });
  };

  const onUpdateHandler = () => {
    setUpdateMode(true);
  };

  const onCancelHandler = () => {
    setUpdateMode(false);
  };

  const updateInfo = () => {
    api.patch('/user', {
      nickname: updateNickname.current.value,
      phone: updatePhone.current.value,
      password: updatePassword.current.value,
    }).then((response) => {
      setInfo({
        ...response.data,
        username: info.username,
      });
      updateNickname.current.value = response.data.nickname;
      updatePhone.current.value = response.data.phone;
      updatePassword.current.value = response.data.password;
      alert('수정완료');
      setUpdateMode(false);
      window.location.reload();
    });
  };

  const userId = info.id;

  const deleteUser = () => {
    const confirmDelete = window.confirm('삭제하시겠습니까?');

    if (confirmDelete) {
      api.delete(`/user/${userId}`).then(
        (response) => {
          console.log('삭제');
          console.log(response);
        },
      );
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div>
      {!updateMode ? (
        <>
          <div>
            <FullWidth>
              <label>
                이메일
                <BoundInput
                  value={info.username || ''}
                  readOnly
                />
              </label>
            </FullWidth>
            <FullWidth>
              <label>
                닉네임
                <BoundInput
                  value={info.nickname || ''}
                  readOnly
                />
              </label>
            </FullWidth>
            <FullWidth>
              <label>
                휴대폰 번호
                <BoundInput
                  value={info.phone || ''}
                  readOnly
                />
              </label>
            </FullWidth>
          </div>
          <Button onClick={onUpdateHandler}>내 정보 변경</Button>
        </>
      ) : (
        <>
          <div>
            <FullWidth>
              <label>
                이메일
                <BoundInput
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
                  ref={updateNickname}
                  defaultValue={info.nickname}
                />
              </label>
            </FullWidth>
            <FullWidth>
              <label>
                휴대폰 번호
                <BoundInput
                  type="text"
                  required
                  ref={updatePhone}
                  defaultValue={info.phone}
                />
              </label>
            </FullWidth>
            <FullWidth>
              <label>
                비밀번호
                <BoundInput
                  type="password"
                  required
                  ref={updatePassword}
                />
              </label>
            </FullWidth>
          </div>
          <Button onClick={updateInfo}>수정</Button>
          <Button onClick={onCancelHandler}>취소</Button>
        </>
      )}

      <FullWidth>
        <div>
          내 포인트 :
          {info.point}
        </div>
        <Button>충전하기</Button>
      </FullWidth>
      <Button onClick={deleteUser}>회원 탈퇴</Button>

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
