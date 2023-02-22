import React from 'react';

export function ReviewList({ ground, fetchReviewList }) {
  const { rating, comment } = fetchReviewList();
  return (
    <>ReviewList</>
  );
}
