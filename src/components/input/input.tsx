import { InputStyled } from './input.styled';
import { Props } from './input.type';

function Input({
  type,
  name,
  placeholder,
  onChange,
}: Props) {
  return (
    <InputStyled type={type} name={name} placeholder={placeholder} onChange={onChange} />
  );
}

export default Input;
