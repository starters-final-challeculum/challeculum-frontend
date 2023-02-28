import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useNavigate } from 'react-router-dom';
import api from '../../../common/axios-config';

function MyLectureList() {
  const [lecture, setLecture] = useState('');
  const navigate = useNavigate();

  const getLecture = async () => {
    api.get('user/me/lecture').then((response) => {
      setLecture(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getLecture();
  }, []);

  const onCreateGroundHandler = () => {
    navigate('/create-ground');
  };

  return (
    <GroundListContainer>
      {lecture && lecture.map((item) => (
        <GroundListCard key={item.id}>
          <div className="text-gray-700">
            {item.categoryName}
          </div>
          <div className="text-lg font-semibold">{item.lectureTitle}</div>
          <div>{item.platform}</div>
          <div className="text-gray-700">
            강사:
            {item.instructor}
          </div>
          <Button onClick={onCreateGroundHandler}>그라운드 생성하기</Button>
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
export default MyLectureList;
