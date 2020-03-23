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

export const Logo = styled.Image`
  width: 300px;
  height: 150px;
`;
