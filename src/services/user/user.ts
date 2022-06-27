import axiosInstance from '../../modules/axios/axios';

import { AuthPayload } from './user.type';

const userService = () => {
  const auth = (payload: AuthPayload) => axiosInstance.post('/login', payload);

  return {
    auth,
  };
};

export default userService;
