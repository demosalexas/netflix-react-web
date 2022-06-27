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

  return (
    <>
      <Header />
      { myList && <ShowsRow shows={myList} title="Minha Lista" />}
      { movies && <ShowsRow shows={movies} title="Filmes" />}
      { tvShows && <ShowsRow shows={tvShows} title="Séries" />}
      <Footer />
    </>
  );
}

export default Shows;
