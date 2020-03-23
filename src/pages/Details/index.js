import React, { useState } from 'react';

import {
  Container,
  ContainerParent,
  ContainerImage,
  ContainerDetail,
  TextDetails,
  ContainerAvailable,
  ContainerRelease,
  ContainerStart,
  Ikon,
} from './styles';

export default function Details(props) {
  const [film] = useState(props.navigation.getParam('film'));

  const uri = `https://image.tmdb.org/t/p/w342/${film.backdrop_path}`;

  const { vote_average, overview, release_date } = film;
  const date = new Date(release_date);
  const dateFormatted = date.toLocaleDateString('pt-BR');

  return (
    <ContainerParent>
      <Container>
        <ContainerImage source={{ uri }} />
        <ContainerStart>
          <ContainerRelease>
            <TextDetails bold>{`Lançamento:  `}</TextDetails>
            <TextDetails>{`${dateFormatted}`}</TextDetails>
          </ContainerRelease>
          <ContainerAvailable>
            <TextDetails bold>{`Avaliação: `}</TextDetails>
            <TextDetails>{`${vote_average}`}</TextDetails>
            <Ikon name="ios-star" color="orange" />
          </ContainerAvailable>
        </ContainerStart>
        <ContainerDetail>
          <TextDetails bold size="20" style={{ marginBottom: 10 }}>
            Resumo
          </TextDetails>
          <TextDetails>{overview}</TextDetails>
        </ContainerDetail>
      </Container>
    </ContainerParent>
  );
}
