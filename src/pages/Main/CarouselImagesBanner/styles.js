import styled from 'styled-components/native';

export const Container = styled.View`
  height: 250px;
  width: 100%;
`;

export const ImageContainer = styled.TouchableHighlight`
  height: 250px;
  width: 100%;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 250px;
  width: 100%;
`;
