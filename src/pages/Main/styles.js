import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../styles/colors';

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const ContainerIconHeader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageHeader = styled.Image.attrs({
  resizeMode: 'contain',
})`
  flex: 5;
  width: 100%;
  height: 50px;
`;

export const Ikon = styled(Icon).attrs({
  size: 30,
})`
  color: ${COLORS.WHITE};
  padding: 10px;
  margin-left: 5px;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background: ${COLORS.COLOR_MAIN};
`;

export const ContainerParent = styled.SafeAreaView`
  flex: 1;
  background: ${COLORS.COLOR_MAIN};
`;

export const ContainerBanner = styled.View`
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ContainerLists = styled.View`
  flex: 2;
  margin-top: 20px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const ContainerList = styled.View`
  width: 100%;
  height: 180px;
  margin-bottom: 20px;
`;

export const TitleList = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-left: 5px;
  margin-bottom: 5px;
`;

export const SearchView = styled.View`
  width: 100%;
  flex-direction: row;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const InputSearch = styled.TextInput`
  color: white;
  width: 80%;
  height: 70%;
  border-bottom-color: white;
  border-bottom-width: 2px;
  margin-left: 10px;
  margin-right: 10px;
`;
