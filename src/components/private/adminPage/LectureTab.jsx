import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import api from '../../../common/axios-config';

function LectureTab() {
  const [lecture, setLecture] = useState('');

  const getLecture = async () => {
    api.get('lecture').then((response) => {
      setLecture(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getLecture();
  }, []);

  return (
    <ListContainer>
      <div className="flex justify-end">
        <Button>신규 강의 등록</Button>
      </div>
      {lecture && lecture.map((item) => (
        <ListCard key={item.lectureId} className="grid grid-cols-8">
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
              강사 :
              {' '}
              {item.instructor}
            </Info>
          </SecondBox>
          <ThirdBox>
            <Button>강의 삭제</Button>
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
col-span-5
`;
const SecondBox = tw.div`
col-span-2
`;
const ThirdBox = tw.div`
col-span-1 flex justify-center items-center
`;
const Button = tw.button`
    text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
`;
export default LectureTab;
