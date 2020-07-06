import React, { useEffect } from 'react';

import DataStore from '../../utils/DataStore';
import {
  GetFilmsTrending,
  GetFilmsDiscover,
  GetGenders,
} from '../../services/apiFilms';
import { Container, Logo, SubLogo, BackgroundImage } from './styles';
import splash from '~/assets/splash.png';

const logo = {
  title: {
    uri:
      'https://fontmeme.com/permalink/200706/9ca19ccfcea64256734d1ddcae58a9ce.png',
  },
  subtitle: {
    uri:
      'https://fontmeme.com/permalink/200706/390f490ff7b6b66b1777a267777dc85d.png',
  },
};

export default function Splash(props) {
  useEffect(() => {
    getFilms();

    setTimeout(() => {
      props.navigation.navigate('Login');
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
      <Logo source={logo.title} />
      <SubLogo source={logo.subtitle} />

      <BackgroundImage source={splash} />
    </Container>
  );
}
