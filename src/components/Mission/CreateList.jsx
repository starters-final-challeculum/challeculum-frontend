import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import DetailList from './DetailList';
// import { Link } from "react-router-dom"
// import Axios from "axios"

function CreateList() {
  const [countList, setCountList] = useState([0]);

  const onAddDetailDiv = () => {
    const countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter);	// index 사용 X
    // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
    setCountList(countArr);
  };

  return (
    <CreateListDiv>
      <DetailList countList={countList} />
      <button onClick={onAddDetailDiv}>
        추가
      </button>
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

export default CreateList;
