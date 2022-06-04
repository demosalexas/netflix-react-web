import React, { useCallback, useState, useEffect } from "react";
import * as yup from "yup";
import { Grid } from "@mui/material";

import { Wrapper } from "./login.styled";
import { Input, Button, FormError } from "../../components";


function Login() {

  const [data, setData] = useState<object>({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  const handleChange = useCallback(({ target }: any) =>{
    setData(prevData => ({
      ...prevData,
      [target.name]: target.value,
    }));
  }, [setData]);

  const handleSend = useCallback(async () => {
    try {
      const schema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required(),
      });

      await schema.validate(data);

      setError("");

    } catch(error: any) {
      setError(error.errors[0]);
    };
  }, [data]);

  return (
    <Wrapper 
      container 
      justifyContent="center" 
      alignContent="center"
    >
      <Grid item xs={2}>
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
        <FormError message={error}/>
        <Button onClick={handleSend}>Entrar</Button>
      </Grid>
    </Wrapper>
  );
};

export default Login;