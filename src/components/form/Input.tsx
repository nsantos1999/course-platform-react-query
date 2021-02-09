import { InputHTMLAttributes, useMemo } from 'react';
import { DeepMap, FieldError } from 'react-hook-form';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  errors: DeepMap<Record<string, any>, FieldError>;
}

function Input(props: InputProps): JSX.Element {
  const errorMessage = useMemo(() => {
    return props.errors && props?.errors[props?.name || ''];
  }, [props?.errors, props?.name]);

  return (
    <>
      <input {...props} />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </>
  );
}

export default Input;
