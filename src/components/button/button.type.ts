import { MouseEvent, ReactNode } from 'react';

type Props = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
};

export type {
  Props,
};
