import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Shows = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;  
  scrollbar-width: none;  
  &::-webkit-scrollbar {
    display: none;
  }

`;

const Body = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: row;
  width: 100%;
  scroll-behaviour: smooth;
`;

const Header = styled.div`

`;

const LeftArrow = styled.button`
  /* position: absolute;
  left: 0;
  width: 3rem;
  height: 17rem;
  opacity: 0.5; */
`;

const RightArrow = styled.button`
  /* right: 0;
  position: absolute;
  opacity: 0.3;
  width: 3rem;
  height: 17rem;
  opacity: 0.5;  */
`;

const Title = styled.h3`
  font-weight: 500;
`;

export {
  Title,
  Container,
  LeftArrow,
  RightArrow,
  Shows,
  Body,
  Header,
};
