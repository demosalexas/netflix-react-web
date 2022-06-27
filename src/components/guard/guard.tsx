import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

import { Props } from './guard.type';
import { tokenSelector } from 'store/user/user.selector';

function Guard({ children }: Props) {
  const token = useSelector(tokenSelector);
  const navigate = useNavigate();
  const from = useLocation();

  useEffect(() => {
    if (!token) {
      navigate('/login', {
        state: { from },
      });
    }
  }, []);

  if (!token) return null;

  return children;
}

export default Guard;
