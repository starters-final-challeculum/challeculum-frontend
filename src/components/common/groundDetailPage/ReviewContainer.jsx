import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { ReviewList } from './ReviewList';
import { ReviewForm } from './ReviewForm';

const Container = tw.div`w-full h-80 overflow-y-auto bg-gray-100`;

export function ReviewContainer({
  fetchReviewList, fetchIsReviewableUser, reviewUserGround,
}) {
  const [reviews, setReviews] = useState([]);
  const handleSubmit = (review) => {
    reviewUserGround(review);
    setReviews([...reviews, review]);
  };
  const data = fetchReviewList();
  useEffect(() => {
    async function fetchData() {
      console.log('reviews', data);
      setReviews(data);
    }
    fetchData();
  }, [fetchReviewList]);
  const reviewable = fetchIsReviewableUser();
  console.log(reviews);
  return (
    <Container>
      <ReviewList reviews={reviews} />
      {reviewable && <ReviewForm onSubmit={handleSubmit} />}
    </Container>
  );
}
