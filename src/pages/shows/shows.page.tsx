import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showsActions } from 'store/shows/shows.slice';
import { Header, Footer, ShowsRow } from '@components';
import { listSelector, myListSelector } from 'store/shows/shows.selector';

function Shows() {
  const dispatch = useDispatch();
  const shows = useSelector(listSelector);
  const myList = useSelector(myListSelector);
  const movies = shows.MOVIE;
  const tvShows = shows.TV_SHOWS;

  useEffect(() => {
    dispatch(showsActions.getList());
    dispatch(showsActions.getMyList());
  }, []);

  const devShows = [
    {
      id: 1,
      title: 'https://via.placeholder.com/210?text=1',
    },
    {
      id: 2,
      title: 'https://via.placeholder.com/210?text=2',
    },
    {
      id: 3,
      title: 'https://via.placeholder.com/210?text=3',
    },
    {
      id: 4,
      title: 'https://via.placeholder.com/210?text=4',
    },
    {
      id: 1,
      title: 'https://via.placeholder.com/210?text=5',
    },
    {
      id: 2,
      title: 'https://via.placeholder.com/210?text=6',
    },
    {
      id: 3,
      title: 'https://via.placeholder.com/210?text=7',
    },
    {
      id: 4,
      title: 'https://via.placeholder.com/210?text=8',
    },
  ];

  return (
    <>
      <Header />
      { devShows && <ShowsRow shows={devShows} title="Minha Lista" />}
      { devShows && <ShowsRow shows={devShows} title="Filmes" />}
      { devShows && <ShowsRow shows={devShows} title="Séries" />}
      <Footer />
    </>
  );
}

export default Shows;
