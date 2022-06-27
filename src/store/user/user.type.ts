type Data = {
  email?: string
  token?: string
  refreshToken?: string
};

type User = {
  data: Data
  error: string
};

export const USER_TOKEN_COOKIE = 'USER_TOKEN';

export type {
  User,
  Data,
};
