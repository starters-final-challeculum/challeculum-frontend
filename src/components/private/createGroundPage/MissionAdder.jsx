import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';
import { TiMinusOutline } from 'react-icons/ti';
import { apiBaseUrl } from '../../../common/globalConstants';

export function MissionAdder({ getValues }) {
  const {
    register, control, handleSubmit, formState: { errors },
  } = useForm({
    defaultValues: {
      forms: [{ assignment: '', startAt: '', endAt: '' }],
    },

  });

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
    axios.post(`${apiBaseUrl}/ground`, allData, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log(response.status);
    }).catch(() => {
      console.log('fail');
    });
  };

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id}>
          <label>
            Assignment:
            <input type="text" {...register(`forms.${index}.assignment`, { required: true })} />
          </label>
          {errors.forms && errors.forms[index]?.assignment && <p>assignment is required</p>}
          <label>
            Start Date:
            <input type="date" {...register(`forms.${index}.startAt`, { required: true })} />
          </label>
          {errors.forms && errors.forms[index]?.startAt && <p>Start Date is required</p>}
          <label>
            End Date:
            <input type="date" {...register(`forms.${index}.endAt`, { required: true })} />
          </label>
          {errors.forms && errors.forms[index]?.endAt && <p>End Date is required</p>}
          <button type="button" onClick={() => remove(index)}>
            <TiMinusOutline />
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({ assignment: '', startAt: '', endAt: '' })}>미션 추가</button>
      <button type="submit" onClick={handleSubmit(onSubmit)}>Submit</button>
    </div>
  );
}
