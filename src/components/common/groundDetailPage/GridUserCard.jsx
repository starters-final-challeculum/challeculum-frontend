import tw from 'tailwind-styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = tw.div`flex flex-col justify-center items-center h-20 text-white font-bold`;
const SuccessCard = tw(Card)`bg-green-500`;
const FailCard = tw(Card)`bg-red-500`;

const Username = tw.div`mb-2`;

const Icon = tw(FontAwesomeIcon)`mr-2`;

export function GridUserCard({ username, success }) {
  const CardComponent = success ? SuccessCard : FailCard;

  return (
    <CardComponent>
      <Username>{username}</Username>
      <div>
        <Icon icon={success ? faCheckCircle : faTimesCircle} />
        {success ? 'Success' : 'Fail'}
      </div>
    </CardComponent>
  );
}
