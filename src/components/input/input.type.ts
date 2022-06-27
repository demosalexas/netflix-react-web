import { ChangeEvent } from 'react';

type Props = {
  type: string;
  name: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
};

export type {
  Props,
};
