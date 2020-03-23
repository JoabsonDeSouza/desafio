import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerItem = styled.TouchableOpacity`
  width: 100px;
  height: 100%;
  margin: 5px;
`;

export const ImageItem = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
`;
