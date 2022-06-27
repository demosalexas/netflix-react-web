import { useState, useCallback, ChangeEvent, useEffect } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Button, Input, FormError, NetflixLogo,
} from '@components';
import { Wrapper } from './login.styled';
import userSlice from '../../store/user/user.slice';
// import { Error } from '../../types/yup';
import { USER_TOKEN_COOKIE } from '../../store/user/user.type';
import { errorSelector, tokenSelector } from '../../store/user/user.selector';

function Login(): JSX.Element {
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const userError = useSelector(errorSelector);
  const navigate = useNavigate();
  const from = useLocation();

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

      dispatch(userSlice.actions.authentication(data));
    } catch (yupError: unknown) {
      setError((yupError as Error).errors[0]);
    }
  }, [data]);

  useEffect(() => {
    if (token) {
      navigate('/', {
        state: { from },
      });
    }
  }, [token]);

  useEffect(() => {
    const localToken = localStorage.getItem(USER_TOKEN_COOKIE);

    if (localToken) {
      dispatch(userSlice.actions.setData({
        token: localToken,
      }));
    }
  }, []);

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
        <FormError message={error || userError} />
        <Button onClick={handleSend}>
          Entrar
        </Button>
      </Grid>
    </Wrapper>
  );
}

export default Login;
