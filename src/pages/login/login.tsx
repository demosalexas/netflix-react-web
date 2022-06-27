import { useState, useCallback, ChangeEvent } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';

import {
  Button, Input, FormError, NetflixLogo,
} from '@components';
import { Wrapper } from './login.styled';
import { authenticated } from '../../store/user/user.selector';
import userSlice from '../../store/user/user.slice';
import { Error } from '../../types/yup';

function Login(): JSX.Element {
  const dispatch = useDispatch();
  const userAuthenticated = useSelector(authenticated);

  const [data, setData] = useState<object>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string>('');

  const handleChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      [target.name]: target.value,
    }));
  }, [setData]);

  const resetError = useCallback(
    (errorMessage: string) => {
      setError(errorMessage);
    },
    [],
  );

  const handleSend = useCallback(async () => {
    try {
      const schema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required(),
      });

      await schema.validate(data);

      resetError('');

      dispatch(userSlice.actions.setData({}));
    } catch (yupError: unknown) {
      setError((yupError as Error).erros[0]);
    }
  }, [data]);

  return (
    <Wrapper
      container
      justifyContent="center"
      alignContent="center"
    >
      <Grid item xs={2}>
        <NetflixLogo width="250px" height="150px" />
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        <FormError message={error} />
        <Button onClick={handleSend}>
          Entrar
        </Button>
      </Grid>
    </Wrapper>
  );
}

export default Login;
