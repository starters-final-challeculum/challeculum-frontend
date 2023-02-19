import { useForm } from 'react-hook-form';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { apiBaseUrl } from '../../../common/globalConstants';

export function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const movePage = useNavigate();
  return (
    <form onSubmit={handleSubmit((data) => {
      axios.post(`${apiBaseUrl}/user`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(() => {
          alert('회원가입 완료');
          movePage('/');
        })
        .catch(() => {
          alert('회원가입 실패');
        });
    })}
    >
      <input
        type="email"
        {...register('username', {
          required: {
            value: true,
            message: 'email is required',
          },
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Please enter a valid email ',
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
            message: 'password is required',
          },
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
            message:
                    'Password should be at least 8 characters & mix of upper & lowercase letter and number',
          },
        })}
        placeholder="password"
        className="input"
      />
      <input
        type="text"
        {...register('nickname', {
          required: {
            value: true,
            message: 'nickname is required',
          },
        })}
        placeholder="nickname"
        className="input"
      />
      <input
        type="text"
        {...register('phone', {
          required: {
            value: true,
            message: 'phone is required',
          },
        })}
        placeholder="phone"
        className="input"
      />
      <button> button</button>
    </form>
  );
}
