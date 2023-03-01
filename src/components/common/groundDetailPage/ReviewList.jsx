import React from 'react';
import tw from 'tailwind-styled-components';

const List = tw.ul`divide-y divide-gray-300`;

const ListItem = tw.li`flex items-center py-4 px-6`;

const Avatar = tw.div`w-8 h-8 bg-gray-500 rounded-full flex-shrink-0 mr-3`;

const Comment = tw.div`flex-grow`;

export function ReviewList({ reviews }) {
  return (
    <List>
      {reviews.map((review, index) => (
        <ListItem key={index}>
          <Avatar />
          <Comment>
            <div>{review.rating}</div>
            <div>{review.comment}</div>
          </Comment>
        </ListItem>
      ))}
    </List>
  );
}
