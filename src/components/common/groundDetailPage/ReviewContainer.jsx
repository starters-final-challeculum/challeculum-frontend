import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { ReviewList } from './ReviewList';
import { ReviewForm } from './ReviewForm';

const Container = tw.div`w-full h-80 overflow-y-auto bg-gray-100`;

export function ReviewContainer({
  fetchReviewList, fetchIsReviewableUser, reviewUserGround,
}) {
  let reviewable = false;
  reviewable = fetchIsReviewableUser();
  const reviewList = fetchReviewList();
  const handleSubmit = async (review) => {
    await reviewUserGround(review);
    window.location.reload();
  };

  return (
    <Container>
      {reviewable && <ReviewForm onSubmit={handleSubmit} />}
      <ReviewList reviews={reviewList} />
    </Container>
  );
}
