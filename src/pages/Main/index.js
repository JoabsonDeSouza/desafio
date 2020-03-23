import React, { useState, useEffect } from 'react';
import CarouselImagesBanner from './CarouselImagesBanner';
import ShowListFilms from './ShowListFilms';
import DataStore from '../../utils/DataStore';

import {
  Container,
  ContainerParent,
  ContainerBanner,
  ContainerLists,
  Header,
  ImageHeader,
  Ikon,
  ContainerIconHeader,
  ContainerList,
  TitleList,
  SearchView,
  InputSearch,
} from './styles';

import logoHeader from '~./assets/logo.png';

export default function Main(props) {
  const [filmsTrending, setFilmsTrending] = useState();
  const [films, setFilms] = useState();

  const [showSearch, setShowSearch] = useState(false);

  const { navigation } = props;

  useEffect(() => {
    getFilmsTrending();
    getFilmsDiscover();
  }, []);

  async function getFilmsTrending() {
    const { data } = await DataStore.getFilmsTrending();
    setFilmsTrending(data.results);
  }

  async function getFilmsDiscover() {
    const { data } = await DataStore.getFilmsDiscover();
    const { genres } = await DataStore.getGenders();
    const listAllFilms = data.results;

    const filmsFilteredToGenders = [];

    genres.forEach(g => {
      const listToGender = [];

      listAllFilms.forEach(film => {
        film.genre_ids.forEach(fgId => {
          if (fgId === g.id) {
            listToGender.push(film);
          }
        });
      });

      if (listToGender.length !== 0) {
        const response = {
          ...g,
          listToGender,
        };
        filmsFilteredToGenders.push(response);
      }
    });

    setFilms(filmsFilteredToGenders);
  }

  function ShowFilms() {
    const showFilms =
      films &&
      films.map(filmsToGender => {
        return (
          <ContainerList>
            <TitleList>{`Filmes de ${filmsToGender.name}`}</TitleList>
            <ShowListFilms
              data={filmsToGender.listToGender}
              navigation={navigation}
            />
          </ContainerList>
        );
      });

    return !films ? <Header /> : showFilms;
  }

  return (
    <ContainerParent>
      <Container>
        <Header>
          {showSearch && (
            <SearchView>
              <InputSearch
                placeHolder="Buscar Filme"
                placeholderTextColor="red"
                underlineColorAndroid="transparent"
                multiline
              />
              <Ikon
                name="ios-close"
                color="#FFF"
                onPress={() => setShowSearch(false)}
              />
            </SearchView>
          )}
          <ContainerIconHeader>
            <Ikon name="ios-menu" color="#FFF" />
          </ContainerIconHeader>
          <ImageHeader source={logoHeader} />
          <ContainerIconHeader>
            <Ikon
              name="ios-search"
              color="#FFF"
              onPress={() => setShowSearch(true)}
            />
          </ContainerIconHeader>
        </Header>
        <ContainerBanner>
          {filmsTrending && (
            <CarouselImagesBanner
              data={filmsTrending}
              navigation={navigation}
            />
          )}
        </ContainerBanner>
        <ContainerLists>
          <ShowFilms />
        </ContainerLists>
      </Container>
    </ContainerParent>
  );
}
