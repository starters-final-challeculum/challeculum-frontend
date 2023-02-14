import React from 'react';
import tw from 'tailwind-styled-components';

function DetailList(props) {
  return (
    <DetailDiv>
      {props.countList && props.countList.map((item, i) => (
        <div key={i}>
          <label>내용</label>
          <div>
            <textarea
              autoSize={{ minRows: 6, maxRows: 6 }}
            />
          </div>
        </div>
      ))}
    </DetailDiv>
  );
}

const DetailDiv = tw.div`
  div {
    margin-bottom: 2rem;
    width: 320px;
  }
`;
export default DetailList;
