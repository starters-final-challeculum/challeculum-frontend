import React from 'react';
import { useForm } from 'react-hook-form';
import { HiCheckCircle } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiBaseUrl } from '../../../common/global-constants';

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post(`${apiBaseUrl}/user`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        alert('회원가입 완료');
        navigate('/');
      })
      .catch(() => {
        alert('회원가입 실패');
      });
  };

  const validateEmail = (value) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(value).toLowerCase());
  };

  const validatePassword = (value) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[^\dA-Za-z]).{9,20}$/;
    return re.test(value);
  };

  const validatePhoneNumber = (value) => {
    const re = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    return re.test(value);
  };

  const isSubmitDisabled = !!formState.errors.email
    || !!formState.errors.password
    || !!formState.errors.nickname
    || !!formState.errors.phoneNumber;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="text-lg font-semibold mb-2">
          이메일
        </label>
        <div className="relative">
          <input
            id="email"
            type="text"
            className="w-full rounded-md py-2 px-4 border-gray-300 border focus:outline-none focus:border-gray-600"
            {...register('username', {
              required: true,
              validate: validateEmail,
            })}
          />
          {formState.errors.username && (
            <span className="absolute right-0 top-0 mt-3 mr-4">
              <FaRegTimesCircle className="text-red-500" size={20} />
            </span>
          )}
        </div>
        {formState.errors.username?.type === 'required' && (
          <span className="text-red-500 text-sm">이메일을 입력해주세요.</span>
        )}
        {formState.errors.username?.type === 'validate' && (
          <span className="text-red-500 text-sm">올바른 이메일 형식이 아닙니다.</span>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="password" className="text-lg font-semibold mb-2">
          비밀번호
        </label>
        <div className="relative">
          <input
            id="password"
            type="password"
            className="w-full rounded-md py-2 px-4       border-gray-300 border focus:outline-none focus:border-gray-600"
            {...register('password', {
              required: true,
              validate: validatePassword,
            })}
          />
          {formState.errors.password && (
            <span className="absolute right-0 top-0 mt-3 mr-4">
              <FaRegTimesCircle className="text-red-500" size={20} />
            </span>
          )}
        </div>
        {formState.errors.password?.type === 'required' && (
          <span className="text-red-500 text-sm">비밀번호를 입력해주세요.</span>
        )}
        {formState.errors.password?.type === 'validate' && (
          <span className="text-red-500 text-sm">
            비밀번호는 9~20글자의 대문자, 소문자, 특수문자가 포함된 문자열이어야 합니다.
          </span>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="nickname" className="text-lg font-semibold mb-2">
          닉네임
        </label>
        <div className="relative">
          <input
            id="nickname"
            type="text"
            className="w-full rounded-md py-2 px-4 border-gray-300 border focus:outline-none focus:border-gray-600"
            {...register('nickname', { required: true })}
          />
          {formState.errors.nickname && (
          <span className="absolute right-0 top-0 mt-3 mr-4">
            <FaRegTimesCircle className="text-red-500" size={20} />
          </span>
          )}
        </div>
        {formState.errors.nickname && (
          <span className="text-red-500 text-sm">닉네임을 입력해주세요.</span>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="phoneNumber" className="text-lg font-semibold mb-2">
          휴대전화번호
        </label>
        <div className="relative">
          <input
            id="phoneNumber"
            type="tel"
            className="w-full rounded-md py-2 px-4 border-gray-300 border focus:outline-none focus:border-gray-600"
            {...register('phoneNumber', {
              required: true,
              validate: validatePhoneNumber,
            })}
          />
          {formState.errors.phoneNumber && (
            <span className="absolute right-0 top-0 mt-3 mr-4">
              <FaRegTimesCircle className="text-red-500" size={20} />
            </span>
          )}
        </div>
        {formState.errors.phoneNumber?.type === 'required' && (
          <span className="text-red-500 text-sm">휴대전화번호를 입력해주세요.</span>
        )}
        {formState.errors.phoneNumber?.type === 'validate' && (
          <span className="text-red-500 text-sm">올바른 휴대전화번호 형식이 아닙니다.</span>
        )}
      </div>
      <button
        type="submit"
        className={`w-full py-3 rounded-2xl font-medium ${isSubmitDisabled ? 'cursor-not-allowed bg-gray-300' : 'bg-emerald-700 cursor-pointer bg-emerald-800 text-white'}`}
        disabled={isSubmitDisabled}
      >
        Join on Challeculum !
      </button>
    </form>
  );
}
