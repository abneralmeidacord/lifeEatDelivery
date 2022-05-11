import React from 'react';
import { AuthWrapper, Input, Text, Button, Box } from '~/components';
import logoimg from '~/assets/img/Logo.png';
import background from '~/assets/img/background.png';
import styled from 'styled-components/native';

export const Logo = styled.Image`
  width: ${({ theme }) => theme.metrics.px(169)}px;
  height: ${({ theme }) => theme.metrics.px(169)}px;
`;

export const LoginScreen = () => {
  return (
    <AuthWrapper>
      <Box
        w={335}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        mb={37}>
        <Logo source={logoimg} />
        <Text.ExtraBoldText fontSize={32}>LIFE EAT</Text.ExtraBoldText>
        <Text.ExtraBoldText mt={-10} fontSize={24}>
          DELIVERY
        </Text.ExtraBoldText>
        <Box bg="primary" h={5} w={102} br={3} mt={9} />
      </Box>

      <Input label="Celular ou E-mail" placeholder="Seu celular ou e-mail" />
      <Input mt={24} label="SENHA" placeholder="******" />
      <Button mt={24}>Login</Button>
      <Box w={335} flexDir="column" alignItems="center" justifyContent="center">
        <Text.TextLink
          mt={8}
          children="Não possui uma conta? Faça seu cadastro"
        />
        <Text.TextLink mt={8} children="Esqueceu sua senha?" />
      </Box>
    </AuthWrapper>
  );
};
