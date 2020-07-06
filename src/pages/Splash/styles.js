import styled from 'styled-components/native';
import { COLORS } from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${COLORS.COLOR_MAIN};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${COLORS.WHITE};
  font-size: 30px;
  font-weight: bold;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  margin-top: -30%;
  width: 60%;
  height: 10%;
`;

export const SubLogo = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 40%;
  height: 30px;
`;

export const BackgroundImage = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 0px;
`;
