import React from 'react';
import tw from 'tailwind-styled-components';
import { useForm } from 'react-hook-form';
import { Select } from '../../common/elements/Select';
import { MissionAdder } from './MissionAdder';

function GroundForm() {
  const { register, getValues } = useForm();
  return (
    <form>
      가
      <HalfWidth>
        <label>
          강의 선택
          <Select register={register} name="lectureId" options={[1, 2, 3, 4]} />
        </label>
      </HalfWidth>

      <FullWidth>
        <label>
          타이틀
          <BoundInput
            type="text"
            placeholder="제목을 입력해 주세요"
            {...register('title', {
              required: {
                value: true,
              },
            })}
          />
        </label>
      </FullWidth>

      <FullWidth>
        <label>
          강의정보
          <Description
            {...register('information')}
            rows="4"
            placeholder="강의와 그라운드에 대한 정보를 입력해주세요!"
          />
        </label>
      </FullWidth>

      <HalfWidth>
        <label>
          그라운드 레벨
          <Select register={register} name="level" options={[1, 2, 3]} />
        </label>
      </HalfWidth>

      <HalfWidth>
        <label>
          최소 인원
          <BoundInput
            type="number"
            placeholder="최소 인원"
            {...register('minCapacity', {
              required: {
                value: true,
              },
            })}
          />
        </label>
      </HalfWidth>

      <HalfWidth>
        <label>
          최대 인원
          <BoundInput
            type="number"
            placeholder="최대 인원"
            {...register('maxCapacity', {
              required: {
                value: true,
              },
            })}
          />
        </label>
      </HalfWidth>

      <HalfWidth>
        <label>
          미션 실패 면제 횟수
          <BoundInput
            type="number"
            placeholder="면제 횟수"
            {...register('missionFailLimit', {
              required: {
                value: true,
              },
            })}
          />
        </label>
      </HalfWidth>

      <HalfWidth>
        <label>
          예치금 선택
          <Select register={register} name="deposit" options={[1000, 2000, 3000, 4000, 5000]} />
        </label>
      </HalfWidth>

      <HalfWidth>
        <label>
          시작 날짜
          <BoundInput
            type="date"
            {...register('startAt')}
          />
        </label>
      </HalfWidth>

      <HalfWidth>
        <label>
          종료 날짜
          <BoundInput
            type="date"
            {...register('endAt')}
          />
        </label>
      </HalfWidth>

      <MissionAdder getValues={getValues} />
    </form>
  );
}

const HalfWidth = tw.div`
        grid gap-6 mb-8
        `;
const FullWidth = tw.div`
        relative w-full lg:max-w-sm
        `;
const Description = tw.textarea`
        block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
        `;
const BoundInput = tw.input`
        w-full pl-2.5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none
        `;

export default GroundForm;
