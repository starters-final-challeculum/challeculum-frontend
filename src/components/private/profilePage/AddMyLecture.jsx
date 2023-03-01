import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import api from '../../../common/axios-config';

function AddMyLecture() {
  const [lectureListAvailable, setLectureListAvailable] = useState('');

  const getLectureListAvailable = async () => {
    api.get('/lecture/available').then((response) => {
      setLectureListAvailable(response.data);
      console.log(response.data);
    });
  };

  const addUserLecture = (event) => {
    api.post(`/user/me/lecture/${event.target.id}`).then((response) => {
      console.log('수강중인 강의 등록 완료');
      alert('완료되었습니다. 현재 수강중인 강의 탭을 확인해주세요!');
      getLectureListAvailable();
    });
  };

  useEffect(() => {
    getLectureListAvailable();
  }, []);

  return (
    <ListContainer>
      {lectureListAvailable && lectureListAvailable.map((item) => (
        <ListCard key={item.lectureId}>
          <FirstBox>
            <Info>
              {item.categoryName}
            </Info>
            <div className="text-lg font-semibold">{item.lectureTitle}</div>
            <Info>
              {item.url}
            </Info>
          </FirstBox>
          <SecondBox>
            <Info>
              {item.platform}
            </Info>
            <Info>
              강사:
              {' '}
              {item.instructor}
            </Info>
          </SecondBox>
          <ThirdBox>
            <Button id={item.lectureId} onClick={addUserLecture}>내 강의에 추가하기</Button>
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
  grid grid-cols-6
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
export default AddMyLecture;
