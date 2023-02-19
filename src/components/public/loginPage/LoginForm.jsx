import { useForm } from 'react-hook-form';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { apiBaseUrl } from '../../../common/globalConstants';

export function LoginForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit((data) => {
      axios.post(`${apiBaseUrl}/user/login`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(({ data: { grantType, accessToken, refreshToken } }) => {
          localStorage.setItem('Authorization', `${grantType} ${accessToken}`);
          localStorage.setItem('RefreshToken', refreshToken);
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
          console.log('로그인 실패');
        });
    })}
    >
      <input
        type="email"
        placeholder="email"
        className="input"
        {...register('username', {
          required: {
            value: true,
            message: 'username is required',
          },
        })}
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
