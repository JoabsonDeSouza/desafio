import styled from 'styled-components/native';
import { COLORS } from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.7);
`;

export const Text = styled.Text`
  color: ${COLORS.WHITE};
  font-size: 16px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 60%;
  height: 20%;
`;

export const SubLogo = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 40%;
  height: 10%;
`;

export const Cover = styled.ImageBackground`
  flex: 1;
  background-color: black;
`;

export const ContainerLogo = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 50px;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerInput = styled.View`
  width: 80%;
  background-color: #333333;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  color: ${COLORS.WHITE};
  padding-horizontal: 10px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  width: 80%;
  height: 40px;
  border-radius: 8px;
  border-color: #f1f1f1;
  border-width: 0.5;
  justify-content: center;
  align-items: center;
`;

export const ContainerTexts = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const ButtonText = styled.TouchableOpacity``;
