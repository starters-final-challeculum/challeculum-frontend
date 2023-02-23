import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import api from '../../../common/axios-config';

function AddMyLecture() {
  const [lectureList, setLectureList] = useState('');

  const getLectureList = async () => {
    api.get('/lecture').then((response) => {
      setLectureList(response.data);
      console.log(response.data);
    });
  };

  const addUserLecture = (event) => {
    api.post(`/userlecture/${event.target.id}`).then((response) => {
      console.log(event.target.id);
      console.log('수강중인 강의 등록 완료');
    });
  };

  useEffect(() => {
    getLectureList();
  }, []);

  return (
    <GroundListContainer>
      {lectureList && lectureList.map((item) => (
        <GroundListCard key={item.id}>
          <div className="text-gray-700">
            카테고리 :
            {item.categoryId}
          </div>
          <div>{item.platform}</div>
          <div className="text-lg font-semibold">{item.title}</div>
          <div className="text-gray-700">
            강사:
            {item.instructor}
          </div>
          <Button id={item.id} onClick={addUserLecture}>내 강의에 추가하기</Button>
        </GroundListCard>
      ))}
    </GroundListContainer>

  );
}
const GroundListContainer = tw.div`
  bg-gray-200 p-4 rounded-lg
    `;
const GroundListCard = tw.div`
  bg-white p-4 my-4 rounded-lg shadow-md
`;
const Button = tw.button`
  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
`;
export default AddMyLecture;
