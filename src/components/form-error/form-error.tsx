import { Error } from './form-error.styled';
import { Props } from './form-error.type';

function FormError({ message }: Props) {
  return (
    <Error>
      {message}
    </Error>
  );
}

export default FormError;
