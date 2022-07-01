import React, { useState, useRef } from 'react';
import {
  Container, Body, Shows, Header, LeftArrow, RightArrow, Title,
} from './shows-row.styled';
import ShowCard from '../show-card/show-card.component';

function ShowsRow({ shows, title }: any) {
  const images = [
    'https://via.placeholder.com/210?text=1',
    'https://via.placeholder.com/210?text=2',
    'https://via.placeholder.com/210?text=3',
    'https://via.placeholder.com/210?text=4',
    'https://via.placeholder.com/210?text=5',
    'https://via.placeholder.com/210?text=6',
    'https://via.placeholder.com/210?text=7',
    'https://via.placeholder.com/210?text=8',
    'https://via.placeholder.com/210?text=9',
    'https://via.placeholder.com/210?text=10',
    'https://via.placeholder.com/210?text=11',
    'https://via.placeholder.com/210?text=12',
    'https://via.placeholder.com/210?text=13',
    'https://via.placeholder.com/210?text=14',
    'https://via.placeholder.com/210?text=15',
    'https://via.placeholder.com/210?text=16',
    'https://via.placeholder.com/210?text=17',
    'https://via.placeholder.com/210?text=18',
    'https://via.placeholder.com/210?text=19',
    'https://via.placeholder.com/210?text=20',
    'https://via.placeholder.com/210?text=21',
    'https://via.placeholder.com/210?text=22',
  ];

  const slideToRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 1500;
  };

  const slideToLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 1500;
  };

  return (
    <Container>
      <Header>
        <Title>FILMES</Title>
      </Header>
      <Body>
        <LeftArrow onClick={slideToLeft}>&#10094;</LeftArrow>
        <Shows id="slider">
          {images.map((image) => (<ShowCard key={image} show={image} alt="number" />))}
        </Shows>
        <RightArrow onClick={slideToRight}>&#10095;</RightArrow>
      </Body>
    </Container>
  );
}

export default ShowsRow;
