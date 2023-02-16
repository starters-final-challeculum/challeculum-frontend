import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
// import axios from 'axios';
// import { apiBaseUrl } from '../common/constants';

export function MissionAdder({ getValues }) {
  const {
    register, control, handleSubmit, formState: { errors },
  } = useForm({
    defaultValues: {
      forms: [{ task: '', startAt: '', endAt: '' }],
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
    // axios.post(`${apiBaseUrl}/ground`, allData, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }).then((response) => {
    //   console.log(response.status);
    // }).catch(() => {
    //   console.log('fail');
    // });
  };

  return (
    <div>
      <button type="button" onClick={() => append({ task: '', startAt: '', endAt: '' })}>Add Form</button>
      {fields.map((field, index) => (
        <div key={field.id}>
          <label>
            Task:
            <input type="text" {...register(`forms.${index}.task`, { required: true })} />
          </label>
          {errors.forms && errors.forms[index]?.task && <p>Task is required</p>}
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
          <button type="button" onClick={() => remove(index)}>Remove Form</button>
        </div>
      ))}
      <button type="submit" onClick={handleSubmit(onSubmit)}>Submit</button>
    </div>
  );
}
