import React, { useEffect } from 'react';

import {
  Cover,
  Container,
  Logo,
  ContainerInput,
  SubLogo,
  ContainerLogo,
  Form,
  Button,
  Text,
  Input,
  ContainerTexts,
  ButtonText,
} from './styles';
import capa from '~/assets/login.jpg';

const logo = {
  title: {
    uri:
      'https://fontmeme.com/permalink/200706/9ca19ccfcea64256734d1ddcae58a9ce.png',
  },
  subtitle: {
    uri:
      'https://fontmeme.com/permalink/200706/390f490ff7b6b66b1777a267777dc85d.png',
  },
};

export default function Login(props) {
  return (
    <Cover source={capa}>
      <Container>
        <ContainerLogo>
          <Logo source={logo.title} />
          <SubLogo source={logo.subtitle} />
        </ContainerLogo>
        <Form>
          <ContainerInput>
            <Input placeholder="E-mail" placeholderTextColor="white" />
          </ContainerInput>
          <ContainerInput>
            <Input placeholder="Password" placeholderTextColor="white" />
          </ContainerInput>
          <Button>
            <Text>LOGIN</Text>
          </Button>

          <ContainerTexts>
            <ButtonText>
              <Text>Forget Password?</Text>
            </ButtonText>
            <Text style={{ marginHorizontal: 20 }}>|</Text>
            <ButtonText>
              <Text>Create Account</Text>
            </ButtonText>
          </ContainerTexts>
        </Form>
      </Container>
    </Cover>
  );
}
