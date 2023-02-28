import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { addDays, format } from 'date-fns';
import api from '../../../common/axios-config';

const FormWrapper = tw.div`
  mt-4
  & > * + * {
    mt-4
  }
  & input, & label {
    block w-full
  }
`;

const MissionList = tw.div`mb-4`;

const FormInput = tw.input`
  border border-gray-300 rounded-md py-2 px-3 mb-3 w-full
  focus:outline-none focus:border-blue-400
`;

const FormError = tw.p`
  text-red-600 text-sm mt-1
`;

const SubmitButton = tw.button`
  px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition-colors
`;

export function MissionForm({ getValues, startAt }) {
  const {
    register, control, handleSubmit, formState: { errors },
  } = useForm({
    defaultValues: {
      forms: [
        { assignment: '', missionAt: format(new Date(startAt), 'yyyy-MM-dd') },
        { assignment: '', missionAt: format(addDays(new Date(startAt), 1), 'yyyy-MM-dd') },
        { assignment: '', missionAt: format(addDays(new Date(startAt), 2), 'yyyy-MM-dd') },
        { assignment: '', missionAt: format(addDays(new Date(startAt), 3), 'yyyy-MM-dd') },
        { assignment: '', missionAt: format(addDays(new Date(startAt), 4), 'yyyy-MM-dd') },
        { assignment: '', missionAt: format(addDays(new Date(startAt), 5), 'yyyy-MM-dd') },
        { assignment: '', missionAt: format(addDays(new Date(startAt), 6), 'yyyy-MM-dd') },
      ],
    },
  });
  const navigate = useNavigate();
  const { fields } = useFieldArray({
    control,
    name: 'forms',
  });

  const onSubmit = (data) => {
    const allData = {
      ...getValues(),
      missionList: data.forms,
    };
    console.log(allData);
    if (fields.length >= 7) {
      api.post('/ground', allData)
        .then((response) => {
          navigate('/profile');
          console.log(response.status);
        }).catch(() => {
          console.log('fail');
        });
    } else {
      alert('미션은 매일 1개 이상이어야합니다.');
    }
  };

  return (
    <FormWrapper>
      {fields.map((field, index) => (
        <MissionList key={field.id}>
          <div className="grid grid-cols-8 space-x-3 border-t-2 pt-4 border-t-gray-700 border-opacity-30">
            <div className="col-span-2">
              <FormInput type="date" {...register(`forms.${index}.missionAt`, { required: true })} value={field.missionAt} disabled />
              {errors.forms && errors.forms[index]?.missionAt && <FormError>시작일을 지정해 주세요</FormError>}
            </div>
            <FormInput placeholder="미션 내용을 입력해주세요!" className="col-span-6" type="text" {...register(`forms.${index}.assignment`, { required: true })} />
            {errors.forms && errors.forms[index]?.assignment && <FormError>미션내용을 작성해주세요</FormError>}
          </div>

        </MissionList>
      ))}
      <SubmitButton type="submit" onClick={handleSubmit(onSubmit)}>Submit</SubmitButton>
    </FormWrapper>
  );
}
