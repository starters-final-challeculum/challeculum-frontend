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
    <div key={id} className="mb-3 text-2xl font-bold text-white flex flex-col items-center border rounded-lg bg-gray-700">
      <button onClick={navigateGroundDetail}>
        <div className="text-lg font-semi-bold">{groundTitle}</div>
        <div className="text-white">
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
          <div className={`text-${status === 'ground_completed' ? 'border-l-blue-400' : 'gray'}-300`}>
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
