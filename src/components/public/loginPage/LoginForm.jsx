import { useForm } from 'react-hook-form';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { apiBaseUrl } from '../../../common/globalConstants';

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange',
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post(`${apiBaseUrl}/user/login`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(({ data: { grantType, accessToken, refreshToken } }) => {
        localStorage.setItem('Authorization', `${grantType} ${accessToken}`);
        localStorage.setItem('RefreshToken', refreshToken);
        navigate('/main');
      })
      .catch((error) => {
        console.log(error);
        console.log('로그인 실패');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register('email', { required: true })}
        />
        {errors.email && <p className="text-red-500 text-xs italic mt-2">Email is required</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register('password', { required: true })}
        />
        {errors.password && <p className="text-red-500 text-xs italic mt-2">Password is required</p>}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className={`w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${!Object.keys(errors).length ? '' : 'opacity-50 cursor-not-allowed'}`}
          // disabled={!Object.keys(errors).length}
        >
          Log in
        </button>
      </div>
    </form>
  );
}
