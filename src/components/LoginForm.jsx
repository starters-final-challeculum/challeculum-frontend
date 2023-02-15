import { useForm } from 'react-hook-form';
import axios from 'axios';
import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { apiBaseUrl } from '../common/constants';

export function LoginForm() {
  const { register, handleSubmit } = useForm();
  const movePage = useNavigate();
  return (
    <form onSubmit={handleSubmit((data) => {
      axios.post(`${apiBaseUrl}/user/login`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(({ data: { grantType, accessToken, refreshToken } }) => {
          Cookies.set('Authorization', `${grantType} ${accessToken}`);
          Cookies.set('refreshToken', refreshToken);
          movePage('/');
        })
        .catch(() => {
          console.log('로그인 실패');
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
