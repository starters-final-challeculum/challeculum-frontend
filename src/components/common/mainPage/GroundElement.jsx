import React from 'react';
import { useNavigate } from 'react-router-dom';

export function GroundElement({
  id, title, level, minCapacity, maxCapacity, deposit, startAt, endAt,
}) {
  const navigate = useNavigate();
  const navigateGroundDetail = () => {
    navigate(`/ground/${id}`);
  };
  return (
    <div key={id} className="bg-white p-4 my-4 rounded-lg shadow-md">
      <button onClick={navigateGroundDetail}>
        <div className="text-lg font-semi-bold">{title}</div>
        <div className="text-gray-700">
          <div>
            Level:
            {level}
          </div>
          <div>
            Capacity:
            {minCapacity}
            {' '}
            ~
            {maxCapacity}
          </div>
          <div>
            Deposit:
            {deposit}
          </div>
          <div>
            Period:
            {startAt}
            {' '}
            ~
            {endAt}
          </div>
        </div>
      </button>
    </div>
  );
}
