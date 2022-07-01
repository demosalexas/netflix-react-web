import styled from 'styled-components';

const Container = styled.a`


`;

const ShowPoster = styled.img`
  height: 250px;
  width: 400px;
  margin: 10px 10px 10px 10px;
  /* object-fit: contain; */
  &:hover {
    cursor: pointer;
  }

`;

export {
  Container,
  ShowPoster,
};
