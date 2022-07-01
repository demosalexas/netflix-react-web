import { Container, ShowPoster } from './show-card.styled';

function ShowCard({ show }: any) {
  return (
    <Container>
      <ShowPoster src={show} alt={show} />
    </Container>
  );
}

export default ShowCard;
