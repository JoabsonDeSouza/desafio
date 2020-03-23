import React, { useEffect } from 'react';

import DataStore from '../../utils/DataStore';
import {
  GetFilmsTrending,
  GetFilmsDiscover,
  GetGenders,
} from '../../services/apiFilms';
import { Container, Title, Logo } from './styles';
import logo from '~/assets/logo.png';

export default function Splash(props) {
  useEffect(() => {
    getFilms();

    setTimeout(() => {
      props.navigation.navigate('Main');
    }, 2500);
  }, []);

  async function getFilms() {
    const [filmsTrending, filmsDiscover, genders] = await Promise.all([
      GetFilmsTrending(1),
      GetFilmsDiscover(1),
      GetGenders(),
    ]);

    if (filmsTrending) await DataStore.setFilmsTrending(filmsTrending);

    if (filmsDiscover) await DataStore.setFilmsDiscover(filmsTrending);

    console.log('O que tem? ', genders.data);
    if (genders) await DataStore.setGenders(genders.data);
  }

  return (
    <Container>
      <Logo source={logo} />
      <Title>CLONE</Title>
    </Container>
  );
}
