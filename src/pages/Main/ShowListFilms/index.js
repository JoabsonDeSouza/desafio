import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { Container, ContainerItem, ImageItem } from './styles';

export default function ShowListFilms({ data, navigation }) {
  const [films, setFilms] = useState(data);

  function handleClickImage(film) {
    navigation.navigate('Details', { film });
  }

  return (
    <Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={films}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`;
          return (
            <ContainerItem onPress={() => handleClickImage(item)}>
              <ImageItem
                source={{
                  uri,
                }}
              />
            </ContainerItem>
          );
        }}
      />
    </Container>
  );
}
