/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Platform, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import ViewPager from '@react-native-community/viewpager';

import { Container, Image, ImageContainer } from './styles';

export default function CarouselImagesBanner({ navigation, data }) {
  const [films, setFilms] = useState(data);

  function handleClickImage(film) {
    navigation.navigate("Details", { film })
  }

  function ShowImage(film) {
    const uri = `https://image.tmdb.org/t/p/w342/${film.backdrop_path}`
    return (
      <ImageContainer
        key={film.id}
        onPress={() => handleClickImage(film)}
        activeOpacity={0}>
        <Image
          resizeMode="stretch"
          source={{
            uri,
          }}
        />
      </ImageContainer>
    );
  }

  function ShowSwiper() {
    const styleDot = {
      height: 7,
      width: 7,
      borderRadius: 50,
      top: 30,
      marginBottom: 0
    };

    if (films) {
      const showImages = [];
      films.forEach(event => {
        showImages.push(ShowImage(event));
      });

      return (
        <Swiper
          activeDotColor="red"
          dotColor="gray"
          dotStyle={styleDot}
          activeDotStyle={styleDot}>
          {showImages}
        </Swiper>
      );
    }
  }

  function ShowViewPager() {
    const { width } = Dimensions.get('window');
    const styleViewPager = {
      height: 210,
      borderRadius: 10,
      width,
    };

    if (films) {
      const showImages = [];
      films.forEach(film => {
        showImages.push(ShowImage(film));
      });

      return (
        <ViewPager
          showPageIndicator
          style={styleViewPager}
          initialPage={0}>
          {showImages}
        </ViewPager>
      );
    }
  }

  const ios = Platform.OS === 'ios';
  return <Container>{ios ? ShowSwiper() : ShowViewPager()}</Container>;
}
