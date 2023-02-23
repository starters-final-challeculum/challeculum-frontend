import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import { FaStar } from 'react-icons/fa';

const Form = tw.form`w-full p-6 flex flex-col`;

const Label = tw.label`mb-2 text-gray-800 font-bold`;

const Input = tw.input`mb-4 py-2 px-4 border border-gray-300 rounded-md`;

const StarIcon = tw(FaStar)`mr-2 cursor-pointer inline`;

const Textarea = tw.textarea`mb-4 py-2 px-4 border border-gray-300 rounded-md resize-none`;

const Button = tw.button`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`;
function Rating({ value, onClick }) {
  const stars = [];

  for (let i = 1; i <= 5; i += 1) {
    stars.push(
      <StarIcon
        key={i}
        color={value >= i ? 'orange' : 'gray'}
        onClick={() => onClick(i)}
      />,
    );
  }

  return <div>{stars}</div>;
}

export function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ rating, comment });

    setRating(0);
    setComment('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="rating">Rating</Label>
      <Rating value={rating} onClick={handleRatingChange} />

      <Label htmlFor="comment">Comment</Label>
      <Textarea
        id="comment"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Leave a comment"
      />

      <Button type="submit">Submit</Button>
    </Form>
  );
}
