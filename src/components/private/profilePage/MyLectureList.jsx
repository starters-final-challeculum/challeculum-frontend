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
    <ListContainer>
      {lecture && lecture.map((item) => (
        <ListCard key={item.id}>
          <FirstBox>
            <Info>
              {item.categoryName}
            </Info>
            <div className="text-lg font-semibold">{item.lectureTitle}</div>

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
            <Button onClick={onCreateGroundHandler}>그라운드 생성하기</Button>
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
export default MyLectureList;
