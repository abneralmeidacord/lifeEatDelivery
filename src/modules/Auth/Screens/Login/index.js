import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AuthWrapper, Input, Text, Button, Box } from '~/components';
import logoimg from '~/assets/img/Logo.png';
import background from '~/assets/img/background.png';
import { Logo, Background } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '~/services';

export const LoginScreen = () => {
  const { values, handleSubmit, setFieldValue, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('E-mail é obrigatório')
        .email('E-mail inválido'),
      password: Yup.string()
        .required('Senha é obrigatório')
        .min(6, 'Senha deve ter no mínimo 6 caracteres'),
    }),
    onSubmit: props => {
      setUser(props);
      onLogin();
    },
  });

  const navigation = useNavigation();
  const { setNavigationContainer } = useAuthStore();
  const { setUser } = useAuthStore();

  const goToCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  const goToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const onLogin = () => {
    setNavigationContainer('client');
  };

  return (
    <Background source={background}>
      <AuthWrapper>
        <Box alignItems="center" justifyContent="center" mb={37}>
          <Logo source={logoimg} />
          <Text.ExtraBoldText fontSize={32}>LIFE EAT</Text.ExtraBoldText>
          <Text.ExtraBoldText mt={-10} fontSize={24}>
            DELIVERY
          </Text.ExtraBoldText>
          <Box bg="primary" h={5} w={102} br={3} mt={9} />
        </Box>
        <Input
          label="E-mail"
          value={values.email}
          onChangeText={text => setFieldValue('email', text)}
          error={errors.email}
          placeholder="Seu e-mail"
        />
        <Input
          label="Senha"
          value={values.password}
          onChangeText={text => setFieldValue('password', text)}
          error={errors.password}
          placeholder="********"
          mt={24}
        />
        <Button mt={24} onPress={handleSubmit}>
          Login
        </Button>
        <Box alignItems="center" justifyContent="center">
          <Text.TextLink
            onPress={goToCreateAccount}
            mt={8}
            children="Não possui uma conta? Faça seu cadastro"
          />
          <Text.TextLink
            onPress={goToForgotPassword}
            mt={8}
            children="Esqueceu sua senha?"
          />
        </Box>
      </AuthWrapper>
    </Background>
  );
};
