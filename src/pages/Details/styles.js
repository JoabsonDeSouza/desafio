import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../styles/colors';

export const ContainerParent = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background: ${COLORS.COLOR_MAIN};
`;

export const ContainerStart = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
`;

export const ContainerImage = styled.Image`
  width: 100%;
  height: 250px;
`;

export const ContainerAvailable = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  right: 15px;
  flex-direction: row;
`;

export const ContainerRelease = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  left: 15px;
  flex-direction: row;
`;

export const TextDetails = styled.Text`
  color: white;
  font-size: ${props => props.size || '16px'};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

export const ContainerDetail = styled.View`
  padding: 15px;
`;

export const Ikon = styled(Icon).attrs({
  size: 20,
})`
  color: ${COLORS.WHITE};
  margin-left: 5px;
`;
