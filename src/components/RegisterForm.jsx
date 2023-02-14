import { useForm } from 'react-hook-form';
import axios from 'axios';
import React from 'react';
import { apiBaseUrl } from '../common/constants';

export function RegisterForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => {
      console.log(JSON.stringify(data));
      axios.post(`${apiBaseUrl}/user`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response);
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
      <button> button </button>
    </form>
  );
}
