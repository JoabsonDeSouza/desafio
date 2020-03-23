import AsyncStorage from '@react-native-community/async-storage';

const DataStore = {
  setFilmsTrending: async films => {
    if (films) {
      await AsyncStorage.setItem('@films_trending', JSON.stringify(films));
    }
  },

  getFilmsTrending: async () => {
    try {
      const films = await AsyncStorage.getItem('@films_trending');
      return films ? JSON.parse(films) : '';
    } catch (error) {
      return '';
    }
  },

  setFilmsDiscover: async films => {
    if (films) {
      await AsyncStorage.setItem('@films_discover', JSON.stringify(films));
    }
  },

  getFilmsDiscover: async () => {
    try {
      const films = await AsyncStorage.getItem('@films_discover');
      return films ? JSON.parse(films) : '';
    } catch (error) {
      return '';
    }
  },

  setGenders: async genders => {
    if (genders) {
      await AsyncStorage.setItem('@genders', JSON.stringify(genders));
    }
  },

  getGenders: async () => {
    try {
      const genders = await AsyncStorage.getItem('@genders');
      return genders ? JSON.parse(genders) : '';
    } catch (error) {
      return '';
    }
  },
};

export default DataStore;
