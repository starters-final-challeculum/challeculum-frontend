import { useForm } from 'react-hook-form';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { apiBaseUrl } from '../../../common/global-constants';

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange',
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
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
  const validateEmail = (value) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(value).toLowerCase());
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
          {...register('username', { required: true, validate: validateEmail })}
        />
        {errors.username?.type === 'required' && (
          <span className="text-red-500 text-sm italic mt-2">이메일을 입력해주세요.</span>
        )}
        {errors.username?.type === 'validate' && (
          <span className="text-red-500 text-sm italic mt-2">올바른 이메일 형식이 아닙니다.</span>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="paord" className="block text-gray-700 font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register('password', { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[^\dA-Za-z]).{9,20}$/ })}
        />
        {errors.password?.type === 'required' && (
          <span className="text-red-500 text-sm italic mt-2">비밀번호를 입력해주세요.</span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className={`w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline ${!Object.keys(errors).length ? '' : 'opacity-50 cursor-not-allowed'}`}
          // disabled={!Object.keys(errors).length}
        >
          Log in
        </button>
      </div>
    </form>
  );
}
