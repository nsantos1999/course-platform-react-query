import Input from 'components/form/Input';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

function CourseForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="name" ref={register} errors={errors} />
      <Input name="duration" type="number" ref={register} errors={errors} />

      <input type="submit" />
    </form>
  );
}

export default CourseForm;
