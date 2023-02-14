import { useForm } from 'react-hook-form';
import axios from 'axios';
import React from 'react';
import { apiBaseUrl } from '../common/constants';

export function LoginForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => {
      axios.post(`${apiBaseUrl}/user/login`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(({ data: { grantType, accessToken, refreshToken } }) => {
          localStorage.setItem('Authorization', `${grantType} ${accessToken}`);
          localStorage.setItem('refreshToken', refreshToken);
          console.log(localStorage.getItem('Authorization'));
          console.log(localStorage.getItem('refreshToken'));
        });
    })}
    >
      <input
        type="email"
        {...register('username', {
          required: {
            value: true,
            message: 'username is required',
          },
        })}
        placeholder="email"
        className="input"
      />
      <input
        type="password"
        {...register('password', {
          required: {
            value: true,
            message: 'Password is required',
          },
        })}
        placeholder="Password"
        className="input"
      />
      {/* eslint-disable-next-line react/button-has-type */}
      <button> button </button>
    </form>
  );
}
