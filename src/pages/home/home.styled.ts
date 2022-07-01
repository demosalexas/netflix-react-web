import styled from 'styled-components';

import NetflixBackground from '../../assets/background-image.jpg';

const Page = styled.div`
  background-color: ${(props) => props.theme.palette.core.secondary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
  position: absolute;
`;

const Section = styled.div <{ flexDirection: string }>`
  border-bottom: 8px solid #222;
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'column'};
`;

const SectionOne = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${NetflixBackground});
  position: relative;
  border-bottom: 8px solid #222;
`;

const SectionOnePartOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap:10px ;
  padding: 30px;
  width: 100%;
`;

const SectionOnePartTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px;
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 1.9rem;
  }
`;

export {
  Page,
  Section,
  SectionOne,
  SectionOnePartOne,
  SectionOnePartTwo,
};
