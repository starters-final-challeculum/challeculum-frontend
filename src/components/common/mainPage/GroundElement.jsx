import React from 'react';
import { useNavigate } from 'react-router-dom';

export function GroundElement({
  id, groundTitle, lectureTitle, deposit, startAt, endAt, status, numOfParticipants,
}) {
  const navigate = useNavigate();
  const navigateGroundDetail = () => {
    navigate(`/ground/${id}`);
  };
  return (
    <div key={id} className="bg-white p-4 my-4 rounded-lg shadow-md">
      <button onClick={navigateGroundDetail}>
        <div className="text-lg font-semi-bold">{groundTitle}</div>
        <div className="text-gray-700">
          <div>
            강의명:
            {lectureTitle}
          </div>
          <div>
            예치금:
            {deposit}
          </div>
          <div>
            기간:
            {startAt}
            ~
            {endAt}
          </div>
          <div>
            상태:
            {status}
          </div>
          <div>
            현재참여인원:
            {numOfParticipants}
          </div>

        </div>
      </button>
    </div>
  );
}
