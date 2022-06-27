import { Store } from 'store/store/store.type';

const tokenSelector = (state: Store) => state.user.data.token;
const errorSelector = (state: Store) => state.user.error;

export {
  tokenSelector,
  errorSelector,
};
