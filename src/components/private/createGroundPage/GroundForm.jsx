import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useForm } from 'react-hook-form';
import { Select } from '../../common/elements/Select';
import { MissionAdder } from './MissionAdder';
import api from '../../../common/axios-config';
import { LectureSelect } from '../../common/elements/LectureSelect';

function GroundForm() {
  const { register, getValues } = useForm();
  const [lectureList, setLectureList] = useState([]);

  const getLecture = async () => {
    api.get('/user/me/lecture').then((response) => {
      setLectureList(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getLecture();
  }, []);

  return (
    <div className="justify-center flex">
      <form className="w-1/2">
        <Container>
          <label>
            그라운드 이름
            <BoundInput
              type="text"
              placeholder="제목을 입력해 주세요"
              {...register('groundTitle', {
                required: {
                  value: true,
                },
              })}
            />
          </label>
        </Container>

        <Container>
          <label>
            강의 선택
            <LectureSelect
              register={register}
              name="lectureId"
              options={lectureList}
            />
          </label>
        </Container>

        <Container>
          <label>
            강의정보
            <Description
              {...register('information')}
              rows="4"
              placeholder="강의와 그라운드에 대한 정보를 입력해주세요!"
            />
          </label>
        </Container>

        <Container>
          <label>
            최소 인원
            <BoundInput
              type="number"
              min={2}
              max={100}
              placeholder="최소 인원"
              {...register('minCapacity', {
                required: {
                  value: true,
                },
              })}
            />
          </label>
        </Container>

        <Container>
          <label>
            예치금 선택
            <Select register={register} name="deposit" options={[1000, 2000, 3000, 4000, 5000]} />
          </label>
        </Container>

        <Container>
          <label>
            시작 날짜
            <BoundInput
              type="date"
              {...register('startAt')}
            />
          </label>
        </Container>

        <MissionAdder getValues={getValues} />
      </form>
    </div>

  );
}

const Container = tw.div`
       grid gap-6 mb-8
        `;
const Description = tw.textarea`
       p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 resize-none
        `;
const BoundInput = tw.input`
        w-full pl-2.5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none
        `;

export default GroundForm;
