import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { TiMinusOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';
import tw from 'tailwind-styled-components';
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

const MissionForm = tw.div`mb-4`;

const FormInput = tw.input`
  border border-gray-300 rounded-md py-2 px-3 mb-3 w-full
  focus:outline-none focus:border-blue-400
`;

const FormError = tw.p`
  text-red-600 text-sm mt-1
`;

const FormButtonWrapper = tw.div`
  flex justify-between items-center mt-6
`;

const AddButton = tw.button`
  flex items-center text-blue-500
`;

const SubmitButton = tw.button`
  px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition-colors
`;

export function MissionAdder({ getValues }) {
  const {
    register, control, handleSubmit, formState: { errors },
  } = useForm({
    defaultValues: {
      forms: [{ assignment: '', missionAt: '' }],
    },
  });
  const navigate = useNavigate();
  const { fields, append, remove } = useFieldArray({
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
        <MissionForm key={field.id}>
          <div className="grid grid-cols-8 space-x-3 border-t-2 pt-4 border-t-gray-700 border-opacity-30">
            <div className="col-span-2">
              <FormInput type="date" {...register(`forms.${index}.missionAt`, { required: true })} />
              {errors.forms && errors.forms[index]?.missionAt && <FormError>시작일을 지정해 주세요</FormError>}
            </div>
            <div className="col-span-6">
              <div className="grid grid-cols-6">
                <FormInput placeholder="미션 내용을 입력해주세요!" className="col-span-5" type="text" {...register(`forms.${index}.assignment`, { required: true })} />
                {errors.forms && errors.forms[index]?.assignment && <FormError>미션내용을 작성해주세요</FormError>}
                <button type="button" onClick={() => remove(index)} className="col-span-1 grid place-content-center mb-2">
                  <TiMinusOutline />
                </button>
              </div>
            </div>
          </div>

        </MissionForm>
      ))}
      <FormButtonWrapper>
        <AddButton type="button" onClick={() => append({ assignment: '', missionAt: '' })}>
          <MdAddCircleOutline size={20} />
          <span>Add Mission</span>
        </AddButton>
        <SubmitButton type="submit" onClick={handleSubmit(onSubmit)}>Submit</SubmitButton>
      </FormButtonWrapper>
    </FormWrapper>
  );
}
