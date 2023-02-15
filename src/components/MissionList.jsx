import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
// import { Link } from "react-router-dom"
// import Axios from "axios"
import { FaPlus } from 'react-icons/fa';

function MissionList() {
  const [countList, setCountList] = useState([0]);
  const onAddDetailDiv = () => {
    const countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    // index 사용 X
    countArr.push(counter);
    // countArr[counter] = counter
    setCountList(countArr);
  };

  return (
    <CreateListDiv>
      <DetailDiv>
        {countList && countList.map((item, index) => (
          <div key={index}>
            <span>미션</span>
            <div className="flex">
              <textarea
                rows="1"
                className="block p-2.5 w-5/6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="미션 정보를 입력해주세요!"
              />
              <button type="button" onClick={onAddDetailDiv} className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5">
                <FaPlus />
              </button>
            </div>

          </div>
        ))}
      </DetailDiv>

    </CreateListDiv>
  );
}

const CreateListDiv = tw.div`
  padding: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DetailDiv = tw.div`
  div {
    margin-bottom: 2rem;
    width: 320px;
  }
`;

export default MissionList;
